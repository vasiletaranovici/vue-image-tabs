'use strict'

const sponsors = [
	{
		name: 'Google',
		info: 'Info about Google',
		logo: 'https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.2-hp.gif'
	},
	{
		name: 'Facebook',
		info: 'Info about Facebook',
		logo: 'http://www.underconsideration.com/brandnew/archives/facebook_2015_logo_detail.png'
	},
	{
		name: 'Microsoft',
		info: 'Info about Microsoft',
		logo: 'http://diylogodesigns.com/blog/wp-content/uploads/2016/04/Microsoft-Logo-PNG.png'
	}
]

const app = new Vue({
	el: '#app',
  data: {
  	sponsors,
    info: {
    	showing: false,
      content: '',
			logo: ''
    },
    showInfo (i) {
    	this.info.showing = true
      this.info.content = this.sponsors[i].info
			this.info.logo = this.sponsors[i].logo
    },
    hideInfo () {
    	this.info.showing = false
    }
  }
})
