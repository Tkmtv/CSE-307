let numbers = [];

function printArray() {
    var _s = "";
    for (var n of numbers) {
        _s += `${n} `;
    }
    document.getElementById("res").innerHTML = _s;
}

function createArray() {
    for (var i = 0; i < 20; i++) {
        numbers[i] = Math.floor((Math.random() * 20) + 1);
    }
    printArray();
}

function selectionSort() {
    var j = 0;
    do {
        var minVal = j;
        for (var i = j + 1; i < numbers.length; i++) {
            if (numbers[i] < numbers[minVal]) {
                minVal = i;
            }
        }
        var temp = numbers[j];
        numbers[j] = numbers[minVal];
        numbers[minVal] = temp;
        j++;
    } while (j < numbers.length);
    printArray();
}