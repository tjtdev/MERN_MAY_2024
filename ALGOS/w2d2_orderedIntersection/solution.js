ro;/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const arrA1 = [0, 1, 2, 2, 2, 7];
const arrB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const arrA2 = [0, 1, 2, 2, 2, 7];
const arrB2 = [2, 2];
const expected2 = [2];

const arrA3 = [0, 1, 2, 2, 2, 7];
const arrB3 = [10];
const expected3 = [];

/**
 * Venn Diagram Visualization (bottom):
 * https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(n) linear, n = max(sortedA.length, sortedB.length) when there are
 *    dupes we may end up looping over all items of longer arr.
 * - Space: O(n) linear, n = shorter array length.
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} returns The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
function orderedIntersection(sortedA, sortedB) {
  let idxA = 0, idxB = 0;

  const intersection = [];

  while (idxA < sortedA.length && idxB < sortedB.length) {
    if (sortedA[idxA] === sortedB[idxB]) {
      if (intersection[intersection.length - 1] !== sortedA[idxA]) {
        // add it only if the last num added isn't the same num
        intersection.push(sortedA[idxA]);
      }
      idxA++;
      idxB++;
    } else if (sortedA[idxA] < sortedB[idxB]) {
      idxA++;
    } else {
      idxB++;
    }
  }
  return intersection;
}

function orderedIntersection2(sortedA, sortedB) {
  let intersect = []; // arr to return
  let indexA = 0; // initialize indices for each arr to intersect
  let indexB = 0;

  while (indexA < sortedA.length && indexB < sortedB.length) { //while indices are in range
    let valA = sortedA[indexA]; //values to examine from arrs
    let valB = sortedB[indexB];

    if (valA == valB) { //if values are the same, we've found an intersect
      if (intersect[intersect.length - 1] != valA) { //check for dupe
        intersect.push(valA); //push valA to intersect array if not a dupe
      }
      indexA++; //whether a dupe or not, intersect has been checked, move both indices
      indexB++;
    } else if (valA < valB) { //if valA is smaller
      indexA++; //increase indexA to try to match valB
    } else { // else valB is smaller, increase indexB to see if we can match valA
      indexB++;
    }
  }

  return intersect; //all done!

}

// =====================
function orderedIntersection(sortedA, sortedB) {
  var i = 0;
  var j = 0;
  var newArr = [];
  // while loop goes through Array 1 and array 2
  while (i < sortedA.length && j < sortedB.length) {
    if (sortedA[i] == sortedB[j]) {
      if (newArr[newArr.length - 1] != sortedB[j]) {
        newArr.push(sortedB[j]);
        // if the numbers in the array are equal, it will check if the last value is already in the array
        // then push into the new array
      }
      i++, j++;
      // this increment both arrays
    }
    // the if condition checks to see if value of i is less than the value of j
    // it will increment i and vice versa
    else if (sortedA[i] < sortedB[j]) {
      i++;
    }
    else {
      j++;
    }

  }
  return newArr;

}

console.log(orderedIntersection(arrA3, arrB3));

function orderedIntersection(sortedA, sortedB) {
  var i = 0;
  var j = 0;
  var sortedArr = [];
  while (i < sortedA.length && j < sortedB.length) {
    //making sure that the index' is within the array
    if (sortedA[i] === sortedB[j]) {
      // seeing if the value @ the index' is the same
      if (sortedArr[sortedArr.length - 1] !== sortedA[i]) {
        // duplicate check for this if
        sortedArr.push(sortedA[i]);
        //if its a duplicate we push(either i or j)into new array
      }
      i++;
      j++;
      //after it's checked we increment and not run infinite loop
    } else if (sortedA[i] < sortedB[j]) {
      //if the values are not the same then we check if i is less than j
      i++;
      //if less we increment i
    } else {
      j++;
      //if not we increment j
    }
  }
  return sortedArr;

  // the 2 arrays are sorted!
  //  create indexA and indexB for each array
  //  start them at 0
  // ...
}


function orderedIntersection(sortedA, sortedB) {
  //initialize empty array variable 
  const mergeArr = [];
  //   initialize index pointers i and j at 0 and k at -1

  // write a forloop using i to loop through the first array
  for (let i = 0; i < sortedA.length; i++) {
    // console.log(sortedA[i])
    // if statement comparing k value in the merged array to i value in current array
    if (sortedA[i] === mergeArr[mergeArr.length - 1]) {
      //   //  if true continue
      continue;
    }
    // write a nested forloop using j to loop through the second array
    for (let j = 0; j < sortedB.length; j++) {
      //  write a if statement to compare if index value of j is equal to index value of i
      if (sortedA[i] === sortedB[j]) {
        // if true push index value of i
        //   console.log(sortedA[i])
        mergeArr.push(sortedA[i]);
        // break nested loop and return to original loop
        break;
      }
    }
  }
  // Return empty array vairable
  return mergeArr;
  // 

}


function orderedIntersection(sortedA, sortedB) {
  // Create an empty array, Results
  let results = [];

  // Create 2 Pointers, 1 for each array, beginning with 0-IDX
  let indexA = 0;
  let indexB = 0;

  // While PointerA is less than the length of sorted sortedA && PointerB is less than the length of sorted sortedB
  while (indexA < sortedA.length && indexB < sortedB.length) {

    // If sortedA[PointerA] value is equal to sortedB[PointerB] value 
    if (sortedA[indexA] == sortedB[indexB] && results[results.length - 1] != sortedA[indexA]) {

      // If the last value of results is less than sortedA[PointerA]
      // if (results[results.length -1] != sortedA[indexA])

      // Push sortedA[PointerA] to Results
      results.push(sortedA[indexA]);

      // Increment both Pointers
      indexA++;
      indexB++;
    }

    // If sortedA[PointerA] is less than sortedB[PointerB]
    else if (sortedA[indexA] < sortedB[indexB]) {
      // Increment PointerA
      indexA++;
    }

    // If sortedA[PointerA] is greater than sortedB[PointerB]
    else {
      // Increment PointerB
      indexB++;
    }
  }

  // Return the Results
  return results;
}

function orderedIntersection(sortedA, sortedB) {

  // declare a empty array to return the expected array
  let expectedArr = [];

  // create a loop to inerate thru the first array
  for (i = 0; i < sortedA.length; i++) {
    // create a nested loop that takes the value from the first array and compares it to the values in the second array
    for (j = 0; j < sortedB.length; j++) {
      // let hold = sortedA[i]
      // create a nested loop that takes the value from the first array and compares it to the values in the second array
      //if the values match up, check to see if the return array already has that value
      if ((sortedA[i] == sortedB[j]) && (sortedB[j] !== expectedArr[expectedArr.length - 1])) {
        expectedArr.push(sortedA[i]);
      }
    }
  }

  //return the expected array
  return expectedArr;
}
