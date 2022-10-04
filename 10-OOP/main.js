//constructor function
function Person(firstName, lastName, dob){
    //setter
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)
    //getter
    this.getFullname = function(){
        return `${this.firstName} ${this.lastName}`
    }
    this.getBirthDayYear = function(){
        return this.dob.getFullYear()
    }
}

//instantiate object
let person1 = new Person('John', 'Mayer', '03-03-1990')
console.log(person1.getBirthDayYear())
console.log(person1.getFullname())