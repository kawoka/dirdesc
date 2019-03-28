import {test} from '../lib/index'
import expect from 'expect.js'


describe('makeDescObj', () => {

  const expected = {
    "dir1": {
      "desc": "",
      "children": {
        "child-dir1": {
          "desc": "this is dir1 description"
        },
        "child-dir2": {
          "desc": "this is dir2",
          "children": {
            "grand-child-dir": {
              "desc": "this is grand child dir"
            }
          }
        },
        "child-dir4": {
          "children": {
            "grand-child-dir": {
              "desc": "this is grand child dir with skip child dir"
            }
          }
        }
      }
    },
    "dir2": {
      "desc": "this is root dir2"
    }
  }

  it('return string', () => {
    expect(test()).to.eql(expected)
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

