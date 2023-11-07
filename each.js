const items = require('./data/info')

function each(elements,cb){
    for(let index=0;index<elements.length;index++){
        cb(elements[index],index);
    }
}

each(items,(item,index)=>{
    console.log(item);
    });
