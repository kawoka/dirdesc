import path from 'path'
import Promise from 'promise'
import {walkDir} from './walkDir.js'
import fs from 'fs'

const dirdescName = ".dirdesc"

const makeDescDirs = (rootDir, filePath) => {
  const relativePath = path.relative(rootDir, filePath)
  return relativePath.split(path.sep).filter((dir) => dir !== dirdescName)
}

const escapeDirDesc = (str) => {
  return str.replace('\n', '')
}

const makeFileObj = (obj, root, dirs, index) => {
  const dir = dirs[index]
  obj[dir] = obj[dir] || {}
  if(index >= dirs.length - 1) {
    const filePath = [root, ...dirs, dirdescName].join('/')
    const dirdesc = fs.readFileSync(filePath, {encoding: "utf-8"});
    obj[dir]["desc"] = escapeDirDesc(dirdesc)
    return obj
  }
  const children = obj[dir].children || {}
  const nextIndex = index + 1
  obj[dir].children = makeFileObj(children, root, dirs, nextIndex)
  return obj
}

const walkDirObj = (obj = {}, root, filePath) => {
  const fileName = path.basename(filePath)
  if(fileName !== dirdescName) return obj
  const dirs = makeDescDirs(root, filePath)
  obj = makeFileObj(obj, root, dirs, 0)
  return obj
}

let result = {}
export const makeDirObj = (rootDir) => {
  return new Promise(async (resolve, reject) => {
    await walkDir(rootDir, (filepath) => {
      result = walkDirObj(result, rootDir, filepath)
    }).catch((err) => reject(err) )
    resolve(result)
  })
}
