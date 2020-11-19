// 斐波那契数列

// 普通递归，性能比较差，有很多重复计算
function fibonacci(n) {
	if(n === 0 || n === 1) {
		return n
	}

	return fibonacci(n - 2) + fibonacci(n - 1)
}

// 闭包和递归优化
var fibonacci = function() {
	var dp = [0, 1]
    
    var f = function(n) {
    	if(n === 0 || n === 1) {
	    	return dp[n]
	    }
	    
	    if(!!dp[n]) {
	        return dp[n]
	    }

	    return dp[n] = f(n - 2) + f(n - 1)
    }
    
    return f
}()

// 迭代
function fibonacci(n) {
	var prev = 1
	var next = 1
	var sum = 0

	for(var i = 3; i <= n; i++) {
		sum = prev + next
		prev = next 
		next = sum
	}

	return sum
}