/* 
    https://visualgo.net/en/sorting
    Selection sort works by iterating through the list, finding the minimum
    value, and moving it to the beginning of the list. Then, ignoring the first
    position, which is now sorted, iterate through the list again to find the
    next minimum value and move it to index 1. This continues until all values
    are sorted.
    Unstable sort.
    Time Complexity
        - Best: O(n^2) quadratic.
        - Average: O(n^2) quadratic.
        - Worst: O(n^2) quadratic.
    
    Space: O(1) constant.
    Selection sort is one of the slower sorts.
        - ideal for: pagination, where page 1 displays 10 records for example,
        you run selection sort for 10 iterations only to display the first 10
        sorted items...
*/
const myArr = [3, 2, 9, 5, 1, 4, 8];
const arrTest = [4, 5, 1, 3, 6, 7, 10, 2, 8, 9];

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            // console.log(arr[j]);

            // console.log("starting" + minVal);
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        // after inner for loop
        // j has completely went through all values
        // swap with current index at i
        temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;

    }
    return arr;
}

function selectionSort1(arr) {
    for (let i = 0; i < arr.length; i++) { // we need to loop through the array
        let minIdx = i; // we want to find the smallest element, but we're more concerned with its 
        // INDEX than its value. So we'll keep tack of a minIdx, and set it to i at the beginning
        // of each iteration

        for (let j = i + 1; j < arr.length; j++) { // we'll loop through the remaining values
            if (arr[j] < arr[minIdx]) { // if we find a number that's less than our current minimum
                minIdx = j; // set that number's index as minIdx
            }
        }

        if (arr[minIdx] !== arr[i]) { // if, after checking everything, we found a new minimum
            const temp = arr[i]; // swap the new minimum
            arr[i] = arr[minIdx]; // with the value at i
            arr[minIdx] = temp;
        }
        // and then bring it back to the top and run it again!
    }

    return arr; // by now, everything is sorted!
}

function selectionSort2(nums) {
    let sorted = 0; //keeps track of how many items have been selected and moved to front
    let mindex = 0; //keeps track of index of minimum value for portion of array we are searching/sorting
    while (sorted < nums.length - 1) { //while the whole list isn't yet sorted, stop at 1 less because last element implicitly sorted
        for (let i = sorted + 1; i < nums.length; i++) {  //iterate through the array, starting at the first unsorted index
            mindex = nums[i] < nums[mindex] ? i : mindex; //if the value at the current index is lower than our current minimum index, update mindex
        }
        if (nums[sorted] != nums[mindex]) { //if the values are the same, no need to swap
            [nums[sorted], nums[mindex]] = [nums[mindex], nums[sorted]]; //perform swap of min value to front of array (next unsorted position)
        }
        sorted++; // we've sorted one, increase sorted count
        mindex = sorted; //initialze minimum index to the first value in the rest of the array to be sorted

    }
    return nums;

}

console.log(selectionSort(myArr));
console.log(selectionSort(arrTest));

// ------------------
function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        swap(array, i, minIndex);
    }

    return array;
}

function swap(array, indexA, indexB) {
    const temp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = temp;
}


// --------------------
function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {           // looping through the array
        let minIdx = i;                               // setting the minimum index as position of i
        for (let j = i + 1; j < arr.length; j++) {   // looping through the array
            if (arr[j] < arr[minIdx]) {             // checking if the element in j is less than the element located at minIdx
                minIdx = j;                           // if true, setting the minimum index as position of j
            }
        }
        if (arr[i] > arr[minIdx]) { // min !== i                 // checking if the element in i is larger than the element at the current minIdx
            const temp = arr[i];                      // if true, swap their values
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        }
    }
    return arr;                                       // return the swapped array
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minVal = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minVal]) {
                minVal = j;
            }
        }
        if (minVal !== i) {
            [arr[i], arr[minVal]] = [arr[minVal], arr[i]];
        }
    }
    return arr;
}

function selectionSort(arr) {
    let smallest;
    for (let i = 0; i < arr.length - 1; i++) {
        smallest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallest]) {
                smallest = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[smallest];
        arr[smallest] = temp;
    }
    return arr;
}
// test cases
console.log(selectionSort(myArr));
console.log(selectionSort(arrTest));