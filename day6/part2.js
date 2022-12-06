const fs = require('fs')

let file = fs.readFileSync('input', 'utf8');

function isUnique(str){
    for(let i = 0; i < str.length; i++)
        for(let j = i + 1; j < str.length; j++)
            if (str[i] == str[j])
                return false;

    return true;
}

for(let i=0; i<=file.length-1; i++){
    let subst = file.substring(i, i+14)
    if(isUnique(subst)){
        console.log("THE RESULT: " + (i+14));
        break;
    }
}