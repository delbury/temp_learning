module.exports = {
	// 'self demo test counter function': browser => {
	// 	browser
	// 		.init()
	// 		.waitForElementPresent('#app')
	// 		.assert.elementPresent('#counter-box button')
	// 		.assert.domPropertyEquals('#counter-box .change-text', 'innerText', '0')
	// 		.click('#counter-box button')
	// 		.click('#counter-box button')
	// 		.verify.domPropertyEquals('#counter-box .change-text', 'innerText', '2')
	// 		.assert.elementNotPresent('#ghost')
	// 		.end()
	// },

	// 'test custom command': browser => {
	// 	browser
	// 		.counterCorrect()
	// 		.end()
	// },

	// 'test custom assertion': browser => {
	// 	browser
	// 		.init()
	// 		.waitForElementPresent('#app')
	// 		.click('#counter-box button')
	// 		.assert.clickCount('#counter-box .change-text', '1')
	// 		.end()
	// }

	// 'test custom assertion order': browser => {
	// 	browser
	// 	.assert.testAssert('#app', 'ok')
	// 	.end()
	// }

	// before: function(browser) {
 //    console.log('before');
 //  },

 //  after: function(browser) {
 //    console.log('after');
 //  },

 //  beforeEach: function(browser) {
 //    console.log('beforeEach');
 //  },

 //  afterEach: function(browser) {
 //    console.log('afterEach');
 //  },

	'test page object': browser => {
		// console.log('each')
		const page = browser.init().page.custompage().navigate()

		page.waitForElementPresent('@box')
      .test('@box')
    page.section.about.expect.section('@container').to.be.visible
    page.section.about.section.container.expect.element('@content').text.to.equal('内容')

    browser.end()
	}
}