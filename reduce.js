// WAP to find out find out the sum of array.

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const callback = (acc, curVal, curIndex, list) => acc = acc + curVal;

const sum = list.reduce(callback, 0);

console.log(sum);


const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
];

const averageCallback = (acc, curVal, curIndex, list) => (acc = acc + list[curIndex].grade);
const average = students.reduce(averageCallback, 0) / students.length;
console.log(average);




// In the next example, reduce() is used to transform an array of strings into a single object that shows how many times each string appears in the array. Notice this call to reduce passes an empty object {} as the initialValue parameter. This will be used as the initial value of the accumulator (the first argument) passed to the callback function.


var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
/*
Output:
 { 
    dog: 2, 
    chicken: 3, 
    cat: 1, 
    rabbit: 1 
 }
 */

const petsCallback = (acc, curVal, curIndex, pets) => {
    if(acc.hasOwnProperty(curVal)){
        acc[curVal] = acc[curVal] + 1;
    }else{
        acc[curVal] = 1;
    }    
    return acc;
}

const petsCount = pets.reduce(petsCallback, {})
console.log(petsCount);


// Use of HasMap



