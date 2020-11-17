//javascript选择排序

/**
  * @param array
**/
function SelectionSort(array) {
    var length = array.length,
        indexMin;

    for(var i = 0; i < length - 1; i++) {
        indexMin = i;
        for(var j = i; j < length;j++) {
            if(array[j] < array[indexMin]) {
                indexMin = j;
            }
        }
        
        if(indexMin != i) {
            swap(array, i, indexMin);
        }
    }	

    console.log(array);
}

/*辅助函数，交换数组元素
**@param array
**@param a, b (数组索引)
*/
function swap(array, a, b) {
    var temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

