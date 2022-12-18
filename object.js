'use strict';

// Objects
// one of the Javascript's data types.
// a collection of related data and/or functionality
// Nearly all object in Javascript are instances of Object

//1 .Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const moritz = {name: 'moritz', age: 30};
print(moritz);

// with Javascript magic (dynamically typed language)
// can add properties later
moritz.hasJob = true;
console.log(moritz.hasJob);

// can delete properties later
delete moritz.hasJob;
console.log(moritz.hasJob);

// 2. Compputed properties
// key shoild be always string
console.timeLog(moritz.name);
console.timeLog(moritz['name']);
moritz['hasJob'] = true;
console.log(moritz.hasJob);

function printValue(obj, key){
    console.log(obj[key]);
}

printValue(moritz, 'name');
printValue(moritz, 'age');

// 3. Property value shorthand
const person1 = {name: 'bob', age: 11};
const person2 = {name: 'steve', age: 22};
const person3 = {name: 'dave', age: 33};
const person4 = new Person('moritz', 40);

console.log(person4);

// 4. Constructor Function
function Person(name, age){
    // this = {};
    this.name = name;
    this.age = age;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in moritz);
console.log('age' in moritz);
console.log('random' in moritz);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for(let key in moritz){
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4];
for(let value of array){
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user1 = {name: 'moritz', age:30}
const user2 = user1;
user2.name = 'coder';
console.log(user1);

// old way
const user3 = {};
for (let key in user1){
    user3[key] = user1[key];
}
console.log(user3);

const user4 = Object.assign({}, user1);
console.log(user4);

// another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'bule', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
