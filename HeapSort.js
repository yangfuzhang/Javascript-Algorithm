// 大根堆
class MaxHeap {
	constructor() {
		this.heap = []
	}

	insert(key) {
		this.heap.push(key)
		this.swim(this.heap.length - 1)
	}

	delMax() {
		let max = this.heap[0]

		if(this.heap.length > 0) {
			this.swap(0, this.heap.length - 1)
		    this.heap.pop()
		    this.sink(0)

		    return max
		} else {
			console.log('Heap is empty')

			return false
		}
	}

	swim(k) {
        while(k > 0 && this.less(Math.floor(k/2), k)) {
        	this.swap(Math.floor(k/2), k)
        	k = Math.floor(k/2)
        }
	}

	sink(k) {
		let j

        while(2 * k <= this.size()) {
        	j = 2 * k
        	j = j === 0 ? 1 : j
        	if(this.less(j, j + 1)) { j++ }
        	if(!this.less(k, j)) { break }
        	this.swap(k, j)
            k = j
        }
	}

	less(i, j) {
        return this.heap[i] < this.heap[j]
	}

	swap(i, j) {
        let temp = this.heap[i]
        this.heap[i] = this.heap[j]
        this.heap[j] = temp 
	}

	size() {
		return this.heap.length
	}

	isEmpty() {
		return this.size() === 0
	}

	toString() {
		console.log(this.heap)
	}
}


// 堆排序
function HeapSort(arr) {
    let heap = new MaxHeap()
    let len = arr.length
    let result = []

    // 构造大根堆
    for(let item of arr) {
    	heap.insert(item)
    }

    // 依次将堆顶元素（最大元素）push进result
    for(let i = 0; i < len; i++) {
    	result.push(heap.delMax())
    }

    // 逆转数组，从小到大排序
    return result.reverse()
}

HeapSort([2])
HeapSort([2,1])
HeapSort([2,4,3,5,1,8,3,9,15])
