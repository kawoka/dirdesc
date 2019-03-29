import expect from 'expect.js'
import {makeDiagram} from '../../lib/makeDiagram'

describe('makeDiagram', () => {

  const expected = `root
|
├- dir1
|  |
|  ├- child-dir1 # this is dir1 description
|  |
|  ├- child-dir2 # this is dir2
|  |  |
|  |  └- grand-child-dir # this is grand child dir
|  |
|  └- child-dir4
|     |
|     └- grand-child-dir # this is grand child dir with skip child dir
|
├- dir2 # this is root dir2
|
└- dir3
   |
   ├- child-dir2
   |  |
   |  └- grand-child-dir # some description here...
   |
   └- child-dir1
      |
      ├- grand-child-dir1 # some description here...
      |
      └- grand-child-dir2 # some description here...`

  const input = {
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

  it('return dir structuer diagram', () => {
    expect(makeDiagram(input)).to.eql(expected)
  })
})
