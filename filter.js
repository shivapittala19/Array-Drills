const items = require('./data/info')

function filter(elements,cb){
    let resultArray=[];
    for(let index = 0;index<elements.length;index++){
        if(elements[index] %2 === 0){
            resultArray.push(cb(elements[index]))
        }
    }
    return resultArray
}

const finalArray = filter(items, (item) =>{
    return item
});
console.log(finalArray);