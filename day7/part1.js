const fs = require('fs');

let input
try {
  const data = fs.readFileSync('input', 'utf8');
  input = data.split("\n")
} catch (err) {
  console.error(err);
}

let summary = 0
function read(root) {
  console.log(root.name)
  if (root.descendants.length == 0) {
    return Number(root.size)
  } else {
    let sum = 0
    for (let i = 0; i <= root.descendants.length - 1; i++) {
      sum += read(root.descendants[i])
    }
    console.log(sum)
    if (sum <= 100000) summary += sum;
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
    // break
  }
}
read(root)
console.log(JSON.stringify(root))
console.log("The answer: " + summary)
//console.log(read(root))
