//javascript字典

function Dictionary() {
	
	var items = {};
	
	/*判断给定键是否存在
	*@param key
	*@return boolean
	*/
	this.has = function(key) {
		return key in items;
	};
	
	/*更新或添加键值
	*@param key
	*@param value
	*/
	this.set = function(key, value) {
		items[key] = value;
	};
	
	/*删除键值
	*@param key
	*@return boolean
	*/
	this.remove = function(key) {
		if(this.has(key)) {
			delete items[key];
			return true;
		}
		
		return false;
	};
	
	/*获取给定键的值
	*@param key
	*@return value
	*/
	this.get = function(key) {
		return this.has(key) ? items[key] : undefined;
	};
	
	//返回所有键组成的数组
	this.keys = function() {
		return Object.keys(items);
	};
	
	//返回所有键值组成的数组
	this.values = function() {
		var values = [];
		
		for(var key in items) {
			if(this.has(key)) {
				values.push(items[key]);
			}
		}
		
		return values;
	};
	
	//清空字典
	this.clear = function() {
		items = {};
	};
	
	//获取字典大小
	this.size = function() {
		return Object.keys(items).length;
	};
}
