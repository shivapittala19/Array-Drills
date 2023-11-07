const nestedArray = [1, [2], [[3]], [[[4]]]];

let result = []
function flatten(elements){
    for(let index=0;index<elements.length;index++){
        if(Array.isArray(elements[index])){
            flatten(elements[index])
        }
        else{
            result.push(elements[index]);
        }
    }
    return result
}

const flattenArray = flatten(nestedArray)
console.log(flattenArray);
