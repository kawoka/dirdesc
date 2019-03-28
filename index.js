// import * as App from './lib'
import path from 'path'
import process from 'process'
import {makeDirObj} from './lib/makeDirObj'

const rootDir = path.resolve( process.argv[2] || process.cwd() ) //引数が無いときはカレントディレクトリを対象とする
makeDirObj(rootDir)
