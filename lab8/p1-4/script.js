//datepicker
$(function () {
    $("#datepicker").datepicker({
        showButtonPanel: true,
    });
});

//tabs
$(function () {
    $("#tabs").tabs();
});

//acrodion
$(function () {
    $("#accordion").accordion({
        collapsible: true
    });
});

//dialog
$(function () {
    $("#dialog").dialog({
        autoOpen: false,
    });

    $("#opener").on("click", function () {
        $("#dialog").dialog("open");
    });
});