var arr = [];
var x = prompt('SHEIYVANE CIFRI');
for (var f = 0; f < x; f++) {
    var y = prompt('sheiyvane studentebis gvarebi');
    arr.push(y);
}


var array = [];
var z = prompt('SHEIYVANE CIFRI');
for (var w = 0; w < z; w++) {
    var h = prompt('sheiyvane studentebis gvarebi');
    array.push(h);
}




function getMatch(arr, array) {
    var matches = [];

    for (var s = 0; s < arr.length; s++) {
        for (var e = 0; e < array.length; e++) {
            if (arr[s] === array[e]) matches.push(arr[s]);
        }
    }
    return matches;
}
var kk = arr + array;
alert(kk - matches);


