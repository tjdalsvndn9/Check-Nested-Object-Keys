

const checkObjectProperyThorougly = obj => {
  const HashArray = [];
  Object.keys(obj).forEach(value => {
    if(Array.isArray(obj[value]) && obj[value].length > 0){
      obj[value].forEach(nestedValue => {
        HashArray.push(value)
        const nestedValueArray = checkObjectProperyThorougly(nestedValue)
        HashArray.push(...nestedValueArray)
      })
    }
    else if(typeof obj[value] === 'object' && Object.keys(obj[value]).length > 0){
      HashArray.push(value)
      const nestedObjectHashArray =  checkObjectProperyThorougly(obj[value])
      HashArray.push(...nestedObjectHashArray)
    }
    else{
      HashArray.push(value)
    }
  })

  return HashArray;
}

const obj2 = {
  audioComponent:[{name:"dsafds"}],
  containerComponent:{
    duration:{
      samples:4353454,
      timeBase:{
        name:"dsfasddf"
      }
    },
    files:[
      {
        hash:"sdafdasfdasgds",
        id:"dsfadsfds",
        size:76446,
        timestap:'dsfdsafdsafdsa'
      }
    ]
  }
}

console.log(checkObjectProperyThorougly(obj2))
