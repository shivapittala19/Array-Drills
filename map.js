const items = require('./data/info')

function map(elements,cb){
    const resultArray = []
    for(let index=0;index<elements.length;index++){
        resultArray.push(cb(elements[index],index))
    }
    return resultArray
}

const finalArray = map(items ,(item,index) =>{
    return item
})
console.log(finalArray);

