let named='rajan'

console.log(named.length) //this is use to get the length of the string

console.log(named.charAt(1)) // this is use to know the character on specific index
console.log(named[2]) // also can acces using this technique

console.log(named.charCodeAt(2)) //this returns the scy value of that letter on specified index

console.log(named.includes('i')) // this is use to check wehter some string is present in the main string or not

console.log(named.indexOf('i')) // if the string is present it will return the index value of that present if it is not present it will return -1

console.log(named.lastIndexOf('a')) //it will start searching for the string's index from last

let anotherName='rajan rajan     rajan'

console.log(named.localeCompare(anotherName)) //it will compare two strings if !equal returns -1 ef equal returns 0

console.log(anotherName.replace('rajan','rajanji')) //it will replace the string with the provided string

console.log(anotherName.replace('rajan','rajanji')) // here we use /string/g and g stand for global which will replace every rajan with rajanji

console.log(anotherName.split(' '))

console.log(anotherName.trim( ))


