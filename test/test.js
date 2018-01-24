const Nightmare = require('nightmare')
const assert = require('assert')

describe('Lode a Page', function(){
  this.timeout('5s')

  let nightmare = null
  beforeEach(() => {
    nightmare = new Nightmare()
  })

  describe('/(home page)', () => {
    nightmare.goto('http://localhost:3000')
      .end()
      .then(function (result) {done() } )
      .catch(done)  
  })
})