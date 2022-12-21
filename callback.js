'use strict';

// Javascript is synchronous.
// Excute the code block by orger after hoisting
// hoisting : var, function declaration
console.log("1");
setTimeout(function(){
    console.log("2");
}, 1000);
setTimeout(() => console.log("3"), 2000);
console.log("4");

// Synchronous callback
function ptintImmediately(print){
    print();
}
ptintImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 3000);

// Callback Hell example
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(() => {
            if(
                (id === 'moritz' && password === '1111')
                || (id === 'coder' && password === '2222')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
            
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if(user === 'moritz'){
                onSuccess({name: 'moritz', role: 'admin' });
            }else{
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
    id
    , password
    , user =>{
        userStorage.getRoles(
            user
            , userWithRole => {
                alert(`hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            }
            , error => {
                console.log(error);
            }
        );
    }
    , error => {
        console.log(error);
    }
);

//