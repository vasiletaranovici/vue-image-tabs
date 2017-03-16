const sponsorsList = ['Google', 'Facebook', 'Microsoft']
const sponsors = sponsorsList.map(name => ({name, info: `info about ${name}`}))
const app = new Vue({
	el: '#app',
  data: {
  	sponsors,
    info: {
    	showing: false,
      content: ''
    },
    showInfo (i) {
    	this.info.showing = true
      this.info.content = this.sponsors[i].info
    },
    hideInfo () {
    	this.info.showing = false
    }
  }
})
