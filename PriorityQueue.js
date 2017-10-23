//javascript最小优先队列


function PriorityQueue() {
	
	var items = [];
	
	/*
	**队列元素
	**@param element
	**@priority priority
	*/
	function QueueElement(element, priority) {
		this.element = element;
		this.priority = priority;
	}
	
	/*
	**入列
	**@param element
	**@param priority
	*/
	this.enqueue = function(element, priority) {
		var queueElement = new QueueElement(element, priority);
		
		//队列为空，直接入列
		if(this.isEmpty()) {
			items.push(queueElement);
		} else {
			var added = false;
			
			for(var i = 0; i < items.length; i++) {
				if(queueElement.priority < items[i].priority) {
					items.splice(i, 0, queueElement);
					added = true;
					break;
				}
			}
			
			//priority值大于所有队列元素的priority
			if(!added) {
				items.push(queueElement);
			}
		}
	};
	
	//出列
	this.dequeue = function() {
		items.shift();
	};
	
	//获取队首元素
	this.front = function() {
		return items[0];
	};
	
	//判断队列是否为空
	this.isEmpty = function() {
		return items.length == 0;
	};
	
	//清空队列
	this.clear = function() {
		items = [];
	};
	
	//获取队列大小
	this.size = function() {
		return items.length;
	};
	
	//控制台打印输出队列
	this.print = function() {
		for(var i = 0; i < items.length; i++) {
			console.log(JSON.stringify(items[i]));
		}
	};
}
