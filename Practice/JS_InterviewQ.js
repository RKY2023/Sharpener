// ES6 10 features
// const & let scope
// let & const have block scope
// arrow functions
// arrow function was designed to access this scope using stack sequence.
// promises & callbacks
// callbacks are introduced to execute the function after current function is executed
// promises was introduced to remove hell callback to improvise async tasks which where running using callback  hell.
// spread operator
// it was meant to spread the arguments.
// further mutated the argument by just overwriting after that argument.
// eventlisteners
// event listener object were made to control hardware events in an event loop to optimise it
// Object.keys()
// To access the properties/ keys in that ojects.
// classes
// classes were introduced to further usage of method & constructor for custom function & object with their keys & constructor.
// find, split, join etc
// array function like these were introducted to manipulate array rather than writing code again & again for each fucntion every time.
// call, apply bind
// call
// call method is used for invoke a function with object as an argument.
// e.g. abc.call(obj, 3); // 3 is here  an argument value.
// apply 
// It also similar to an call but rather than mutliple arguments its takes then as an array.
// e.g. abc.apply(obj, [2,3,4.]); // [2, 3, 4]  ia an arry of arguments.
// bind
// It is more advance of apply method
// In which method can taken from object to another object.
// e.g. obj.fun.bind(this) // here this is an object which we care binding means whatever instance is called is passed as an object.
// store data in browser
// Local storage 
// it is used to store data for browser, which lasts longer as storein local memeory of browser;
// It can be used to store user data which meant to be exist after termination/ closing of a browser. example : user login tokens if we want, themes etc.
// Session storage
// It is used to store data till session is closed. i.e. here in case a window.
// It can be used to store session based info like payment info(for small time), login important data, page data etc.
// Generator function are type of iterator function which return value using yield keyword rather than return keyword& next yield can be accessed by using .next() function.
// The normal function uses return keyword to return a value. But generator function using yield keyword to do so with next iterable values to be accessed & executed.
// The main diffrence b/w them are
// array.foreach does not return anyhting / undefined, but runs for all indexes in it.
// array.map return a mapped value fo reach indexes / items in that array as an array.
// array.filter filters an array based the condition & return those indexes /items which qualify that condition.
// array.reduce is a function that reduces the value to a single value as the accumulation. belowfunction willreturn sum
// e.g. const a = [1,5,3];
// function fun(sum, a) {
// return sum+a;
// }
// a.reducer(fun);