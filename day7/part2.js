const fs = require('fs');

let input
try {
  const data = fs.readFileSync('input', 'utf8');
  input = data.split("\n")
} catch (err) {
  console.error(err);
}

let summary = 0
function totalSize(root) {
  if (root.descendants.length == 0) {
    return Number(root.size)
  } else {
    let sum = 0
    for (let i = 0; i <= root.descendants.length - 1; i++) {
      sum += totalSize(root.descendants[i])
    }
    return sum;
  }
}

let folder_sizes = []
function sizeOfEveryDir(root) {
  if (root.descendants.length == 0) {
    return Number(root.size)
  } else {
    let sum = 0
    for (let i = 0; i <= root.descendants.length - 1; i++) {
      sum += sizeOfEveryDir(root.descendants[i])
    }
    folder_sizes.push({ n: root.name, s: sum })
    return sum;
  }
}

class TreeNode {
  constructor(name, value) {
    this.name = name
    this.size = value;
    this.descendants = [];
  }
}

let depth = []
let root = new TreeNode("/", 0);
let pointer = root
depth.push(pointer)
for (let i = 1; i <= input.length - 1; i++) {
  if (input[i].split(" ")[0][0] != "$") {
    if (input[i].split(" ")[0][0] == 'd') {
      pointer.descendants.push(new TreeNode(input[i].split(" ")[1], 0))
    } else {
      pointer.descendants.push(new TreeNode(input[i].split(" ")[1], input[i].split(" ")[0]))
    }
  } else {
    if (input[i].split(" ")[1] == "cd" && input[i].split(" ")[2] != "..") {
      for (let j = 0; j <= pointer.descendants.length - 1; j++) {
        if (pointer.descendants[j].name == input[i].split(" ")[2]) {
          pointer = pointer.descendants[j]
          depth.push(pointer)
        }
      }
    } else {
      if (input[i].split(" ")[1] == "cd" && input[i].split(" ")[2] == "..") {
        depth.pop()
        pointer = depth[depth.length - 1]
      }
    }
  }
}

let used = totalSize(root)
console.log("The answer: " + summary)
console.log("total size used:" + used)
let isfree = 70000000 - used
console.log("total size left " + isfree)
let needed = 30000000 - isfree
console.log("the needed size: " + needed)

sizeOfEveryDir(root)

folder_sizes.sort((a,b)=>{return a.s - b.s})

for(let i=0; i<=folder_sizes.length-1; i++){
    if(folder_sizes[i].s >= needed){
      console.log("THE ANSWER IS: "+ folder_sizes[i].s)
      break;
    }
}
