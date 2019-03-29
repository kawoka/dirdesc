[![Build Status](https://travis-ci.org/kawoka/dirdesc.svg?branch=master)](https://travis-ci.org/kawoka/dirdesc)
[![Coverage Status](https://coveralls.io/repos/github/kawoka/dirdesc/badge.svg?branch=master)](https://coveralls.io/github/kawoka/dirdesc?branch=master)

# dirdesc
Dirdesc is directory structure diagram generator from `.dirdesc` file

## install
`yarn global add dirdesc`

## How to use
- put `.dirdesc` file on project directories and write description
`$ echo "some directory description" > path/to/dir/.dirdesc`

- run `dirdesc` command on project root
`$ dirdesc`

- run `dirdesc` command on project root
`$ dirdesc`

- Generate Directory Structure with description

```
root
|
├- dir # some description by .dirdesc
|
└- dir2
   |
   ├- child-dir # some description by .dirdesc
   |  |
   |  └- grand-child-dir # some description here...
   |
   └- child-dir2
      |
      ├- grand-child-dir1 # some description here...
      |
      └- grand-child-dir2 # some description here...
```
