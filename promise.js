'use strict';

// Promise is a Javascript object for asynchronous opration.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject)=>{
    // doing same heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        //resolve('moritz');
        reject(new Error('no network...'));
    }, 2000);
});

// 2. Consumers, then, catch, finally
promise
    .then(value => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(()=> resolve(1), 1000);
});

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        });
    })
    .then(num => console.log(num));

// 4. Error Handling
const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hen'), 1000);
    });

const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => egg`)), 1000);
    });
const getCook = egg => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => cook`), 1000);
    });

/*
getHen() //
    .then(hen => getEgg(hen))
    .then(egg => getCook(egg))
    .then(meal => console.log(meal));
*/
getHen() //
    .then(getEgg)
    .catch(error => {
        return '🍎';
    })
    .then(getCook)
    .then(console.log)
    .catch(console.log);









//