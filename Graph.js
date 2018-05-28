//javascript无向图

function Graph() {
    var vertices = [];
    var adjList = new Dictionary();//邻接表
	
    /*添加顶点
    *@param v
    *@return null
    */
    this.addVertex = function(v) {
        vertices.push(v);
        adjList.set(v, []);
    };
	
    /*添加边
    *@param v,w
    *@return null
    */
    this.addEdge = function(v, w) {
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    };
	
	//控制台输出图
	this.toString = function() {
		var s = '';
		for(var i = 0; i < vertices.length; i++) {
			s += vertices[i] + '->';
			var neighbors = adjList.get(vertices[i]);
			
			for(j = 0; j < neighbors.length; j++) {
				s += neighbors[j] + ' ';
			}
			
			s += '\n';
		}
		
		console.log(s);
	};
}

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
	
	//字典大小
	this.size = function() {
		return Object.keys(items).length;
	};
}
