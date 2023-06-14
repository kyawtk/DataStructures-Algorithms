class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;

    this.tail = null;
  }
  append(value) {
    let newnode = new Node(value);
    if (this.head == null) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      this.tail.nextNode = newnode;
      this.tail = newnode;
    }
  }
  prepend(value) {
    let newnode = new Node(value);
    if (this.head == null) {
      this.head = newnode;
      this.tail = newnode;
    } else {
      newnode.nextNode = this.head;
      this.head = newnode;
    }
  }
  size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      count++;
      currentNode = currentNode.nextNode;
    }
    return count;
  }
  listhead() {
    return this.head;
  }
  listtail() {
    return this.tail;
  }
  at(index) {
    if (index < 0 || index >= this.size()) {
      return null;
    }
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentIndex < index) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    return currentNode;
  }
  pop() {
    if (this.head == null) {
      return null;
    }
    let currentNode = this.head;
    let prevNode = null;
    while (currentNode.nextNode !== null) {
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    prevNode.nextNode = null;
    this.tail = prevNode;
    return currentNode;
  }
  contains(value) {
    let currentNode = this.head;

    while (currentNode != null) {
      if (currentNode.value == value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }
  find(value) {
    let currentIndex = 0;
    let currentNode = this.head;

    while (currentNode.nextNode != null) {
      if (currentNode.value == value) {
        return currentIndex;
      }
      currentIndex++;
      currentNode = currentNode.nextNode;
    }
    return null;
  }
  toString() {
    let str = "";

    let currentNode = this.head;
    while (currentNode != null) {
      str += `=> ${String(currentNode.value)} =>`;
      currentNode = currentNode.nextNode;
    }
    str += "null";
    return str;
  }
  removeat(index) {
    if (index < 0 || index >= this.size()) {
      return null;
    }
    let currentNode = this.head;
    let prevNode = null;
    let currentIndex = 0;
    if (index == 0) {
      this.head = currentNode.nextnode;
      if (this.size() == 1) {
        this.tail = null;
      }
      return currentNode;
    }
    while (currentIndex < index) {
      prevNode = currentNode;
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    prevNode.nextNode = currentNode.nextNode;

    if (currentIndex === this.size() - 1) {
      this.tail = prevNode;
    }
    return currentNode;
  }
  insertAt(index, value) {
    if (index < 0 || index >= this.size() - 1) {
      return null;
    }
    if (index == 0) {
      this.prepend(value);
    }else if(index == this.size()-1){
      this.append(value)
    }
     else {
      let newNode = new Node(value);
      let currentNode = this.head;
      let currentIndex = 0;
      let prevNode = null;
      while (currentIndex < index ){
          prevNode = currentNode;
          currentNode = currentNode.nextNode;
          currentIndex++;

      }
      prevNode.nextNode = newNode;
      newNode.nextNode = currentNode;

    }
  }
}

let list = new LinkedList();
list.append("this is the head");
list.append("the second element");
list.append("third");
list.append("fourth");
list.append("tail");
console.log(list.toString());
list.removeat(4);
console.log(list.toString());
console.log(list.contains("third"));
console.log(list.size())
list.insertAt(list.size()-2 , 'the inserted value')
console.log(list.toString())