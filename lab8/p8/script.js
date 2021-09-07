$(document).ready(function () {
    let Staffs, Depts;
    $.get(
        'http://45.76.156.126/getdata.php',
        {
            Type: "Staff"
        },
        function (data) {
            Staffs = data;
            Staffs.sort(compareObject);
            showStudents(Staffs);
        }, "json"
    );
    $.get(
        'http://45.76.156.126/getdata.php',
        { Type: "Department" },
        function (data) {
            Depts = data;
            ShowDepts(Depts);
        }, "json"
    )

    //show students?
    function showStudents(_students) {
        let _s = "";
        let i = 0;
        for (let _d of _students) {
            _s += `<div class="row">
            <div class="col-1">${++i}</div>
            <div class="col-4">${_d.FistName + " " + _d.LastName}</div>
            <div class="col-4">${_d.ID}</div>
            <div class="col-3 ">
                <button type="button" class="btn Edit" data-id="${_d.ID}">Edit</button>
                <button type="button" class="btn Del" data-id="${_d.ID}">Delete</button>
            </div>
        </div>`;
        }
        $(".group-List").html("");
        $(".group-List").append(_s);
    }
    //show class?
    function ShowDepts(_depts) {
        let _s = "";
        let _option = "";
        for (let _d of _depts) {
            _s += `<li>${_d}</li>`;
            _option += `<option value="${_d}">${_d}</option>`;
        }
        $(".danhSach").append(_s);
        $("#Dept").append(_option);
        $("#editDept").append(_option);
    }

    //sort 
    function compareObject(a, b) {
        if (a.LastName < b.LastName) {
            return -1;
        }
        if (a.LastName > b.LastName) {
            return 1;
        }
        return 0;
    }

    //insert
    $("#Submit").on("click", function () {
        let _ID = $("#ID").val();
        let _FirstName = $("#FirstName").val();
        let _LastName = $("#LastName").val();
        let _Dept = $("#Dept").val();
        if (validateInput(_ID, _FirstName, _LastName)) {
            Staffs.unshift({
                "ID": _ID,
                "FistName": _FirstName,
                "LastName": _LastName,
                "Email": "",
                "Department": _Dept,
            });
            showStudents(Staffs);
        } else {
            alert("wrong input")
        }
    });

    //Delete
    $(".group-List").on("click", ".Del", function () {
        let _confirm = confirm("Are you sure?");
        if (_confirm) {
            let _ID = $(this).attr("data-id");
            for (let _index in Staffs) {
                if (Staffs[_index].ID == _ID) {
                    Staffs.splice(_index, 1);
                    break;
                }
            }
            showStudents(Staffs);
        }
    });

    //show list by class
    $(".danhSach").on("click", "li", function () {
        let _DeptName = $(this).text();
        let _tempList = [];
        for (let _d of Staffs) {
            if (_d.Department == _DeptName) {
                _tempList.push(_d);
            }
        }
        showStudents(_tempList);
    });
    $(".left").on("click", "h2", function () {
        showStudents(Staffs);
    })

    //update
    //open overlay
    $(".group-List").on("click", ".Edit", function () {
        let _ID = $(this).attr("data-id");
        for (let _index in Staffs) {
            if (Staffs[_index].ID == _ID) {
                $("#editID").val(Staffs[_index].ID);
                $("#editFirstName").val(Staffs[_index].FistName);
                $("#editLastName").val(Staffs[_index].LastName);
                $("#editDept").val(Staffs[_index].Department);
                $("#Save").attr("data-id", _index);
            }
        }
        $(".overlayMask").fadeIn();
    });

    //close overlay
    $(".closeOverlay").on("click", function () {
        $(".overlayMask").fadeOut();
    });

    //save edited
    $("#Save").on("click", function () {
        let _confirm = confirm("Are you sure?");
        if (_confirm) {
            let _ID = $("#editID").val();
            let _FirstName = $("#editFirstName").val();
            let _LastName = $("#editLastName").val();
            let _Dept = $("#editDept").val();
            if (validateInput(_ID, _FirstName, _LastName)) {
                Staffs[$("#Save").attr("data-id")] = {
                    "ID": _ID,
                    "FistName": _FirstName,
                    "LastName": _LastName,
                    "Email": "",
                    "Department": _Dept,
                };
                showStudents(Staffs);
                $(".overlayMask").fadeOut();
            }
        } else {
            alert("wrong input")
        }
    });

    //search
    $("#searchBtn").on("click", function () {
        let key = $("#search").val();
        key = key.toLowerCase();
        let temp = [];
        if (!$.trim(key) == "") {
            for (var student of Staffs) {
                var fullName = `${student.FistName} ${student.LastName}`;
                fullName = fullName.toLowerCase();
                if (fullName.indexOf(key) > -1) {
                    temp.push(student);
                }
            }
            showStudents(temp);
        } else {
            alert("wrong input");
        }
    });

    //simple input validation
    function validateInput(id, firstName, lastName) {
        if ($.trim(id) == "" || isNaN(id)) {
            return false;
        }
        if ($.trim(firstName) == "") {
            return false;
        }
        if ($.trim(lastName) == "") {
            return false;
        }
        return true;
    }
});