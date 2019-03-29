// import * as App from './lib'
import path from 'path'
import process from 'process'
import {makeDirObj} from './lib/makeDirObj'
import {makeDiagram} from './lib/makeDiagram'
const rootDir = path.resolve( process.argv[2] || process.cwd() ) //引数が無いときはカレントディレクトリを対象とする
const main = async () => {
  const dirObj = await makeDirObj(rootDir).catch((err) => {
    console.error(err)
  })
  // console.log(JSON.stringify(dirObj))
  const diagram = makeDiagram(dirObj)
  console.log(diagram)
}
main()
