'use strict';

// async & await
// clear style of using promise :)

// 1. async
function fetchUser(){
    return new Promise((resolve, reject) => {
        // do network request in 10 secs...
        resolve('moritz 1');
    });
}

async function fetchUser2(){
    // do network request in 10 secs...
    return 'moritz 2';
}

const user = fetchUser();
user.then(console.log);

const user2 = fetchUser2();
user2.then(console.log);

// 2. await..🍖
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
    await delay(1000);
    return '🍅';
}
async function getBanana(){
    await delay(1500);
    return '🍌';
}
function pickFruits(){
    return getApple().then(apple => {
        return getBanana().then(banana => `1 : ${apple} + ${banana}`);
    });
}
async function pickFruits2(){
    const apple = await getApple();
    const banana = await getBanana();
    return `2 : ${apple} + ${banana}`;
}
async function pickFruits3(){
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `3 : ${apple} + ${banana}`;
}
pickFruits().then(console.log);
pickFruits2().then(console.log);
pickFruits3().then(console.log);

// 3. useful APIs
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);