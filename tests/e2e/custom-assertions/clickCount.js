
exports.assertion = function(selector, expectedText) {
	// this.formatMessage = function() {
	// 	return {
	// 		message: this.negate ? 'click count failed: %s' : 'click count successed: %s',
	// 		args: [`${expectedText}`]
	// 	}
	// }

	this.message = 'click count failed: ' + expectedText

	this.expected = expectedText

	this.evaluate = value => value === expectedText

	this.value = res => res.value

	// this.pass = value => value === expectedText

	// this.failure

	// this.actual

	this.command = function(cb) {
		this.api.getText(selector, text => cb(text))
	}

}