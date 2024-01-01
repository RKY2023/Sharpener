/*
// components
// custom html elements
// index.js -> App.js -> Components(js, css) folders



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


 