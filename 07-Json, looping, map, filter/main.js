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

//For loops
for(let i= 0; i <= 10; i++){
    console.log(`for loops number ${i}`)
}

for(let i= 0; i <= members.length; i++){
    console.log(members[i].nama)
}

//for each
members.forEach(function(members){
    console.log(members.nama)
})

//map
const memberName = members.map(function(members){
    return members.nama
})
console.log(memberName)

//filter
const memberAvilability = members.filter(function(members){
    return members.isAvailable == true
})
console.log(memberAvilability)

//filter and map
const memberAvilabilityName = members.filter(function(members){
    return members.isAvailable == true
}).map(function(members){
    return members.nama
})
console.log(memberAvilabilityName)