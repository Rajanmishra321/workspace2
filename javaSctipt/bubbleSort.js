// bubble sort in this sorting techinique they compare two adjacent element if they are not in order then it get swapped at every iteration most highest element will be on last position


// Time complexity : in worst-case = O(n^2), in best-case = O(n)
// Space complexity: O(1)
function bubbleSort(arr) {
    let swapped
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // one swapping method
                // let temp=arr[i]
                // arr[i]=arr[i+1]
                // arr[i+1]=temp

                // another is array destructuring
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                swapped = true
            }
        }
    } while (swapped);
    return arr
}
let arr = [-400, 200, 500, 4]
console.log(bubbleSort(arr))