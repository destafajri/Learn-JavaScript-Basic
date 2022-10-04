// String, Numbers, Boolean, null, undefined

const nama = 'John Dever';
const age = 200;
const rating = 4.6;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof nama)
console.log(typeof age)
console.log(typeof rating)
console.log(typeof isCool)
console.log(typeof x)
console.log(typeof y)
console.log(typeof z)

//concelation
console.log('My name is ' + nama + ' My age is ' + age)
//Template of String
console.log(`My name is ${nama} And Im ${age}`)
//variable from template string
let Hello = `My name is ${nama} And Im ${age}`
console.log(Hello)