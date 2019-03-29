import fs from 'fs'
import path from 'path'
import Promise from 'promise'
export const walkDir = (p, fileCallback) => {
  return new Promise((resolve, reject) => {
    fs.readdir(p, async (err, files) => {
      if(err) {
        return reject(err)
      }
      const promises = files.map((f) => {
        const fp = path.join(p, f) // to full-path
        if(fs.statSync(fp).isDirectory()) {
           return walkDir(fp, fileCallback) // ディレクトリなら再帰
        } else {
          fileCallback(fp) // ファイルならコールバックで通知
          return Promise.resolve()
        }
      })
      await Promise.all(promises).catch((err) => {
        console.error(err)
      })
      resolve()
    })
  })
}
