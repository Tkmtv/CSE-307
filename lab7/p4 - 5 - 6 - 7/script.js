let list = document.querySelector("#worksList");
list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        if (e.target.classList.toggle("done")) {
            e.target.firstElementChild.style.display = "block";
        } else {
            e.target.firstElementChild.style.display = "none";
        }

    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.style.display = "none";
    }
}, false);

function moreWork() {
    let inputVal = document.getElementById("titleIn");
    if (inputVal.value.trim() === "") {
        alert("input empty");
    } else {
        let _li = document.createElement("li");
        _li.innerHTML = `<span class="checked">
                             <i class="fa fa-check" aria-hidden="true"></i>
                        </span>
                            ${inputVal.value}
                        <span class="close">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </span>`;
        document.getElementById("worksList").appendChild(_li);
        inputVal.value = "";
    }
}



//gallery
function picture(event) {
    var pic = document.getElementById("presentImg");
    pic.src = event.src;
    pic.style.display = "block";
    var closeBtn = document.getElementById("close_img");
    closeBtn.style.display = "block";
}

function closeImg(event) {
    event.stopPropagation();
    var pic = document.getElementById("presentImg");
    pic.style.display = "none";
    var closeBtn = document.getElementById("close_img");
    closeBtn.style.display = "none";
}

// overlay
function showOL() {
    document.getElementById("overlay").style.display = "block";
}

function hideOL() {
    document.getElementById("overlay").style.display = "none";
}