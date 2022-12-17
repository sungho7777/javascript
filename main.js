// 1. Use strict
// added in ES 5
// use this for Valina Javascript
'use strict';

// 2. Variable, rw(read / write)
// let (added in ES6)
{
    let name = "moritz";
    console.log(name);
}

// var (don't ever use this!)
// var hoisting (meve, declaration from bottom to top)
// has no block scope
{
    age = 6;
    var age;
}

// 3. Constant, r(read only!)
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: premitive types, frzen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable date type always for a few resasons;
//  - security, 보안
//  - thread safety, 다양한 쓰드
//  - reduce human mistakes

// 4. Variable types
// primitiv, single item: number, string, boolean, null, undefiedn, symbol
// object, box containew
// function, first-class function
const count = 17; // integer
const size = 17.1 // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const nagetiveInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(nagetiveInfinity);
console.log(nAn);

// bigInt ( fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2 * 53) ~ (2 * 53)
Number.MAX_SAFE_INTEGER;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 == symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 == gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const moritz = {name: 'moritz', age: 40};
moritz.age = 25;

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 7;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 7;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
//console.log(text.charAt(0));
