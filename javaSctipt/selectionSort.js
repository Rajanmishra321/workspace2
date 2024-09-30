// in this sort it select one index as a min value and compare it with others and when it finds smaller value than selected one it just swap them

// Time complexity : O(n^2) always
// Space complexity: O(1)
const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        if(minIndex  !==i){
            [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
        }
    }
    return arr
}
const arr = [400, -300, 5, -7, -40]
console.log(selectionSort(arr))