const fs = require('fs')

let file;
let f = fs.readFileSync('input', 'utf8');
file = f.split('\n')
let arr = []
for(let i=0; i<=file.length-1; i++){
  let obj = {}
  let name = file[i].split(":")[0]
  let isop = false
  let x = file[i].split(":")[1][1]
  if(('0' <= x) && (x <= '9')){
    isop=false
    let num = file[i].split(':')[1].substring(1, file[i].split(':')[1].length)
    obj.name = name
    obj.isop = false
    obj.num = Number(num)
  }else{
    isop=true
    let opr = file[i].split(':')[1].split(" ")
    let op = {}
    op.n1 = opr[1]
    op.opr = opr[2]
    op.n2 = opr[3]
    obj.name = name
    obj.isop = true
    obj.operation = op
  }
  arr.push(obj) 
}
//console.log(arr);

function rec(caller, array){
    console.log("calling...");
    console.log(caller);
    let ind = -1
    for(let i=0; i<=array.length-1; i++){
        if(array[i].name == caller){
            ind = i
            break
        }
    }
    if(array[ind].isop == false){
        return array[ind].num
    }else{
        let x = 0
        switch(array[ind].operation.opr){
            case '+':
                x = (rec(array[ind].operation.n1, array) + rec(array[ind].operation.n2, array))
                break;
            case '-':
                x = (rec(array[ind].operation.n1, array) - rec(array[ind].operation.n2, array))
                break;
            case '/' : 
                x = (rec(array[ind].operation.n1, array) / rec(array[ind].operation.n2, array))
                break;
            case '*':
                x = (rec(array[ind].operation.n1, array) * rec(array[ind].operation.n2, array))
                break;
        }
        return x
    }
}
let result = rec('root', arr )
console.log(result);