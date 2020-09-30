// LINEAR SEARCH
function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return i;
        }
    }
    return -1;
};

// BINARY SEARCH
function binarySearch(array, value, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item == value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
};

class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);
    
    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }

    this.last = node;   
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }

    return node.value;
  }
}

// DFS & BFS
class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }
    dfs(values=[]) {
        if (this.left) {
            values = this.left.dfs(values);
        }
        values.push(this.value);

        if (this.right) {
            values = this.right.dfs(values);
        }
        return values;
    }
    bfs(tree, values = []) {
        const queue = new Queue(); // Assuming a Queue is implemented (refer to previous lesson on Queue)
        const node = tree.root;
        queue.enqueue(node);
        while (queue.length) {
            const node = queue.dequeue(); //remove from the queue
            values.push(node.value); // add that value from the queue to an array

            if (node.left) {
                queue.enqueue(node.left); //add left child to the queue
            }

            if (node.right) {
                queue.enqueue(node.right); // add right child to the queue
            }
        }

        return values;
    }
    insert(key, value) {
        //Check if tree is empty, if so then this is the root node
        if(this.key == null) {
          this.key = key
          this.value = value 
        }
    
        // If not an empty tree compare keys to determine of we need to move left or right
        else if (key < this.key) {
          //check current key's left pointer to see if it is empty
          if(this.left == null) {
            this.left = new BinarySearchTree(key, value, this)
          } else {
            //if there is an existing node recursively call insert
            this.left.insert(key, value)
          }
        } else {
          //If new key is greater than current key, move right
          if(this.right == null) {
            this.right = new BinarySearchTree(key, value, this)
          } else {
            this.right.insert(key, value)
          }
        }
      }
    
      find(key) {
        if(this.key == key) {
          return this
          // return this.value
        }
        //if key we're looking for is less than current key, look left
        //Then recursively call our find function looking on either side of the current node
        else if(key < this.key && this.left) {
          return this.left.find(key)
        }
        //If the key we're looking for is greater, move to the right
        else if(key > this.key && this.right) {
          return this.right.find(key)
        } else {
          throw new Error('Key Error')
        }
      }
    
      remove(key) {
        // Found key we're looking for
        if(this.key == key) {
          //Has two children?
          //Find smallest value from right tree and copy all its info to the node to be deleted
          if(this.left && this.right) {
            const successor = this.right._findMin()
            this.key = successor.key
            this.value = successor.value
            successor.remove(successor.key)
          } else if(this.left) {
            //Only has a left child
            this._replaceWith(this.left)
          } else if(this.right) {
            //Only has a right child
            this._replaceWith(this.right)
          } else {
            this._replaceWith(null)
          }
          //Looking for key to be removed
        } else if(key < this.key && this.left) {
          this.left.remove(key)
        } else if(key > this.key && this.right) {
          this.right.remove(key)
        } else {
          throw new Error('Key Error')
        }
      }
    
      _replaceWith(node) {
        if(this.parent) {
          if(this == this.parent.left) {
            this.parent.left = node
          } else if(this == this.parent.right) {
            this.parent.right = node
          }
          if(node) {
            node.parent = this.parent
          }
        } else {
          if(node) {
            this.key = node.key
            this.value = node.value
            this.left = node.left
            this.right = node.right
          } else {
            this.key = null
            this.value = null
            this.left = null
            this.right = null
          }
        }
      }
    
      _findMin() {
        if(!this.left) {
          return this
        }
        return this.left._findMin()
      }
    
}

module.exports = {BinarySearchTree, binarySearch, indexOf}
