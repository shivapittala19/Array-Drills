const items = [1, 2, 3, 4, 5, 5];

function reduce(elements, cb, startingValue) {
    for(let index=0;index<elements.length;index++){
        if (startingValue === undefined){
            startingValue = elements[index]
        }
        else{
            startingValue = cb(startingValue, elements[index]);
        }
    }
    return startingValue
}

const result = reduce(items, (startingValue,item) =>{
    return item + startingValue;
},0);
console.log(result);

