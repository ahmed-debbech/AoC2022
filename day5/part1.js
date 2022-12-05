const fs = require('fs')

//read file and devide to instrunctions and piles
let file;
let f = fs.readFileSync('input', 'utf8');
file = f.split('\n')
//console.log(file);
piles = file.splice(0, 9);
//console.log(piles)
inst = file.splice(1, file.length)
//console.log(piles)

//get the number of piles
let number_of_piles = piles[piles.length-1].split(' ')[piles[piles.length-1].split(' ').length-2]
//console.log(number_of_piles);

//prepare empty array to hold the piles
let arr_pile = []
//init the array
for(let i =0 ;i<=number_of_piles-1; i++){
    arr_pile.push([]);
}
//console.log(arr_pile);

//start parsing the crates
for(let i=piles.length-2; i >= 0; i--){
    console.log(piles[i]);
    let k = 0, m=3
    for(let j=0; j<=piles[i].length-1; j++){
        if((piles[i][j] >= 'A') && (piles[i][j] <= 'Z')){
            arr_pile[k].push(piles[i][j])
        }else{
            if(m == j){
                m += 4
                k++;
            }
        }
    }
}
//console.log(arr_pile);

//FINNALLY PARSED!!!

for(let i=0; i<=inst.length-1; i++){
    let thenum = inst[i].match(/\d+/g);
    let da = thenum.splice("")
    //from here instructions are now parsed!
    //ready to solve now
    for(l = 0; l<=da[0]-1; l++){
        let crate = arr_pile[da[1]-1].pop();
        arr_pile[da[2]-1].push(crate)
    }
}
console.log(arr_pile);

//read the HEAD
let res = ""
for(let i=0; i<=arr_pile.length-1; i++){
    res += arr_pile[i][arr_pile[i].length-1];
}
console.log("THE RESULT IS: " + res);
