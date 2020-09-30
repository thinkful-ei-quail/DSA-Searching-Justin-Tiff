const {BinarySearchTree, binarySearch, indexOf} = require('./search')

// 1) 3, 5, 6, 8, 11, 12, 14, 15, 17, 18  FIND 8 and 16 using RECURSIVE BINARY SEARCH

console.log('ANSWER is position 3', binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 8))  
console.log('ANSWER is -1', binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 16))

// recurSearch = () => {
//     let output = binarySearch[i]
//     if (output === -1) return 'Number not found'
//     else return `${output}`
//     binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 8))
// }