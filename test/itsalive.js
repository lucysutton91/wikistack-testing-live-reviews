// console.log( 'is it alive?')
const chai = require('chai');
const spies = require('chai-spies');
const expect = require('chai').expect;
chai.use(spies);

describe('testing basic math', () => {
  // const result =
  xit('can add two integers', () => {
    expect(2 + 2).to.equal(4)
  })
})

describe('asynchronous functions', () => {
  xit('confirms timeout accuracy', (done) => {
    let startPoint = new Date()
    setTimeout(() => {
      let duration = new Date() - startPoint
      expect(duration).to.be.closeTo(1000, 50)
      done()
    }, 1000)
  })
});

describe('testing spies', () => {
  it('confirms that forEach invokes the cb function on each item in an array', () => {
    let testArray = [1, 2, 3, 4, 5];
    function funcBeingSpiedOn(num) {
      console.log(num);
    }
    let spy = chai.spy(funcBeingSpiedOn);
    testArray.forEach(funcBeingSpiedOn);
    expect(spy).to.have.been.called.exactly(5);
    
    
    
    
  //   let obj = {
  //     name : () => {
  //       console.log('stan');
  //     }
  //   }
  //   chai.spy.on(obj, 'name');
  //   obj.name();
   
  //   expect(obj.name).to.have.been.called(1);
  // })

})
})
