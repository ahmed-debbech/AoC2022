const fs = require('fs')

let file;
let f = fs.readFileSync('input', 'utf8');
file = f.split('\n')
for(let i=0; i<=file.length-1; i++){
    file[i] = file[i].split(" ")
}
console.log(file);

let H = {x : 0 , y : 0};
let T = {x : 0 , y : 0 };

let visitedNodes = []
let g = false;

for(let i=0; i<=file.length-1; i++){
    console.log("===== " + file[i][0] + " -- " + file[i][1] + "=====");
    for(let j=0; j<=file[i][1]-1; j++){
        if(T.x == H.x && T.y == H.y ){
            switch(file[i][0]){
                case "U" : 
                    H.x--
                    break;
                case "R" :
                    H.y++
                    break;
                case "L" :
                    H.y--
                    break;
                case "D" :
                    H.x++
                    break;
            }
            visitedNodes.push(T)
        }else{
            if(((T.x+1 == H.x) || (T.x-1 == H.x)) && ((T.y+1 == H.y) || (T.y-1 == H.y))){
                //increment T to be close to H
                T.x = H.x
                T.y = H.y
                visitedNodes.push(T)
            }else{
                switch(file[i][0]){
                    case "U" : 
                        H.x--
                        break;
                    case "R" :
                        H.y++
                        break;
                    case "L" :
                        H.y--
                        break;
                    case "D" :
                        H.x++
                        break;
                }
                switch(file[i][0]){
                    case "U" : 
                        T.x--
                        break;
                    case "R" :
                        T.y++
                        break;
                    case "L" :
                        T.y--
                        break;
                    case "D" :
                        T.x++
                        break;
                }
                visitedNodes.push(T) 
            }
        }
        console.log("HEAD: ");
        console.log(H);
        console.log("TAIL: ");
        console.log(T);
        console.log('-------------');
    }
}
console.log(visitedNodes);