/*
**二分查找算法，需先对数组进行排序
*/
function binarySearch(array, target) {
    var low = 0,
        high = array.length - 1,
        mid,
        midItem;

    while(low <= high) {
        mid = low + Math.floor((high - low) / 2)
        midItem = array[mid];
        
        if(target > midItem) {
            low = mid + 1;
        } else if (target < midItem) {
            high = mid -1;
        } else {
            return mid;
        }
    }

    return -1;
}

const arr = [1,3,7,8,10,12,18,27]
binarySearch(arr, 8) // 返回索引3
