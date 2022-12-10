const fs = require('fs')

let file;
let f = fs.readFileSync('input', 'utf8');
file = f.split('\n')
for(let i=0; i<=file.length-1; i++){
    file[i] = file[i].split(" ")
}

let cycle = 1
let X = 1
let sum = 0;
for(let i=0; i<=file.length-1; i++){
    if(file[i][0].substring(0, file[i][0].length) == 'noop'){
        cycle++
    }else{
        //its an ADD
        cycle ++
        switch(cycle){
            case 20: sum += (20 * X); break;
            case 60: sum += (60 * X); break;
            case 100: sum += (100 * X); break;
            case 140: sum += (140 * X); break;
            case 180: sum += (180 * X); break;
            case 220: sum += (220 * X); break;
        }
        cycle++
        X += Number(file[i][1])
    }
    switch(cycle){
        case 20: sum += (20 * X); break;
        case 60: sum += (60 * X); break;
        case 100: sum += (100 * X); break;
        case 140: sum += (140 * X); break;
        case 180: sum += (180 * X); break;
        case 220: sum += (220 * X); break;
    }
}
console.log(sum);