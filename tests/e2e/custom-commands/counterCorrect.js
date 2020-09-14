module.exports = {
	command: async function() {
		this.init()
		this.waitForElementPresent('#app')
		this.click('#counter-box button')
		this.click('#counter-box button')
		this.click('#counter-box button')

		// const result = await this.elements('css selector', '#app li')
    // this.assert.strictEqual(result.value.length, 6)
    this.assert.domPropertyEquals('#counter-box .change-text', 'innerText', '3')
	}
}