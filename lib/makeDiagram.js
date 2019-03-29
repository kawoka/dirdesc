const makeDesc = (dir) => {
  if(! dir.desc || dir.desc === "") return ''
  return ` # ${dir.desc}`
}
const makeDiagramLine = (name, dir, isLast, ancestors) => {
  const prefix = ancestors.map((node) => {
    return node.isLast ? '   ' : '|  '
  }).join('')
  const linePrefix = isLast ? '└- ' : '├- '
  const desc = makeDesc(dir)
  const line = `${prefix}${linePrefix}${name}${desc}`
  return [
    `${prefix}|`,
    line
  ]
}

const walkDir = (dirObj, diagramArr = [],  ancestors = []) => {
  diagramArr, dirObj, ancestors
  const keys = Object.keys(dirObj)
  let result = [...diagramArr]
  keys.forEach((key, index) => {
    const dir = dirObj[key]
    const isLast = (index === keys.length - 1)
    const dirLines = makeDiagramLine(key, dir, isLast, ancestors)
    result = [...result, ...dirLines]
    if(dir.children) {
      const newAncestors = [...ancestors, {
        name: key,
        isLast
      }]
      const childLines = walkDir(dir.children, result, newAncestors)
      result = [...childLines]
    }
  })
  return result
}

//@param dirObj
export const makeDiagram = (dirObj) => {
  const diagram = walkDir(dirObj, ['root']).join('\n')
  return diagram
}
