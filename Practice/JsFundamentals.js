// step 1 : understand variables & function 
// Hoisitng
//
// js function is like class with contructor & methods and objects
// fat arrow ===  binds this object with function.

/*
// fat arrow vs regualr function 
fat arrow makes code shorter
- [this & arguments] object doesn't exist in arrow fn [this refer to prev obj b4r => fn creation]
- arrow fn can be accessed onyl after initialisation like let and const [postinitialization access]
- 

*/


// function getName() {
//     console.log("function");
// }

// var getName = function () {
//     console.log('function as a variable');
// }

// var getName = () => {
//     console.log('function as a variable 2 ');
// }
// GLobal execution context (EC)
// Lexical exvironment(LE) is local memory along with it LE parent
// Stack calls - > Scope chain (Linked llst of a box of [variable & function])
// Error 3 types:
/*
SyntaxError 
    let a=3;
    let a=3;
Reference Error -> temporal dead zone
Type Error
*/


// // Example 2
// function a() {
//     var b = 10;
//     c();
//     function c() {
//         console.log(d);
//     }
// }
// var d=10;
// a()


// // Example 3
// var a = 2;
// var c = 2;
// function b(){
// var x = 2;
// var c = 4
// console.log(c)
// }
// console.log(a);
// console.log(this.a);
// console.log(this.c)
// console.log(this.x)
// console.log(window.a)
// console.log(window.x)
// console.log(b());


// // eXAMPLE 4
// function outerfunction() {
//     console.log(a);
//     var a = 10;
//     innerfunction();
//     console.log('aaa');
//     function innerfunction() {
//     console.log(a);    
//     console.log(window.a);    
//     console.log(this.a);
//     }
//     }
//     var a = 7;
//     var b =3
//     outerfunction();

/* ============= Closure topic =============*/
// closure = function along with lexical environment
// function x() {
//     var a=7;
//     function y() {
//         console.log(a);
//     }
//     return y;
// }
// var z = x();  // return whole function y to z
// console.log(z);
// z();

/*
Uses of Closures:
- Module Design Pattern
- Currying 
- Functions like once
- Memorize
- Maintaining state in async world
- setTimeouts
- Iterators
- and many more....
*/


// function x(){
//     let a = 10;
//     function y(){
//     console.log(a);
//     }
//     y()
//     }
//     x();


// function x(){
//     let a = 10;
//     function y(){  
//     return a;    
//     }    
//     console.log(y());    
//     }
//     x();


// function x(){
//     let a = 10;
//     function y(){
//     console.log(a);
//     }
//     return y;
//     }
//     console.log( x());    


// function x(){
//     let a = 10;
//     function y(){
//     console.log(a);
//     }
//     return y;
//     }
//     const z = x()
//     console.log(z());


// function x(){
//     let a = 10;
//     function y(){
//     console.log(a);
//     }
//     a= 50;
//     return y;
//     }
//     const z = x()
//     console.log(z());

/* ======== Call apply and bind [Start] ======== */
// fun.call(obj)
// fun.call(obj, functionarguments)
// fun.apply(obj, array) // here array of arguments 
// fun.bind(obj) // upgrade of call i.e. it automatically binds arguments with function // default run will be an object with native code
// fun.bind(obj).(argument) // 
// Bind returns a function with object attached to it
// Call and apply invokes the function with the object and arguments


// var obj = {
// val: 100
// }
// function fun(){
// console.log(this.val)
// }
// fun()


// var obj = {
// val: 100
// }
// function fun(){
// console.log(this.val)
// }
// obj.fun()


// var obj = {
// val: 100
// }
// function fun(){
// console.log(this.val)
// }
// fun.call(obj)


// var obj = {
// val: 100
// }
// function fun(a){
// console.log(this.val + a)
// }
// fun.call(obj)


// var obj = {
// val: 100
// }
// function fun(a){
// console.log(this.val + a)
// }
// fun.call(obj, 3)


// var obj = {
// val: 100
// }
// function fun(a, b , c){
// console.log(this.val + a + b + c)
// }
// fun.call(obj, 3, 4, 5)


// var obj = {
// val: 100
// }
// function fun(a, b , c){
// console.log(a)
// console.log(b)
// console.log(c)
// }
// fun.call(obj, [3, 4, 5])


// var obj = {
// val: 100
// }
// function fun(a, b , c){
// console.log(this.val + a + b + c)
// }
// fun.apply(obj, 3, 4, 5)


// var obj = {
// val: 100
// }
// function fun(a, b , c){
// console.log(this.val + a + b + c)
// }
// const fun2 = fun.bind(obj)
// fun2(1, 2,3)

/* ======== Call apply and bind [End] ======== */
/* ======== Closure + setTimeout [Start] ======== */

// function y(){
//     setTimeout(() => console.log("a"), 1000)
//         console.log('Done Coding')
//     }
// y();


// function y(){
// setTimeout(() => console.log("a"), 0)
//     console.log('Done Coding')
//     }        
// y();

// function y(){
//     for(let i=1;i<6;i++){
//     setTimeout(() => console.log(i ), i * 1000)
//     }
//     console.log('Done Coding')
//     }
//     y();



/* ======== Closure + setTimeout [End] ======== */

// setTimeout(() => console.log('timer1 expired'), 1000)
// setTimeout(() => console.log('timer2 expired'), 0)
// function x(y) {
// console.log('inside x');
// y();
// }
// x(function y(){
// console.log('inside y')
// })


