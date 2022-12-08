const fs = require('fs')

let file;
let f = fs.readFileSync('input', 'utf8');
file = f.split('\n')
for(let i=0; i<=file.length-1; i++){
    file[i] = file[i].split("")
}
console.log(file);

//parsed and ready !!

let list = []
for(let i =1; i<=file.length-2; i++){
    for(let j=1; j<=file[i].length-2; j++){
        console.log("this: " + file[i][j]);
        let sc = 1
        let scenic = 0
        for(let k=i-1; (k>=0); k--){
            scenic++
            if(file[k][j] >= file[i][j]){
                break
            }
        }
        console.log(scenic);
        sc *= scenic;
        scenic = 0
        for(let k=i+1; (k<=file.length-1); k++){
            scenic++
            if(file[k][j] >= file[i][j]){
                break
            }
        }
        console.log(scenic);
        sc *= scenic;
        scenic = 0
        for(let k=j-1; (k>=0); k--){
            scenic++
            if(file[i][k] >= file[i][j]){
                break
            }
        }
        console.log(scenic);
        sc *= scenic;
        scenic = 0
        for(let k=j+1; (k<=file[i].length-1); k++){
            scenic++
            if(file[i][k] >= file[i][j]){
               break;
            }
        }
        console.log(scenic);
        sc *= scenic
        list.push(sc)
        console.log( "all : " + sc);
    }
}
let max = list[0];
for(let i=1; i<=list.length-1; i++){
    if(max < list[i]){
        max = list[i]
    }
}
console.log("the result is " + max);
