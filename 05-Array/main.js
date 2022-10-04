// Arrays

const student = ['John Dever', 'John Londo', 'John Mayer', 100, true]

console.log(student)
console.log(student[3])

student[3]= 'Mamang'
console.log(student[3])

//menambahkan di akhir array
student.push('Otong')
console.log(student)

//menambahkan di awal array
student.unshift('Surotong')
console.log(student)

//menghapus array paling akhir
student.pop()
console.log(student)

//menghapus array paling awal
student.shift()
console.log(student)