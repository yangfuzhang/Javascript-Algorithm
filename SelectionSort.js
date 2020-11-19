//javascript选择排序

/**
  * @param array
**/
function SelectionSort(array) {
    var length = array.length,
        indexMin;

    for(var i = 0; i < length - 1; i++) {
        indexMin = i;
        for(var j = i + 1; j < length; j++) {
            if(array[j] < array[indexMin]) {
                indexMin = j;
            }
        }
        
        if(indexMin != i) {
            swap(array, i, indexMin);
        }
    }	

    return array;
}

/* 辅助函数，交换数组元素
** @param array
** @param a, b (数组索引)
 */
function swap(array, a, b) {
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}


var testArr = [2,5,1,4,6,9,8,7,3];

SelectionSort(testArr);

console.log(testArr);
