//javascript队列实现

function Queue() {
	
	//用数组保存队列元素
	var items = [];
	
	/*入列
	**@param element
	*/
	this.enqueue = function(element) {
		items.push(element);
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
		console.log(items.toString());
	};
}
