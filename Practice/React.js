/*
// installing npm in project folder

// components
// custom html elements
// index.js -> App.js -> Components(js, css) folders
// controlled vs uncontrolled component
stateful 
stateless /presentational / dump component

// useState()
// 2 way binding gathering input in form submission (useState & input.value)
// gathering data 3 ways
  1)useState
  2)...oldData,
  enteredTitle : title,
  3) return

*/

// Destructuring
// const num = [1, 2, 3, 4, 5];
// [num1, , ,num3] = num;
// console.log(num1, num3);

/*
// // Rest opertor
//const fun = (...args) => { return args.filter( arg => arg >= 2);};
// console.log(fun(1,2,3,5,89));

// spread operator 
// const person = {
//     firstname : 'bam',
//     lastname : 'singh'
// }
// const newperson = {
//     ...person,
//     age : 25,
//     gender : 'male'
// }
// console.log(newperson);
*/

/*
// Advance react 
================
// side effects => state & effect = side effect of function .
//  eg. entering email,search product using api calls
// store date in browser, send http req, (set & Manage timers)
// outside normal function => useEffect
useEffect(function, [dependencies])



*/

/*
========Example 1 ==============
const student1 = {
    name : 'Yash',
    age: '25'
} 
function changeAge(studentObj){
    studentObj.age = '30'
}
changeAge(student1)
console.log(student1.age)
====Output=======
30
========Example 2 ==============
const student1 = {
    name: "Yash",
    age: "25",
  };
  function changeAge(studentObj) {
    studentObj.age = "30";
  }
  changeAge({ ...student1 });
  console.log(student1.age);
====Output=======
25
========Example 3 ==============
const studentArr = [
    {
      name: "Yash",
      age: "25",
    },
    {
      name: "Vaibhav",
      age: "23",
    },
  ];
function changeAge(studentObj) {
    studentObj.age = "30";
  }
changeAge(studentArr[0]);
console.log(studentArr[0].age);
====Output=======
30

*/


 /*
 // QA
why js is not allowed in REact. eg. innerHtml changes?


 */