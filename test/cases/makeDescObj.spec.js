import {test} from '../lib/index'
import expect from 'expect.js'
describe('test', () => {
  it('return string', () => {
    expect(test()).to.eql('this is function')
  })
})

/*
type descobj : {
  "name": "dir",
  "desc": "",
  "children": [
    ...descobj
  ]
}
*/
