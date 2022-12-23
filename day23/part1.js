const fs = require('fs')
function show_map(en_map){   
    for(let i=0; i<=en_map.length-1; i++){
        let d = ''
        for(let j=0; j<= en_map[i].length-1; j++){
            if(en_map[i][j] == '.'){
                d += '.'
            }else{
                d+='#'
            }
        }
        console.log(d);
    }
}
function roll_dir(dir_queue){
    let h = dir_queue[0]
    dir_queue.splice(0,1)
    dir_queue.push(h)
}
function enlarge_map(en_map){
    let st = []
    for(let i=0; i<=en_map[0].length-1; i++){
        st.push('.')
    }
    en_map.splice(0,0,st)
    en_map.splice(en_map.length, 0, st)
    for(let i=0; i<=en_map.length-1; i++){
        en_map[i].splice(0, 0, '.')
        en_map[i].splice(en_map[i].length, 0, '.')
    }
    for(let i=0; i<=en_map.length-1; i++){
        for(let j=0; j<=en_map[i].length-1; j++){
            if(en_map[i][j] != '.'){
                en_map[i][j].init = [i,j]
            }
        }
    }
    return en_map
    //todo update coords in each elf
}

let f = fs.readFileSync('input', 'utf8');
let map = f.split('\n')
//for(let i=0; i<=map.length-1; i++){console.log(map[i])}

let en_map = []
for(let i=0; i<=map.length-1; i++){
    let k = []
    for(let j=0; j<=map[i].length-1; j++){
        if(map[i][j] == '#'){
            let obj = {
                init : [i, j],
                propsition : [-1, -1],
                willMove : true
            }
            k.push(obj)
        }else{
            k.push('.')
        }
    }
    en_map.push(k)
}
show_map(en_map)
let dir_queue = ['N', 'S', 'W', 'E']

for(let round = 1; round <= 1; round++){

    console.log('/////');
    //add more space in map !!
    en_map = enlarge_map(en_map)

    //chech if each elf will move or not
    for(let i =0; i<=en_map.length-1; i++){
        for(let j=0; j<=en_map[i].length-1; j++){
            if(en_map[i][j] != '.'){
                if(en_map[i-1][j] == '.' &&
                   en_map[i-1][j-1] == '.' &&
                   en_map[i-1][j+1] == '.' &&
                   en_map[i][j+1] == '.' &&
                   en_map[i+1][j+1] == '.' &&
                   en_map[i+1][j] == '.' &&
                   en_map[i+1][j-1] == '.' && 
                   en_map[i][j-1] == '.'
                ){
                    en_map[i][j].willMove = false
                }else{
                    switch(dir_queue){
                        case 'N':
                            if(en_map[i-1][j-1] == '.' &&
                                en_map[i-1][j] == '.' &&
                                en_map[i-1][j+1] == '.'
                             ){
                                en_map[i][j].propsition = [i-1,j]
                                en_map[en_map[i][j].propsition[0]][en_map[i][j].propsition[0]] = en_map[i][j]
                                en_map[i][j] = '.'
                             }else{

                             }
                            break;
                        case 'S':
                            break;
                        case 'E':
                            break;
                        case 'W':
                            break;
                    }
                }
            }
        }
    }

    show_map(en_map)
    //roll the directions
    roll_dir(dir_queue)

}