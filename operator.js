// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numberic operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(`counter: ${counter}, preIncrement: ${preIncrement}`);
const postIncrement = counter++;
console.log(`counter: ${counter}, postIncrement: ${postIncrement}`);

const preDecrement = --counter;
console.log(`counter: ${counter}, preDecrement: ${preDecrement}`);
const postDecrement = counter--;
console.log(`counter: ${counter}, postDecrement: ${postDecrement}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds t const value1: true e
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullabledObject && nullableObject.something

function check(){
    console.log('check()...');
    return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conersion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const moritz1 = {name: 'moritz'};
const moritz2 = {name: 'moritz'};
const moritz3 = moritz1;
console.log(moritz1 == moritz2);
console.log(moritz1 === moritz2);
console.log(moritz1 === moritz3);

// equality
console.log(0 == false); // t
console.log(0 === false); // f
console.log('' == false); // t
console.log('' === false); // f
console.log(null == undefined); // t
console.log(null === undefined); // f


// 8. Conditional operators: if
// if, else if, else
const name = 'df';
if(name === 'moritz'){
    console.log('Welcom, moritz');
} else if (name === 'coder'){
    console.log('You are amazing coder');
} else {
    console.log('unkwnon');
}

// 9. Ternary operator: ?
// condition ? value1 : value2
console.log(name === 'moritz' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const brewser = 'IE';
switch (brewser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}


// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 5;
while (i > 0){
    console.log(`while: ${i}`);
    i--;
}

// do wile loop, body code is executed first,
// then check the condition.
do{
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for(i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

// break, continue
// Q1. iterate from = to 10 and print only even numbers (use continue)
for(let i = 0; i < 11; i++){
    if(i % 2 === 0){
        continue;
    }
    console.log(`Q1. ${i}`);
}
// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for(let i = 0; i < 11; i++){
    if(i > 8){
        break;
    }
    console.log(`Q2. ${i}`);
}