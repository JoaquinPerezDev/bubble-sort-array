// Write a function that takes in an array of integers and 
//returns a sorted version of that array. 
// Use bubble sort algorithm to sort the array.

// Sample input: array = [8, 5, 2, 9, 5, 6, 3]
// Sample output: [2, 3, 5, 5, 6, 8, 9]

//Bubble Sort is the simplest sorting algorithm that works by 
//looping through the input array and  swapping the adjacent 
//elements if they are in the wrong order. 
//This algorithm is not suitable for large data sets as its 
//average and worst-case time complexity is quite high.

//Worst: O(n^2) time | O(1) space complexity

function bubbleSort(array) {
  let isSorted = false;
  let counter = 0;

  while (!isSorted) {
    isSorted = true; 
    for(let i = 0; i < array.length - 1 - counter; i++) {
      if(array[i] > array[i + 1]) {
        swap(i, i + 1, array);
        isSorted = false;
      }
    }
    counter++;
  }
  return array;
}

function swap(i, j, array) {
  const temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}