'use strict';

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apply', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump~!`)
    },
};

json = JSON.stringify(rabbit);
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);

const obj = JSON.parse(json, (key, value) => {
    return key === 'birthDate' ? new Date(value) : value
});
console.log(obj);

rabbit.jump();
//obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());

// Bonus !
const jsonDiff = 'https://jsondiff.com/'; // The semantic JSON compare tool.

const jsonBeautifier = 'https://codebeautify.org/jsonviewer';

const jsonParser = 'http://json.parser.online.fr/';

const jsonValidator = 'https://jsonformatter.curiousconcept.com/';
