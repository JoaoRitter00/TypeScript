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
