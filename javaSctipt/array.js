// we can acces every element of an array by using forEach() function
/*const arr = [1,2,3,4]
arr.forEach((x,i)=>{
    console.log(arr[i])
})*/

// there is another method for traversin is using for loop
/*for(let x of arr){
    console.log(x)
}*/


// trying to find the element exists in the given array or not
/*const FindElement=(arr, target)=>{
    for(x of arr){
        if(x===target)
        {
            return true;
        }
    }
    return false
}

console.log(FindElement(arr,3))*/

// for the same thing there is some inbuilt function we can directly use named include() function
// console.log(arr.includes(3))

// splice is a function use to update array insert and delete
// arr.splice(index,index till u want to delete, elements u want to insert)
// splice change in original array
// arr.splice(1,3,9,8,7,6,5)
// console.log(arr)

// there is another function name slice which return the subArray of an array it do't change in original array it make a another copy of original array
// console.log(arr.slice(1,5))

// shallow copy of array :- in this copy both varialbe will be pointing the same array canging one will effect other one
/*const arrb = arr
arrb.splice(1,3)
console.log(arrb,arr)*/

// deep copy:- In this copy changing one dose not effect other one
/*const arrc = [...arr] // one way of deep copy
const arrD=Array.from(arr)// another way for deep copy
arrc.splice(1,2)
console.log(arrc,arr)*/


// merge of two array
/*const arr1 =[1,2,3,4,5]
const arr2= ['rajan','ji','maharaj']
const meregedArray=[...arr1,...arr2] //one way of merging the array
const meregedArray2=arr1.concat(arr2) // another way of merging by using  concat method
console.log(meregedArray2)
console.log(meregedArray)*/


// program to check two array is equal or not
/*const arr1 = [1,2,3,4]
const arr2=[1,2,3,4]
const isArrayEqual = (arr1,arr2)=>{
    // if(arr1.length!==arr2.length)
    // {
    //     return false
    // }
    // for(let i=0;i<arr1.length;i++){
    //     if(arr1[i]!==arr2[i])
    //     {
    //         return false;
    //     }
    // }
    // return true

    return arr1.length===arr2.length && arr1.every((ele,i)=> arr1[i]===arr2[i]) // another way to solve the same problem

}
console.log(isArrayEqual(arr1,arr2))*/

const array1 = [1,2,3,4,-6,-5,-9]
console.log(array1.sort())  //time complexity is O(nlogn)

console.log(array1.sort((a,b)=>b-a)) // it will sort in descending order

const mapArray = array1.map((ele,i)=> ele*ele)
console.log(mapArray)

const filterArray= array1.filter((ele,i)=>ele>0)
console.log(filterArray)

const raduceArray = array1.reduce((acc,ele)=>acc+ele)
console.log(raduceArray)

const flatarray = [1,2,[5,6],7,[3,4]] // flat removes all subarrays in between an array
console.log(flatarray.flat())