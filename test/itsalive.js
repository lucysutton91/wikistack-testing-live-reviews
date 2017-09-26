// console.log( 'is it alive?')
const expect = require('chai').expect;


describe('testing basic math', () => {
  // const result =
  xit('can add two integers', () => {
    expect(2 + 2).to.equal(4)
  })
})

describe('asynchronous functions', () => {
  it('confirms timeout accuracy', (done) => {
    let startPoint = new Date()
    setTimeout(() => {
      let duration = new Date() - startPoint
      expect(duration).to.be.closeTo(1000, 50)
      done()
    }, 1000)
  })
})