// setTimeout(() => console.log('timer1 expired'), 1000)
// setTimeout(() => console.log('timer2 expired'), 0)
// function x(y) {
// console.log('inside x');
// y();
// }
// x(function y(){
// setTimeout(() => console.log('inside y'), 0)
// })
// window.addEventListener("DOMContentLoaded", () => { console.log('DOM HAS LOADED') })
// document.addEventListener("DOMContentLoaded", () => { console.log('DOM HAS LOADED') })
// window.addEventListener("DOMContentLoaded", console.log('DOM HAS LOADED'))
// document.addEventListener("DOMContentLoaded", console.log('DOM HAS LOADED'))
// function y(){



//   for(let i=1;i<6;i++){
  
//   setTimeout(() => console.log(i ), i * 1000)
//   console.log('Done Coding')
//   }
  
  
  
  
  
//   }
  
//   y();





// STARTS HERE
// Execution Context 
// this = window
// inner & outer function; inner fn uses scope chain for variable
// Read ES5 & ES6 
// ES5 : String, Array, Json, setter getter, reserve words as property name, object methods, bind.
// ES6 : let const, arrow fn, spread operator, For/of, promises
// Map => arr.map(fun) & Bind => fun.bind(obj) they are opposite to each other
// map, filter, reduce, sort, every, some, indexOf ||| call, apply, bind




// Callback 
/*
Disadvantage
    Callback Hell (Pyramid of Doom) -> function inside function. Hence Horizontal(diagonally) extension of code.
        Disadvantage
            Unreadable
            UnMaintainable
    Inversion of Control
Advantage
    readable
    Maintainable
*/

// Promises was to replace callback hell ( when 1 function fails, leads to paradigm fail)
/*
Resolve || Reject
.then().catch()
*/
/* Promise examples
========Example 1 ==============
console.log('start')
const fn = () => (new Promise((resolve, reject) => {
  console.log(1);
  resolve('success')
}))
console.log('middle')
fn().then(res => {
  console.log(res)
})
console.log('end');
====Output=======
start
middle
1
end
success

========Example 2 ==============
console.log('start');
const promise1 = new Promise((resolve, reject) => {
    console.log(1)
})
promise1.then(res => {
    console.log(2)
})
console.log('end');
====Output=======
start
1
end

========Example 3 ==============
console.log('start');
const promise1 = new Promise((resolve, reject) => {
    console.log(1)
    resolve(2)
    console.log(3)
})
promise1.then(res => {
    console.log(res)
})
console.log('end');
====Output=======
start
1
3
end
2

========Example 4 ==============
console.log('start');
const promise1 = new Promise((resolve, reject) => {
  console.log(1)
  resolve(2)
})
promise1.then(res => {
  console.log(res)
})
console.log('end');
====Output=======
start
1
end
2

========Example 5 ==============
console.log('start')
const promise1 = new Promise((resolve, reject) => {
  console.log(1)
})
console.log('end');
====Output=======
start
1
end

========Example 6 ==============
console.log('start')
Promise.resolve(1).then((res) => {
  console.log(res)
})
Promise.resolve(2).then((res) => {
  console.log(res)
})
console.log('end');
====Output=======
start
end
1
2
========Example 7 ==============
console.log('start')
setTimeout(() => {
  console.log('setTimeout')
})
Promise.resolve().then(() => {
  console.log('resolve')
})
console.log('end')
====Output=======
start
end
resolve
setTimeout
========Example 8 ==============
const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timerStart");
    resolve("success");
    console.log("timerEnd");
  }, 0);
  console.log(2);
});
promise.then((res) => {
  console.log(res);
});
console.log(4);
====Output=======
1
2
4
timerStart
timerEnd
success
========Example 9 ==============
const timer1 = setTimeout(() => {
  console.log('timer1');
  const promise1 = Promise.resolve().then(() => {
    console.log('promise1')
  })
}, 0)
const timer2 = setTimeout(() => {
  console.log('timer2')
}, 0)
====Output=======
timer1
promise1
timer2
========Example 10 ==============
console.log('start');
const promise1 = Promise.resolve().then(() => {
  console.log('promise1');
  const timer2 = setTimeout(() => {
    console.log('timer2')
  }, 0)
});
const timer1 = setTimeout(() => {
  console.log('timer1')
  const promise2 = Promise.resolve().then(() => {
    console.log('promise2')
  })
}, 0)
console.log('end');
====Output=======
start
end
promise1
timer1
promise2
timer2


*/
// then doesnt support await itself needs await keyword. then runs in parallel doesnt wait for for 1st then

// async await replaced Promises Hell ( resolve -> then -> console.log)
/*
// why await always inside async function ?
// for sync execution of code in js
// Always put async function in try catch block for error in reject case

// hoisting 
// the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code
// OR
// default behavior of moving all declarations to the top of the current scope
// further terms 'temporal dead zone'

// higher order function
// Higher order functions are functions that take one or more functions as arguments, or return a function as their result.

// Js
// JS is a programming language of web. It is used to calculate, manupulate & validate data. It can update and change html & css.
// JS is a synchronous(Event Loop) & single threaded, but microtask runs in async manner.which makes code run in async.

// JS runtime
// JS Engine
// Event Loop 
// Execution Context (global & functional) in Phasses (ph 1 = var load undefined, ph 2 = Hoisting & initialize)
// Call Stack (aka EC stack, Program stack, control stack, Runtime stack, Machine stack)
// Call Queue 
// Microtask Queue
// Web API's (DOM, ajax, Windows, document, fetch, Timer(setTimeout),  )


// Scope (Block, function(local), GLobal)

// Strict Mode
//

// 'this' Keyword
// Arrow function

// Oprator rest & spread operator (...)
*/


