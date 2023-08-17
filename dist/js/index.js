"use strict";
var cor;
(function (cor) {
    cor["b"] = "branco";
    cor["p"] = "preto";
    cor["a"] = "azul";
})(cor || (cor = {}));
const camisa = {
    name: "Camisa gola V",
    size: cor.p
};
console.log(camisa);
//literal types
let teste1;
teste1 = "autenticado";
teste1 = null;
var vamosVer = "Ola";
//funcao
function soma(a, b) {
    return `Olá Manu essa é a soma:${+a + b}`;
}
console.log(soma(12, 12));
function sayHello(name) {
    return `Hello ${name}`;
}
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${name}${greet}`);
    }
    else {
        console.log(`Olá ${name}`);
    }
    return;
}
greeting("Pedro", "Sir");
/*//string, boolean, number...
let teste: number = 10;
let texto: string = "uai";
let bool: Boolean = true;
//teste p "Olá";
console.log(teste, texto, bool);

const myNumber:number[] = [1,2,3]
console.log(myNumber.length)

const myString:string[] = ["cala","a boca", "Puta"]
console.log(myString.length)

let myTuple:[string, number[], Boolean[]] = ["aiaiaia",[1,2], [true,false]]
console.log(myTuple)

//object literals
let myObj:{name:string, age:number[], employer:[boolean, string]} = {
    name: "Joau",
    age: [59,17],
    employer: [true, "pedreiro"]
}
console.log(myObj)
*/ 
