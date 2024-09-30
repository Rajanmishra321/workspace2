//objects is the instance of a class

const person = {
    name: 'Rajan',
    age: 18,
    skills: ["python,javascript,c++"],
    development: {
        frontend: 'react.js',
        backend: 'express.js'
    },
    code: function () {
        return 'start code'
    },
    isStudent: true
}
//using dot operator method
console.log(person.age)
console.log(person.code())
console.log(person.name)

//using [] method
console.log(person['skills'])


console.log(person.hasOwnProperty('name')) // this will check wether the key is present in the object or not by returning true or false
//how to add , update, delete key
person.name = 'shuraj' //here it overwrites the name key in the objects
console.log(person.name)
person.new_name = 'Rajan' // this will add a new key in the object
console.log(person.new_name)
delete person.code //to delete the key from the object we use delete operator
console.log(person.hasOwnProperty('code()'))

//shallow copy
const person2 = person;
console.log(person2)
person2.isStudent = false //doing some changes in person2
console.log(person) // it changes our original person

//deep copy
const person3 = Object.assign({}, person) // we perform deep copy by using Object.assign() method
person3.last_name = 'Mishra' // adding a new key in the person3 object 
console.log(person3.hasOwnProperty('last_name'))
console.log(person.hasOwnProperty('last_name')) // the new key will not be added in original person

//methods in object
Object.freeze(person) // it will not allow to change the keys of the object
person.new_last_name = 'singh'
console.log(person.hasOwnProperty("new_last_name")) // it will give false

console.log(Object.isFrozen(person)) // this method is use to check wether the object is frozen or not

Object.seal(person3) //in this method we can't add or delete the keys but we can update the existing keys
person3.age = 20
console.log(person3.age)

console.log(Object.isSealed(person3)) // it is use to check wether the object is sealed or not

console.log(Object.keys(person)) // it will give all the keys present in the object
console.log(Object.values(person)) //it will give all the values present in the object
console.log(Object.entries(person)) // it will create array of every key: value pair

//looping in object
for (let key in person3) {
    console.log(key + ':', person3[key])
}

//check wether the 2 objects are equal or not
console.log(Object.is(person, person3))

// find the occurence of each player 
const data = {
    id: 1,
    name: ["P1", "P4"],
    next: {
        id: 2,
        name: ["P3"],
        next: {
            id: 3,
            name: ["P3", "P4", "P5"],
            next: {
                id: 4,
                name: ["P1", "P2", "P4"],
                next: {
                    id: 5,
                    name: ["P2", "P3", "P5"],
                    next: null
                }
            }
        }
    }
};
const countingPlayer = (data) => {
    if (data === null) {
        return {}
    }

    let countPlayer = {};
    for (let player of data.name) {
        countPlayer[player] = (countPlayer[player] || 0) + 1
    }
    const nextPlayerCount=countingPlayer(data.next)
    for(let key in nextPlayerCount){
        countPlayer[key]=(countPlayer[key]|| 0)+nextPlayerCount[key]
    }
    return countPlayer

}
const countPlayer = countingPlayer(data)
console.log(countPlayer)