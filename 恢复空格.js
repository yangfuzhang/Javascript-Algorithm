/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
let recoverSpace = function (dictionary, sentence) {
	let len = sentence.length
	let dp = [0]

	for(let i = 1; i <= len; i++) {
		let min = dp[i-1] + 1

		for(let word of dictionary) {
			if(sentence.substring(i - word.length, i) === word) {
				min = Math.min(min, dp[i - word.length])
			}
		}

		dp[i] = min
	}

	return dp[len]
}