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

let map_aux;
let min = 1;

while(min <= 10){
    //1. build empty array
    let map_aux = build_arr(map1)
    //2. start stepping the storms
    
    for(let i=0; i<=map1.length-1; i++){
        for(let j=0; j<=map1[i].length-1; j++){
            let current = map1[i][j]
            if(current != '.' && current != '#'){
                switch(current){
                    case '>':
                        if(map1[i][j+1] == '#'){ //reached the edge
                            if(map_aux[i][1] != '.'){
                                //create an array to hold all the storms in one position
                                if(Array.isArray(map_aux[i][1])){
                                    map_aux[i][1].push(map1[i][j])
                                }else{
                                    let o = []
                                    o.push(map_aux[i][1])
                                    o.push(map1[i][j])
                                    map_aux[i][1] = o
                                }
                            }else{
                                map_aux[i][1] = '>'
                            }
                        }else{
                            if(map_aux[i][j+1] != '.'){
                                //create an array to hold all the storms in one position
                                if(Array.isArray(map_aux[i][j+1])){
                                    map_aux[i][j+1].push(map1[i][j])
                                }else{
                                    let o = []
                                    o.push(map_aux[i][j+1])
                                    o.push(map1[i][j])
                                    map_aux[i][j+1] = o
                                }
                            }else{
                                map_aux[i][j+1] = '>'
                            }
                        }
                        break;
                    case '<':
                        if(map1[i][j-1] == '#'){ //reached the edge
                            map_aux[i][map_aux[i].length-2] = '<'
                        }else{
                            map_aux[i][j-1] = '<'
                        }
                        break;
                    case 'v':
                        if(map1[i+1][j] == '#'){ //reached the edge
                            map_aux[1][j] = 'v'
                        }else{
                            map_aux[i+1][j] = 'v'
                        }
                        break;
                    case '^':
                        if(map1[i-1][j] == '#'){ //reached the edge
                            map_aux[map1.length-2][j] = '^'
                        }else{
                            map_aux[i-1][j] = '^'
                        }
                        break;
                }
            }
        }
    }

    map1 = map_aux
    console.log("in minute " + min);
    showMap(map1)
    min++
}
console.log("END.");