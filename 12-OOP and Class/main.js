//Class
class Person{
    constructor(firstName, lastName, dob){
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)
    }

    getBirthDayYear(){
        return this.dob.getFullYear()
    }

    getFullname(){
        return `${this.firstName} ${this.lastName}`
    }
}

//instantiate object
let person1 = new Person('John', 'Mayer', '03-03-1990')
console.log(person1)
console.log(person1.getBirthDayYear())
console.log(person1.getFullname())