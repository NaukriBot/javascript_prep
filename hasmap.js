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


const hmap = new Map();
pets.forEach((item, index) => {
    if (hmap.has(item)) {
        hmap.set(item, hmap.get(item) + 1);
    } else {
        hmap.set(item, 1);
    }
})

console.log(hmap);


// TODO : Convert hashmap to object;
