/*
Input:
type descobj : {
  "name": "dir",
  "desc": "",
  "children": [
    ...descobj
  ]
}
Output:

# Directory Structure Diagram

```
project root
│
├- dir1 # dir1 is some directory
│  |
│  ├- child-dir2 # child-dir2 description here
│  |
│  └- child-dir3 # child-dir3 description here
│
├- dir2 # hogehoge
│
├- dir3
│  |
│  └- child-dir3 # child-dir3 description here
│     |
│     └- grandchild-dir # grandchild-dir description here
│
└ dir4
   |
   ├- child-dir2 # child-dir2 description here
   |  |
   |  └- child-dir3 # child-dir3 description here
   |
   └- child-dir3 # child-dir3 description here
      |
      └- child-dir3 # child-dir3 description here
```
*/
