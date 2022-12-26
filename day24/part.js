const fs = require('fs')

function showMap(map){
    for(let i=0; i<=map.length-1; i++){
        let st =''
        for(let j=0; j<=map[i].length-1; j++){
            if(Array.isArray(map[i][j])){
                st += map[i][j].length
            }else{
                st += map[i][j]
            }
        }
        console.log(st);

    }
}

function showFullMap(up, down, right, left){
    for(let i=0; i<=up.length-1; i++){
        let st =''
        for(let j=0; j<=up[i].length-1; j++){
            if(up[i][j] != '#'){
                let dirs = 0
                if(right[i][j] == '>') dirs++ 
                if(up[i][j] == '^') dirs++
                if(down[i][j] == 'v') dirs++
                if(left[i][j] == '<') dirs++
                if(dirs >= 2){
                    st += dirs
                }
                if(dirs == 1){
                    if(right[i][j] == '>') st += '>'
                    if(up[i][j] == '^') st += '^'
                    if(down[i][j] == 'v') st += 'v'
                    if(left[i][j] == '<') st += '<'
                }
                if(dirs == 0){
                    st += '.'
                }
            }else{
                st += '#'
            }
        }
        console.log(st);
    }
}

function build_arr(map1){
    let map_aux = []
    for(let i=0; i<=map1.length-1; i++){
        let m = []
        for(let j=0; j<=map1[i].length-1; j++){
            if(map1[i][j] == '#'){
            m.push('#')
            }else{
            m.push('.');
            }
        }
        map_aux.push(m)
    }
    return map_aux;
}

let f = fs.readFileSync('input', 'utf8');
let map = f.split('\n')

console.log(map);
//change to all objects
let map1 = []
for(let i=0; i<=map.length-1; i++){
    let m = []
    for(let j=0; j<=map[i].length-1; j++){
        m.push(map[i][j]);
    }
    map1.push(m)
}
//showMap(map1)

let up1 = []
let down1 = []
let left1 = []
let right1 = []

let min = 1;
up1 = map1
down1 = map1
left1 = map1
right1= map1
console.log("initial state");
showMap(map1)
while(min <= 18){
    //1. build empty array
    let up = build_arr(up1)
    let down = build_arr(down1)
    let left = build_arr(left1)
    let right = build_arr(right1)

    //2. start stepping the storms
    for(let i=0; i<=up1.length-1; i++){
        for(let j=0; j<=up1[i].length-1; j++){
            if(up1[i][j] == '^'){
                if(up1[i-1][j] == '#'){ //reached the edge
                    up[up.length-2][j] = '^'
                }else{
                    up[i-1][j] = '^'
                }
            }
        }
    }

    for(let i=0; i<=left1.length-1; i++){
        for(let j=0; j<=left1[i].length-1; j++){
            if(left1[i][j] == '<'){
                if(left1[i][j-1] == '#'){ //reached the edge
                    left[i][left.length] = '<'
                }else{
                    left[i][j-1] = '<'
                }
            }
        }
    }
    for(let i=0; i<=right1.length-1; i++){
        for(let j=0; j<=right1[i].length-1; j++){
            if(right1[i][j] == '>'){
                if(right1[i][j+1] == '#'){ //reached the edge
                    right[i][1] = '>'
                }else{
                    right[i][j+1] = '>'
                }
            }
        }
    }
    for(let i=0; i<=down1.length-1; i++){
        for(let j=0; j<=down1[i].length-1; j++){
            if(down1[i][j] == 'v'){
                if(down[i+1][j] == '#'){ //reached the edge
                    down[1][j] = 'v'
                }else{
                    down[i+1][j] = 'v'
                }
            }
        }
    }

    up1 = up
    down1 = down
    left1 = left
    right1= right
    console.log("in minute " + min);
    showFullMap(up1, down1, right1, left1)
    //showMap(right1)
    min++
}
console.log("END.");