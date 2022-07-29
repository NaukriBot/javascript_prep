/**
 * 1. Filter always retuns a new array after filtering existing array based on condition
 */

const list = [1, 2, 3, 4, 5, 6, 7];

const callFun = (item) => (item % 2 === 0)

const filterResult = list.filter(callFun);

console.log(filterResult);

const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
];

// Filter all the students whose grade is >75
const filterByGrages = (item) => (item.grade > 75)
const result = students.filter(filterByGrages);
console.log(result);




