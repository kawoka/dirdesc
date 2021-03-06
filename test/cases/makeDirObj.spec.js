import expect from 'expect.js'
import {makeDirObj} from '../../lib/makeDirObj'

describe('makeDirObj', () => {
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
    },
    "dir3": {
      "children": {
        "child-dir2": {
          "children": {
            "grand-child-dir": {
              "desc": "some description here..."
            }
          }
        },
        "child-dir1": {
          "children": {
            "grand-child-dir1": {
              "desc": "some description here..."
            },
            "grand-child-dir2": {
              "desc": "some description here..."
            }
          }
        }
      }
    }
  }

  it('return dir structuer object', (done) => {
    makeDirObj('test/dummy-project').then((result) => {
      expect(result).to.eql(expected)
      done()
    })
  })
})
