const fs = require('fs');

let input

try {
  const data = fs.readFileSync('input', 'utf8');
  input = data.split("Monkey")
  input.splice(0,1)
  //console.log(input);
} catch (err) {
  console.error(err);
}
let monkeys = []
for(let i=0; i<=input.length-1; i++){
    let phrase = input[i].split('\n');
    let starting_items = phrase[1].split(':')[1].replaceAll(' ', '').split(',')
    let operation = phrase[2].split('=')[1].replace(' ', '')
    let test = Number(phrase[3].split('by')[1].replaceAll(' ', ''))
    let t = Number(phrase[4].split('monkey')[1].replaceAll(' ', ''))
    let f = Number(phrase[5].split('monkey')[1].replaceAll(' ', ''))
    let obj = {
        items : starting_items,
        op : operation,
        test : test,
        t : t,
        f : f,
        times : 0
    }
    monkeys.push(obj)
}
//console.log(monkeys)

for(let i=1; i<=20; i++){
  for(let j=0; j<=monkeys.length-1; j++){
    let len = monkeys[j].items.length
    let k = 0
    while(k <= len-1){
      let item = Number(monkeys[j].items.shift())
      let op = monkeys[j].op.split(' ')[1]
      let operand = monkeys[j].op.split(' ')[2]
      switch(op){
        case '+':
          if(operand != 'old'){
            item += Number(operand)
          }else{
            item = item + item
          }
          break;
        case '*':
          if(operand != 'old'){
            item *= Number(operand)
          }else{
            item = item * item
          }
          break;
      }
      item = item / 3
      item = Math.floor(item)
      if(item % monkeys[j].test == 0){
        monkeys[monkeys[j].t].items.push(item)
      }else{
        monkeys[monkeys[j].f].items.push(item)
      }
      len = monkeys[j].items.length
      k=0
      monkeys[j].times++
    }
  }
}
for(let i=0; i<=monkeys.length-1; i++){
  console.log("monkey " + i + ": " + monkeys[i].items + " times: " + monkeys[i].times)  
}

monkeys.sort((a,b) =>{ return b.times - a.times})
console.log("THE ANSWER IS: " + (Number(monkeys[0].times) * Number(monkeys[1].times)))

