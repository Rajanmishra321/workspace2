// Linear search
/*const arr=[1,2,3,4,5]
function constLinearSearch(arr,ele){
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==ele){
            return true
        }
    }
    return -1
}
console.log(constLinearSearch(arr,9))*/

// Binary search
/*const BinarySearch=(arr,target)=>{
    let start =0
    let end = arr.length-1
    while(start<=end){
        let mid=Math.floor((start + end)/2)
        
        if(arr[mid]==target){
            return mid
        }

        else if(arr[mid]<target){
            start = mid+1
        }

        else{
            end=mid-1
        }
    }
    return -1
}

console.log(BinarySearch([1,2,3,4,5,6,7,8,9],9))*/


// floor(value which is just smaller than target value) and ceil(value which is just greater than target value) value
let arr = [1, 5, 8, 11, 12]
function ceilValue(value){
    for (let i = 0; i < arr.sort((a, b) => b - a).reverse().length; i++) {
        if (arr[i] > value) {
            let ceilResult = arr[i]
            console.log('ceil value is', ceilResult)
            break;
        }
    }
}
function floorValue(value){
    for (let i = 0; i<arr.sort((a, b) => b - a).length; i++) {
        if (arr[i] < value) {
            let floorResult = arr[i]
            console.log('floor value is', floorResult)
            break;
        }
    }
}
floorValue(7)
ceilValue(7)
// console.log(arr.sort((a, b) => b - a))
// console.log(arr.sort((a, b) => b - a).reverse())
