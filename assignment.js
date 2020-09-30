const {BinarySearchTree, binarySearch, indexOf} = require('./search')

// 1) 3, 5, 6, 8, 11, 12, 14, 15, 17, 18  FIND 8 and 16 using RECURSIVE BINARY SEARCH

// console.log('ANSWER is position 3', binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 8))  
// console.log('ANSWER is -1', binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 16))

// recurSearch = () => {
//     let output = binarySearch[i]
//     if (output === -1) return 'Number not found'
//     else return `${output}`
//     binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 8))
// }

// Drill #2
input = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
sortedInput = input.sort((a,b) => a-b);

// console.log('Linear search: ', indexOf(input, 69)); // Took 48 tries
// console.log('Binary search: ', binarySearch(sortedInput, 69)); // Took 7 tries

//  Drill #3
// Binary search

//  Drill #4 
// Part 1)
14, 15 19 25, 27 35 79,89 90 91 // IN ORDER
35 25 15 14 19 27 89 79 91 90  // PRE ORDER
14, 19, 15, 27, 25, 79, 90, 91, 89, 35  // POST ORDER

		                35
	            25 	         89
         15     27     79     91
	    14  19                90 

// Part 2)
5 7 6 9 11 10 8 // POST ORDER
8 6 5 7 10 9 11 // PRE ORDER
 	        8
      6      10
     5  7    9  11

// Drill #5
