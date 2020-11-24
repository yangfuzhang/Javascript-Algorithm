/**
 *  js快速排序
 */

//实现一
function QuickSort(arr, left, right) {
 	let pivotIndex

    if(arr.length > 1) {
    	pivotIndex = partition(arr, left, right)
    	if(left < pivotIndex - 1) {
    		QuickSort(arr, left, pivotIndex - 1)
    	}

    	if(pivotIndex < right) {
    		QuickSort(arr, pivotIndex, right)
    	}  
    }

    return arr
}

function partition(arr, left, right) {
    // 取数组中间元素为pivot
 	let pivot = arr[Math.floor((left + right)/2)]
 	let i = left
 	let j = right

 	while(i <= j){
        while(arr[i] < pivot) {
        	i++
        }

        while(arr[j] > pivot) {
        	j--
        }

        if(i <= j) {
        	swap(arr, i, j)
        	i++
        	j--
        }
 	}

 	return i
}

function swap(arr, a, b) {
 	let temp = arr[a]

 	arr[a] = arr[b]
 	arr[b] = temp
}

//实现二

function QuickSort(arr) {
　　 if (arr.length <= 1) { return arr }

    let pivotIndex = Math.floor(arr.length / 2)
    let pivot = arr.splice(pivotIndex, 1)[0]
    let left = []
    let right = []

　　for (let i = 0; i < arr.length; i++){
　　　　if (arr[i] < pivot) {
　　　　　　left.push(arr[i])
　　　　} else {
　　　　　　right.push(arr[i])
　　　　}

　　}

　　return QuickSort(left).concat([pivot], QuickSort(right))
}