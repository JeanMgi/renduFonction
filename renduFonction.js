"use strict";
let nom1 = "Jean";
let nom2 = "Paul";
let result = checkname(nom1, nom2);

function checkname(a, b){
    if(a==b){
        return true;
    }else{
        return false;
    }
}

console.log(result);