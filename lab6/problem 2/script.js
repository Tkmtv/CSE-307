function row(a) {
    let val = [];
    for (var i = 0; i < 6; i++) {
        val[i]= `col-${a}-${i}`;
    };

    let _s1 = document.getElementById(val[0]).innerHTML;
    console.log(_s1);
    document.getElementById(val[1]).innerHTML = parseInt(_s1);
    document.getElementById(val[2]).innerHTML = parseFloat(_s1);
    document.getElementById(val[3]).innerHTML = Number(_s1);
    document.getElementById(val[4]).innerHTML = _s1 + _s1;
    document.getElementById(val[5]).innerHTML = _s1|0;
}

for (var i = 1; i <= 6; i++) {
    row(i);
};