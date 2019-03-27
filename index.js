import * as App from './lib'
import fs from 'fs'
import path from 'path'

const main = () => {
  console.log('-----')
  console.log(App.test())
  console.log('-----')
}

const walk = (p, fileCallback, errCallback) => {
  fs.readdir(p, (err, files) => {
    if (err) {
      errCallback(err)
      return
    }

    files.forEach((f) => {
      const fp = path.join(p, f) // to full-path
      if(fs.statSync(fp).isDirectory()) {
        walk(fp, fileCallback) // ディレクトリなら再帰
      } else {
        fileCallback(fp) // ファイルならコールバックで通知
      }
    })
  })
}

const dir = process.argv[2] || '.' //引数が無いときはカレントディレクトリを対象とする
// 使う方
walk(dir, (path) => {
    console.log(path) // ファイル１つ受信
}, (err) => {
    console.log("Receive err:" + err) // エラー受信
})
main()
