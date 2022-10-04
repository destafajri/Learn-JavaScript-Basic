//constructor function
function Person(firstName, lastName, dob){
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)
}

//instantiate object
let person1 = new Person('John', 'Mayer', '03-03-1990')
console.log(person1.dob)