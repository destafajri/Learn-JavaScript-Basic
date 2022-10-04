//constructor function
function Person(firstName, lastName, dob){
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)
}

//instantiate object
const Person1 = Person('John', 'Mayer', '03/03/1990')
console.log(Person1.dob)