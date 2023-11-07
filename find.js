const items = require('./data/info')

function find(elements,cb,targetElement){
    for(let index=0;index<elements.length;index++){
        if (cb(elements[index], targetElement)) {
            return elements[index];
        }
    }
    return undefined

}

console.log(find(items,(item,target)=> item===target, 4));