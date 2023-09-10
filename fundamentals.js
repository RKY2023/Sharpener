

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
// fun.bind(obj) // upgrade of call i.e. it automatically binds parameter with function
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
window.addEventListener("DOMContentLoaded", () => { console.log('DOM HAS LOADED') })


document.addEventListener("DOMContentLoaded", () => { console.log('DOM HAS LOADED') })


window.addEventListener("DOMContentLoaded", console.log('DOM HAS LOADED'))


document.addEventListener("DOMContentLoaded", console.log('DOM HAS LOADED'))