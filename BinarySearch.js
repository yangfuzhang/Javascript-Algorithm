/*
**二分查找算法，需先对数组进行排序
*/
function binarySearch(array, item) {
    var low = 0,
        high = array.length - 1,
        mid,
        midItem;

    while(low <= high) {
        mid = Math.floor((low + high) / 2);
        mid = low + Math.floor((high - low) / 2)
        midItem = array[mid];
        
        if(item > midItem) {
            low = mid + 1;
        } else if (item < midItem) {
            high = mid -1;
        } else {
            return mid;
        }
    }

    return -1;
}
