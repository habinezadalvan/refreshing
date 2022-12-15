const arrayOfNumbers = [1,3,4,5,6,7,84,24,2,13,14,67,11,10,8];

let evenNumbers = [];
// ====================================================
// REPEATING FOR LOOP WHICH IS NOT GOOD
const filterOddNumbers = (arr) => {
    let oddNumbers = [];
    for(i = 0; i < arr.length; i++) {
        if(arr[i]%2 != 0){
            oddNumbers.push(arr[i]);
        }
    }
    return oddNumbers;
}

const filterEvenNumbers = (arr) => {
    let evenNumbers = [];
    for(i=0; i<arr.length; i++){
        if(arr[i]%2 === 0 ){
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}
// =======================================================
// ABSTRACTING FILTERING LOGIC WHICH IS GOOD
const filterFunction = (arr, logicFunction) => {
    let filteredArr = [];
    for (i= 0; i<arr.length; i++){
        logicFunction(arr[i]) ? filteredArr.push(arr[i]) : null;
    }
    return filteredArr;
}

const isOdd = (numb) => numb % 2 != 0;
const isEven = (numb) => numb % 2 === 0;
const isGreaterThanFive = (numb) => numb > 5;

console.log("Odd numbers", filterFunction(arrayOfNumbers, isOdd));
console.log("Even numbers", filterFunction(arrayOfNumbers, isEven));
console.log("Every number which is greater than five", filterFunction(arrayOfNumbers, isGreaterThanFive));

// ===============================================================================================

// Array prototype, NB: arrow functions do not have their own "this" object; they use the global one. 
// That's why using arrow function on Array.prototype does't work


Array.prototype.myFunc = function  () {
    let newArr = [];
    for (let element of this){
        element ? newArr.push(element.toUpperCase()) : null;
    }
    return newArr;
}; 
const arr = ["job", "business", "love", "family"];
arr.myFunc(); 
console.log(arr.myFunc());



// Creating FILTERING ARRAY PROTOTYPE 

Array.prototype.FilteringFunction = function (callback) {
    let filteredArr = [];
    // "this" in this context refers to any array will use this function on.
    for(let i in this){
        callback(this[i]) ? filteredArr.push(this[i]) : null;
    }
    return filteredArr;
}

console.log(arrayOfNumbers.FilteringFunction(a => a <4));
console.log(arrayOfNumbers.filter(isEven));
console.log(arrayOfNumbers.FilteringFunction(isGreaterThanFive).FilteringFunction(isEven));
