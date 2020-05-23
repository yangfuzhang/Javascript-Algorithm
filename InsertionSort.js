//javascript插入排序

/*
**@param array
*/
function insertionSort(array) {
    var length = array.length,
        j, temp;

    for(var i = 1; i < length; i++) {
        j = i;
        temp = array[i];
        
        while(j > 0 && array[j-1] > temp) {
            array[j] = array[j-1];
            j--;
        }
        
        array[j] = temp;
    }
};

var testArr = [2,5,1,4,6,9,8,7,3];

insertionSort(testArr);

console.log(testArr);

