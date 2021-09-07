let time = 0;
function move() {
    var bar = document.querySelector("#bar");
    var width = 10;
    var intv = setInterval(frame, 100);
    function frame() {
        if (width >= 100) {
            clearInterval(intv);
        } else {
            width++;
            bar.style.width = width + "%";
            bar.innerHTML = width + "%";
        }
    }
}