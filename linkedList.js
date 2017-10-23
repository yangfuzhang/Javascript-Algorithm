//javascript单向链表

function LinkedList() {
	
	//用于创建链表节点
	var Node = function(element) {
		this.element = element;
		this.next = null;
	};
	
	var length = 0; //链表长度
	var head = null;//头部节点
	
	//向链表尾部追加元素
	//@param element
	this.append = function(element) {
		
		var node = new Node(element),
		    current;//指向链表当前项的指针
		
		if(head == null) {//空链表
			head = node;
		} else {
			current = head;
			
			while(current.next) {//从头遍历链表，找到最后一项
				current = current.next;
			}
			
			//current = current.next
			current.next = node;
		}
		
		length++;//更新链表长度
	};
	
	//移除指定位置的链表元素
	//@param position
	//@return element
	this.removeAt = function(position) {
		if(position > -1 && position < length) {
			
			var current = head,
			    previous,
				index = 0;
				
			if(position == 0) {//移除头部元素
				head = current.next;
			} else {
				
				while(index++ < position) {
					previous = current;
					current = current.next;
				}
				
				previous.next = current.nexty;
			}
			
			length--;//更新列表长度
			
			return current.element;
				
		} else {//越界返回null
			return null;
		}
	};
	
	/* 向链表任意位置插入元素
	** @param position
	** @param element
	** @return boolean
	*/
	this.insert = function(position, element) {
		
		if(position >= 0 && position <= length) {
			
			var node = new Node(element),//创建节点
			    current = head,
				previous,
				index = 0;
				
			if(position == 0) {//在头部插入节点
				node.next = current;
				head = node;
			} else {
				
				while(index++ < position) {
					previous = current;
					current = current.next;
				}
				
				node.next = current;
				previous.next = node;
				
			}
			
			length++;//更新链表长度
			
			return true;
			
		} else {//越界返回false
			return false;
		}
	};
	
	//将链表对象转换成字符串
	this.toString = function() {
		
		var current = head,
		    string = '';
		
		while (current) {
			string += current.element;
			string += " ";
			current = current.next;
		}
		
		return string;
	};
	
	//查找元素位置
	//@param element
	//@return index
	this.indexOf = function(element) {
		
		var current = head,
		    index = 0;
		
		while(current) {
			if(element == current.element) {
				return index;
			}
			index++;
			current = current.next;
		}
		
		return -1;
	};
	
	//移除给定元素
	//@param element
	//@return element
	this.remove = function(element) {
		var index = this.indexOf(element);
		return this.removeAt(index);
	};
	
	//判断链表是否为空
	this.isEmpty = function() {
		return length == 0;
	};
	
	//获取链表长度
	this.size = function() {
		return length;
	};
	
	//获取链表头部元素
	this.getHead = function() {
		return head;
	};
}




