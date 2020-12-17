class MaxHeap {
	constructor() {
		this.heap = []
	}

	insert(key) {

	}

	swim(k) {
        while(k > 0 && this.less(Math.floor(k/2), k)) {
        	swap(Math.floor(k/2), k)
        	k = Math.floor(k/2)
        }
	}

	sink(k) {
        while(2 * k <= this.size()) {
        	j = 2 * k
        	if(this.less(j, j + 1)) { j++ }
        	if(!this.less(k, j)) { break }
        	swap(k, j)
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
}