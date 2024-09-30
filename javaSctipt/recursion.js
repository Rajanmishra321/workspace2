// when a function call it's self is called recursive function and calling it self again and again is called recursion.


// example of a function
/*function fun(n){  
    if(n==0){
        return
    }
    console.log('fun',n)
    fun(n-1)
}
fun(10)*/

// factorial of a number;
/*function factorial(n){
    if(n===0)
    {
        return 1
    }
    return n*factorial(n-1)
}
console.log(factorial(10))*/


// sum of an array
/*function sumOfArray(arr) {
    if (arr.length === 0) {
        return 0
    }
    return arr[arr.length - 1] + sumOfArray(arr.slice(0, arr.length - 1))
}
console.log(sumOfArray([1, 2, 3, 4, 5]))*/

//fibonaci using recursion
function fibonaci(n){
    let key 
    if(n<2)
    {
        return n
    }
    // while(n>2){
    //     key=fibonaci(n-1)+fibonaci(n-2)
    // }
    return fibonaci(n-1)+fibonaci(n-2)
}

console.log(fibonaci(10))