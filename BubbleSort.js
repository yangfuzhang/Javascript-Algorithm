//javascript冒泡排序

/**
 ** @param array
**/
function BubbleSort(array) {
    var length = array.length;

    for(var i = 0; i < length; i++) {
        for(var j = 0; j < length-1-i; j++) {
            if(array[j] > array[j+1]) {
                swap(array, j, j+1);
            }
        }
    }

    return array
}

function swap(array, a, b) {
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

var testArr = [2,5,1,4,6,9,8,7,3];

BubbleSort(testArr);

console.log(testArr);

