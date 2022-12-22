const fs = require('fs')

let f = fs.readFileSync('input', 'utf8');
let map = f.split('\n')
let prog = map.slice(map.length-1, map.length)[0]
map.pop()
map.pop()
console.log(map);
console.log(prog);

//get the longest row
let max = 0
for(let i=0; i<=map.length-1; i++){
    if(max < map[i].length){
        max = map[i].length
    }
}
console.log(max);
//fix with x's
let map1 = []
for(let i=0; i<=map.length-1; i++){
    let st = ''
    for(let j=0; j<=map[i].length-1; j++){
        if(map[i][j] == ' '){
            st += 'o'
        }else{
            st += map[i][j]
        }
    }
    if(map[i].length < max){
        let u = max - map[i].length
        for(let j=1; j<=u; j++){
            st+='o'
        }
    }
    map1.push(st)
}
console.log(map1);

// assign R to the begining of the prof
prog = 'R' + prog
console.log(prog);

let prog1 = []
for(let i=0; i<=prog.length-1; i++){
  if((prog[i] == 'R') || (prog[i] == 'L')){
    prog1.push(prog[i])
  }else{
    let st = ''
    while(((prog[i] != 'R') && (prog[i] != 'L')) && (i<=prog.length-1)){
      st += prog[i]
      i++
    }
    i--
    prog1.push(Number(st))
  }
}

console.log(prog1);

let cursor = [0, 0, 'U']
let dir = ['U','R', 'D', 'L', 'U', 'R', 'D', 'L']
for(let i=0; i<=prog1.length-1; i++){
    //console.log("going to " + prog1[i] );
    if(prog1[i] == 'R'){
        cursor[2] = dir[dir.indexOf(cursor[2], dir.indexOf(cursor[2])+1)+1]
    }else{
        //its L
        cursor[2] = dir[dir.indexOf(cursor[2], dir.indexOf(cursor[2])+1)-1]
    }
    console.log(cursor[2]);
    let j = 0
    switch(cursor[2]){
        case 'R':
            console.log("going in R");
            j = 1
            while((j <= prog1[i+1]) && (map1[cursor[0]][cursor[1]] != '#')){
                if(map1[cursor[0]][cursor[1]] == '.'){
                    j++
                }
                cursor[1]++
                if(cursor[1] > map1[cursor[0]].length-1) cursor[1] = 0
            }
            if(map1[cursor[0]][cursor[1]] == '#') cursor[1]--
            break;
        case 'L':
            console.log("going in L");
            j = 1
            while((j <= prog1[i+1]) && (map1[cursor[0]][cursor[1]] != '#')){
                if(map1[cursor[0]][cursor[1]] == '.'){
                    j++
                }
                cursor[1]--
                if(cursor[1] < 0) cursor[1] = map[cursor[0]].length-1
            }
            if(map1[cursor[0]][cursor[1]] == '#') cursor[1]++
            break;
        case 'D':
            console.log("going in D");
            j = 1
            while((j <= prog1[i+1]) && (map1[cursor[0]][cursor[1]] != '#')){
                if(map1[cursor[0]][cursor[1]] == '.'){
                    j++
                }
                cursor[0]++
                if(cursor[0] > map1[cursor[1]].length-1) cursor[0] = 0
            }
            if(map1[cursor[0]][cursor[1]] == '#') cursor[0]--
            break;
        case 'U':
            console.log("going in U");
            j = 1
            while((j <= prog1[i+1]) && (map1[cursor[0]][cursor[1]] != '#')){
                if(map1[cursor[0]][cursor[1]] == '.'){
                    j++
                }
                cursor[0]--
                if(cursor[0] < 0) cursor[0] = map[cursor[1]].length-1
            }
            if(map1[cursor[0]][cursor[1]] == '#') cursor[0]++
            break;
    }    
    console.log(cursor);
    i++
}
//console.log(cursor);