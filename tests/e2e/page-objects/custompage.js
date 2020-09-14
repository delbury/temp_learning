module.exports = {
  // url: function() { 
  //    return this.api.launchUrl + '/about'; 
  //  },
  url: '/#/about',
	commands: [
    {
      test(selector) {
        return this.waitForElementVisible(selector)
      }
    }
  ],
	elements: {
		box: '#app',
	},
	sections: {
    about: {
      selector: '.about',
      elements: {
        title: {
          selector: 'h1',
        },

        subTitle: {
          selector: '.sub-title'
        },
      },
      sections: {
        container: {
          selector: '.container',
          elements: {
            header: '.header',
            content: '.content',
          }
        }
      }
    }
	}
}