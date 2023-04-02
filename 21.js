/*
[set]
 * set.add()
 * set.delete()
 * set.clear(): simply clears all the elemets of the set
 * set.has(): simply check whether the set has the desired value (배열의 includes와 유사)
 * set.size: returns a number of elements in the set
 
[set vs array]
 1. array
 * an ordered list of objects
 * can access the elements of an array by referencing its integer position in the list
 2. set
 * an unordered pool of unigue elements
 * no integer index which can be used to access a special element of a set
 * set[indexNumber] >> undefined
 * only contains distinct elements >> can avoid saving duplicate data to the structure

[map]
 * holds key value paris and remembers the original insertion order of the keys
 * both objects and primitive values may be used as either a key or a value
 * can use obejects as keys!
 * can solve the problem that the object only supports one key object
 
 * map.set(key, value): adds
 * map.delete: deletes the elements with the key
 * map.clear(): can get an empty map back
 * map.has(): searches by keys (when values are given as parameters, it returns 'false')
 * map.size()
 */

const arr = [1, 2, 3, 4, 5];
const mySet = new Set(arr);

mySet.add(5);

console.log(mySet);

const myMap = new Map([
  ["name", "Jane"],
  ["surname", "Doe"],
]);

console.log(myMap);

// let set1 = {1, 3, 5, 7, 9};

// let set2 = {};
// console.log(typeof set2);
let set3 = new Set("Javascript");
console.log(typeof set3);
// let set4 = new Set(range(5));
// console.log(typeof set4);
let set5 = new Set();
console.log(typeof set5);

// set의 생성자: Set()
