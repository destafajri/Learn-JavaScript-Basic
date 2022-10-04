// Key and Value

const person= {
    FirstName : 'Danang',
    LastNAme : 'Sudrajat',
    Age : 20,
    Hobbies : ['menyublim', 'sulap', 'dugem'],
    Address : {
        Street : 'Jalan doang',
        City : 'Jadian Kagak'
    }
}

console.log(person)
console.log(person.FirstName)
console.log(person.Address)
console.log(person.Hobbies)
console.log(person.Address.City)

//add key values
person.email = 'john@top.com'
console.log(person)


//Json data
const members = [
    {
        id : 1,
        nama : 'john',
        isAvailable : true
    },
    {
        id : 2,
        nama : 'Jhn',
        isAvailable : true
    },
    {
        id : 3,
        nama : 'Jowwhan',
        isAvailable : true
    },
]

console.log(members)

const membersJSON = JSON.stringify(members)
console(membersJSON)