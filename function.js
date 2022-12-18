'use strict';

// Function
// - fundamental building block in program
// - subprogta, can be used multiple times
// - pergorms a task or calculates a value

// 1. Function declaration
// function name(param1, param2){ body...return;}
// one function === one thing
// naming: dosSmething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello(){
    console.log('Hello');
}
printHello();

function log(msg){
    console.log(msg);
}
log('Hello~~');

// 2. Parmeters
// premitive parametersL passed by value
// object paremeters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const moritz = {name : 'moritz'}
changeName(moritz);
console.log(moritz);

// 3. Default patemeters (added in ES6)
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!!')

// 4. Rest parameters (added in Es6)
function printAll(...args){
    for (let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
    for (const arg of args){
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'moritz');

// 5. Lcal scope
let globalMessage = 'global';
function printMessage(){
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
}
printMessage();

// 6. Return a value
function sum(a, b){
    return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user){
    if(user.point > 10){
        // long upgrade logic

    }
}

// good
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    // long upgrade logic

}

// First-class function
// function are treated like other variable
// can be assianed as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declearation can be called earlier than it is defiend. (hoidted)
// a function expression is created when execution reaches it.
const print = function (){ // anonymous function
    console.log('print');
};

print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}

// anonymous function
const printYes = function(){
    console.log('printYes');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print(){
    console.log('printNo');
};

randomQuiz('love you', printYes, printNo);
randomQuiz('wrong', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function () {
    console.log('simplePrint');
};

const simplePrint2 = () => console.log('simplePrint');
const add = (a, b) => a + b; // do something more

// IIFE: Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})();