//javascript插入排序

/**
 * @param array
**/
function insertionSort(array) {
    var length = array.length,
        j, temp;

    // 遍历数组，从索引1开始，因为索引0默认已排序
    for(var i = 1; i < length; i++) {
        j = i;
        temp = array[i]; // 保存当前遍历到的数组元素
        
        while(j > 0 && array[j-1] > temp) {
            array[j] = array[j-1];
            j--;
        }
        
        // 将临时保存的当前元素插入正确位置，覆盖当前的array[j]
        // array[j]中的元素已经移动到它的后一个位置
        array[j] = temp;
    }
};

var testArr = [2,5,1,4,6,9,8,7,3];

insertionSort(testArr);

console.log(testArr);

