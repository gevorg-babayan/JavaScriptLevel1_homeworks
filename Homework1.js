//1. Given an object. Invert it (keys become values and values become keys). If there is
//more than key for that given value create an array.

function objectInverter (obj){
   
    for(let key in obj){
    
    if(obj.hasOwnProperty(obj[key])) {
        if(typeof(obj[obj[key]]) === 'object'){
           obj[obj[key]] = obj[obj[key]].concat(key)     
        } else {
            obj[obj[key]] = [obj[obj[key]] , key]
        }
        
    }   else {
        obj[obj[key]] = key
    }
    
    delete(obj[key])
}
    return obj
}


//2. Given two objects. Write a function that performs shallow compare.

function doesInclude(obj,key,pr){
    for(let k in obj){
        if(obj[k] === pr && k === key){
            return true
        }
    }
    return false
}


function Compare(o1,o2){
  
    for(let key in o2){
        if(!doesInclude(o1,key,o2[key])){
            return false
        }
    }

    for(let k in o1){
        if(!doesInclude(o2,k,o1[k])){
            return false
        }
    }
    return true
}


//3. Given an array. Determine whether it consists only from uniques or not.

function isUnique (arr) {
   for (let i = 0; i < arr.length; i++) {
       for(let j = 0; j < arr.length; j++){
            if(arr[i] === arr[j] && i !== j){
                return false
            }
        }
    }
    return true
}

//4. Determine if a word or phrase is an isogram. An isogram (also known as a &quot;non pattern
//word&quot;) is a word or phrase without a repeating letter.

function isIsogram (str) {
    
    for (let i = 0; i < str.length; i++) {
        for(let j = 0; j < str.length; j++){
            if(str[i] === str[j] && i !== j){
                return false
            }
        }
    }
    return true
}

//5. Given an array of integers. All numbers are unique. Find the count of missing numbers
//between minimum and maximum elements to make integers sequence.

function countMissing (arr){
    let max = -Infinity
    let min = Infinity
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > max){
            max = arr[i]
        }
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return max - min + 1 - arr.length
}
