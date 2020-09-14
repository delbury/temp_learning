// this.command => this.value => this.evaluate

exports.assertion = function testAssert(selector, expected) {
	// this.options = {
  //   elementSelector: true
  // };

  // 1.
	this.formatMessage = () => {
		console.log('formatMessage')
		return {
			message: 'the the the messsssssage.',
			args: []
		}
	}

	// 7.
	this.expected = () => console.log('expected')

	// 5.
	this.evaluate = (value) => {
		console.log('evaluate', value)
		return value === expected
	}

	// 4.
	// this.value = (res) => {
	// 	console.log('value', res.value)
	// 	return res.value
	// }

	// // 3.
	// this.failure = (res) => {
	// 	console.log('failure', res)
	// 	return res.value !== expected
	// }

	// 6.
	// this.actual = (passed) => console.log('actual', passed)

	// 2.
	this.command = (cb) => {
		console.log('command')
		cb({ value: 'ok' })
	}
}