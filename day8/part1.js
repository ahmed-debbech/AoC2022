const fs = require('fs')

let file;
let f = fs.readFileSync('input', 'utf8');
file = f.split('\n')
for(let i=0; i<=file.length-1; i++){
    file[i] = file[i].split("")
}
console.log(file);

//parsed and ready !!

let visibleTrees = 0
let visibleTreesLine = 0;
for(let j=0; j<=file[0].length-1; j++){
    visibleTreesLine++;       
}
visibleTreesLine *= 2
visibleTrees += visibleTreesLine
let visibleTreesRow = 0
for(let i=1; i<=file.length-2; i++){
    visibleTreesRow++
}
visibleTreesRow *= 2
visibleTrees += visibleTreesRow

for(let i =1; i<=file.length-2; i++){
    for(let j=1; j<=file[i].length-2; j++){
        console.log("this: " + file[i][j]);
        let isVisible = true
        let howManyVisible = 0
        for(let k=i-1; (k>=0) && (isVisible); k--){
            if(file[k][j] >= file[i][j]){
                isVisible = false
            }
        }
        if(isVisible) { console.log("visble from up"); howManyVisible++}
        isVisible = true
        for(let k=i+1; (k<=file.length-1) && (isVisible); k++){
            if(file[k][j] >= file[i][j]){
                isVisible = false
            }
        }
        if(isVisible) { console.log("visible from down"); howManyVisible++}
        isVisible = true
        for(let k=j-1; (k>=0) && (isVisible); k--){
            if(file[i][k] >= file[i][j]){
                isVisible = false
            }
        }
        if(isVisible) { console.log("visible from left"); howManyVisible++}
        isVisible = true
        for(let k=j+1; (k<=file[i].length-1) && (isVisible); k++){
            if(file[i][k] >= file[i][j]){
                isVisible = false
            }
        }
        if(isVisible) { console.log("visible from right"); howManyVisible++}
        if(howManyVisible >= 1){
            visibleTrees++
        }
    }
}
console.log(visibleTrees);