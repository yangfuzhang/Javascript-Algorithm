/**
*Depth-First Search
*图的深度优先遍历
*/

//javascript无向图

function Graph() {
	
    var vertices = [];
    var adjList = new Dictionary();//邻接表

    var initializeColor = function() {
        var color = [];
        for (var i = 0; i < vertices.length; i++) {
            color[vertices[i]] = 'white';
        }

        return color;
    };

    var dfsVisit = function (u, color, callback) {
        color[u] = 'grey';

        if (callback) {
            callback(u);
        }

        var neighbors = adjList.get(u);

        for (var i = 0; i < neighbors.length; i++) {
            var w = neighbors[i];
            if (color[w] === 'white') {
                dfsVisit(w, color, callback);
            }
        }

        color[u] = 'black';
    };

    /**
    *添加顶点
    *@param v
    *@return null
    */
    this.addVertex = function(v) {
        vertices.push(v);
        adjList.set(v, []);
    };

    /**
    *添加边
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

    this.dfs = function(callback) {
        var color = initializeColor();

        for(var i = 0; i < vertices.length; i++) {
            if(color[vertices[i]] === 'white') {
                dfsVisit(vertices[i], color, callback);
            }
        }
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

    //javascript队列

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
        return items.shift();
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



//DFS测试

function test() {
    var graph = new Graph();
    var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

    for (var i = 0; i < myVertices.length; i++) {
        graph.addVertex(myVertices[i]);
    }

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('A', 'D');
    graph.addEdge('C', 'D');
    graph.addEdge('C', 'G');
    graph.addEdge('D', 'G');
    graph.addEdge('D', 'H');
    graph.addEdge('B', 'E');
    graph.addEdge('B', 'F');
    graph.addEdge('E', 'I');

    function printNode(value) {
        console.log('Visited vertex:' + value);
    }

    graph.dfs(printNode);
}

test()
