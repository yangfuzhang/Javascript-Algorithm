/**Stack
 * javascript栈
**/

function Stack() {
	// 数组保存栈元素
	var items = [];

	this.push = function(element) {
		items.push(element);
	}

	this.pop = function() {
		return items.pop();
	}

	this.peek = function() {
		return items[items.length - 1];
	}

	this.isEmpty = function() {
		return items.length == 0;
	}

	this.size = function() {
		return items.length;
	}

	this.clear = function() {
		items = [];
	}

	this.print = function() {
		console.log(items.toString());
	}
}
