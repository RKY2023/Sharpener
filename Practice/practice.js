

// //========== User's Code Starts Here ==========
// const blogs =[];

// //Do not touch these functions below at all
// function create1stBlog() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             blogs.push({title: 'BLOG1'});
//             resolve();
//         }, 3000)
//     }) 
// }

// //Do not touch these functions below at all
// function create2ndBlog() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             blogs.push({title: 'BLOG2'});
//             resolve()
//         }, 2000)
//     }) 
// }


// function deleteBlog(){
//    //complete this function such that it removes the last element from the blog Array and resolves the deleted blog in 1 second timeout
//    //If no blog present , it breaks the promise with ERROR (reject) in 1 second timeout
//    return new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         if(blogs.length > 0){
//             const blog = blogs.pop();
//             resolve(blog);
//         }else{
//             reject('ERROR');
//         }
//     }, 1000);
//    })
// }

// //Call the function in the right way so that we can get the desired output
// create1stBlog().then( () => {
//     create2ndBlog().then( () => {
//         deleteBlog().then( (deletedBlog) => {
//             console.log(deletedBlog.title);
//             deleteBlog().then( (deletedBlog) => {
//                 console.log(deletedBlog.title);
//                 deleteBlog().then( (deletedBlog) => {
//                     console.log(deletedBlog.title);
//                 }).catch(err => console.log(err));
//             }).catch(err => console.log(err));
//         }).catch(err => console.log(err));
//     }).catch(err => console.log(err));
// }).catch(err => console.log(err));

// //========== User's Code Ends Here ==========



// function a (pass){
//     return (val) =>{
//         return (val2) => {
//             return val+pass+val2;
//         }
//     }
// }

// const tt = a(12);
// console.log(tt);

// const ttt = tt(2);
// console.log(ttt(5));


// async function fun1() {
//     console.log('a'); 
//     console.log('b');
//     const t = await new Promise((res, rej) => {setTimeout(() => res(console.log('c')), 1000);});
//     const tt = await new Promise((res,rej) => {setTimeout(() => res(console.log('d')), 0)});
//     console.log('e');
//     }
//  fun1().catch(err => console.log(err));

//  async function fun1() {



//     console.log('a');
//     console.log('b');
//     const t = await new Promise((res, rej) =>{
//         console.log('promise fun b4r');
//         setTimeout(() => {
//             console.log('promise fun');
//             const yy = res((t)=>{ return 'aa';});
//             console.log(yy);
//         }, 3000);
//         console.log('promise fun after');
//         // res();
//         // rej();
//     // }).then( () =>{
//     //         console.log('then');
//     }).catch( () => {
//         console.log('catch');
//     });
//     console.log('c');
//     console.log(t);
// }
// fun1();



// console.log(null == undefined)




// const str = "GOGO ";
// console.log(str.toLowerCase());


// const radius = [1,2,4];
// function area (r) {
// return Math.PI * r * r;
// }
// function calc(logic){
// for( r in radius){
// console.log('area of  radius '+radius [r] + logic(radius[r]));
// }
// };
// calc(area);


// const obj = { val : 2 }
// const obj1 = obj; //  passed as reference/ address / pointer of variable
// obj.val = 5;
// console.log(obj.val); // val is 5 
// console.log(obj1.val); // val is 5 


// function sample (){

//   for (let i=0; i<=5;i++){
  
//   setTimeout (() => console.log(i), 1000 );
  
//   }
  
//   }
//   sample()


// let a=new Promise((resolve,reject) => {

//   reject ({ msg: 'Something went wrong'});
// });
  
//   a.then(ressolve => {
//     console.log(ressolve)}).catch(err=>{console.log(err.msg) })


function delay() {
   //do whatever you want here
   setTimeout(()=>{}, 3000);
}
async function  aawait(){
  await delay(6000)

  setTimeout (()=>{
  
  console.log("first")
  
  },10000)
  
  console.log("second");
  
}
aawait()

