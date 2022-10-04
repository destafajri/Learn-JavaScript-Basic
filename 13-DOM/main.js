//single element selector
const form = document.getElementById('my-form')
console.log('this is form ' +form)

    //JQuery
const Jquery= document.querySelector('h1')
console.log(Jquery)

//multiple element selector
const items = document.querySelectorAll('.item')
console.log('this is multi ' + items)
items.forEach((item) => console.log(item))

const getclass = document.getElementsByClassName('item')
console.log(getclass)