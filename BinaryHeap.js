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
		this.swap(0, this.heap.length - 1)
		this.heap.pop()
		this.sink(0)

		return max
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

let heap = new MaxHeap()

heap.insert(4)
heap.insert(2)
heap.insert(8)
heap.insert(5)
heap.insert(7)
heap.insert(12)

heap.toString()
console.log(heap.delMax())
heap.toString()