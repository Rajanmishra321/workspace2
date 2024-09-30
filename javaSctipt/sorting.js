// using sort function
const arr=[-2,-500,5,300] // this sort function firstly convert the numbers in the string and then sort them in ascending order
console.log(arr.sort()) // this will print [ -2, -500, 300, 5 ] which is not correct 
console.log(arr.sort((a,b)=>a-b))  // now it will work fine [ -500, -2, 5, 300 ]

const arr2=['mango','apple','banana']
console.log(arr2.sort()) // for string it will work perfectly fine

const str1 = 'Rajan'
console.log(str1.split('').sort().join(''))