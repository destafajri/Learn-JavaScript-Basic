//constructor function
function Person(firstName, lastName, dob){
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)
}

//Prototype
Person.prototype.getBirthDayYear = function() {
    return this.dob.getFullYear()
}

Person.prototype.getFullname = function(){
    return `${this.firstName} ${this.lastName}`
}

//instantiate object
let person1 = new Person('John', 'Mayer', '03-03-1990')
console.log(person1)
console.log(person1.getBirthDayYear())
console.log(person1.getFullname())