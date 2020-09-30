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
// 14, 15 19 25, 27 35 79,89 90 91 // IN ORDER
// 35 25 15 14 19 27 89 79 91 90  // PRE ORDER // NLR
// 14, 19, 15, 27, 25, 79, 90, 91, 89, 35  // POST ORDER // LRN

// 		                35
// 	            25 	         89
//          15     27     79     91
// 	    14  19                90 

// Part 2)
// 5 7 6 9 11 10 8 // POST ORDER // LRN
// 8 6 5 7 10 9 11 // PRE ORDER // NLR
//  	        8
//       6      10
//      5  7    9  11


// Drill #5
// inOrder LNR, preOrder NLR, postOrder LRN
// let arr = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22]
/*  

                     25
              15              50
          10      24      35      70
        4  12   18      31  44   66  90
                   22 
*/


const treeTrav = new BinarySearchTree()
  treeTrav.insert(25)
  treeTrav.insert(15)
  treeTrav.insert(50)
  treeTrav.insert(10)
  treeTrav.insert(24)
  treeTrav.insert(35)
  treeTrav.insert(70)
  treeTrav.insert(4)
  treeTrav.insert(12)
  treeTrav.insert(18)
  treeTrav.insert(31)
  treeTrav.insert(44)
  treeTrav.insert(66)
  treeTrav.insert(90)
  treeTrav.insert(22)
//   console.log(treeTrav)

  // 4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25
  postOrder = (node) => {
      if (node === null) return
      postOrder(node.left)
      postOrder(node.right)
      console.log(node.key)
  }
//   console.log('POST-ORDER', postOrder(treeTrav))

  // 25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90
  preOrder = (node) => {
    if (node === null) return
    console.log(node.key)
    preOrder(node.left)
    preOrder(node.right)
}
// console.log('PRE-ORDER', preOrder(treeTrav))

// 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90
inOrder = (node) => {
    if (node === null) return
    inOrder(node.left)
    console.log(node.key)
    inOrder(node.right)
}
// console.log('IN-ORDER', inOrder(treeTrav))

// postOfBst = (arr) => {
//     if (!arr.length) {
//         return null
//     }
//     const root = arr[arr.length - 1]
//     const rest = arr.slice(0 ,arr.length - 1)
//     const left = rest.filter(item => item < root)
//     const right = rest.filter(item => item >= root)

//     const node = new BinarySearchTree(root)
//     node.left = postOfBst(left)
//     node.right = postOfBst(right)
//     return node
// }

// console.log('POST', postOfBst(arr))

// Drill #6
// const officers = ['Captain Picard', 'Commander Riker', 'Commander Data', 'Lt. Cmdr Worf', 'Lt. Cmdr LaForge', 'Lt. Cmdr Crusher', 'Lieutenant security-officer', 'Lieutenant Selar']

const officerTree = new BinarySearchTree()
  officerTree.insert('Captain Picard');
  officerTree.insert('Commander Riker');
  officerTree.insert('Commander Data');
  officerTree.insert('Lt. Cmdr Worf');
  officerTree.insert('Lt. Cmdr LaForge');
  officerTree.insert('Lt. Cmdr Crusher');
  officerTree.insert('Lieutenant security-officer');
  officerTree.insert('Lieutenant Selar');


bfsOrder = (node) => {
  if (node === null) return
  console.log(node.key)
  bfsOrder(node.left)
  bfsOrder(node.right)
  console.log(node.key);
}
console.log('BFS: ', bfsOrder(officerTree));
// console.log(officerTree.bfs(officerTree));
// console.log(officerTree)