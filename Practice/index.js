
console.log('Hello World...')
// 5 primitive types JS: string, number, boolean, null, undefined
let name ='Mosh';
let x = 30.1
let a = null; // (typeof Object) Act as a object for default settings
let b = undefined; // (typeof undefined) Totally undefined
console.log(name);

let person = {
    name: "harry",
    lastname: "potter"
}
// person.name = person['name']
function greet(name) {
    console.log('Hello '+ name);
}
greet('John');
greet('Amul');
// name is parameter and John, Amul is argument.
