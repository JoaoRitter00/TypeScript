"use strict";
//string, bolean, number...
let teste = 10;
//teste = "Ola";
console.log(teste);
//Inferencia x annotation
let y = 12;
;
let x = "12";
let o = true;
let z = 10;
//Tipos basicos
let nome1 = "Gabriel";
let idade1 = 22;
let isAdmin = true;
//object
const myNumber = [1, 2, 3];
console.log(myNumber.length);
//console.log(myNumber.toUpperCase());
myNumber.push(5);
myNumber.pop();
myNumber.push(4);
//tupla
let myTuple = [2, "Oi", ["a", "b"]];
console.log(myTuple);
//myTuple = [true, false, 0]
//object literals
let myObj = {
    name: "Pedro",
    age: 59,
    empregado: true
};
console.log(myObj);
console.log(myObj.name);
let a = 0;
a = "teste";
a = true;
a = [];
console.log(a);
//union type
let id = "10";
id = 200;
const userId = 10;
const productId = true;
const nameId = "Ola";
const objId = [];
//enum
//tamanho de roupas (size: Médio, size: Grande)
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.G,
};
console.log(camisa);
//literal types
let teste1;
teste1 = "autenticado";
teste1 = null;
//var vamosVer:string = "Ola";
//funcao
function soma(a, b) {
    return "Ola Manu essa é a soma:" + a + b;
}
console.log(soma(12, 12));
//console.log(soma("12", true);
function sayHello(name) {
    return `Hello ${name}`;
}
console.log(sayHello("Gabriel"));
//Colocar :void na funcao logger sem return
function logger(msg) {
    console.log(msg);
}
logger("Teste");
let vazio; // "" '' [] {}
let nulo; // 
//? Faz com que o parâmetro seja opcional
function greeting(name, greet) {
    //console.log(`Olá ${name} ${greet}`)
    if (greet) {
        console.log(`Olá ${name} ${greet}`);
        return;
    }
    else {
        console.log(`Olá ${name}`);
    }
}
greeting("Pedro", "Sir");
function somaNum(nums) {
    return nums.n1 + nums.n2;
}
somaNum({ n1: 1, n2: 2 });
function multiplicaNum(nums) {
    return nums.n1 * nums.n2;
}
const algunsNum = {
    n1: 5,
    n2: 10,
};
console.log(multiplicaNum(algunsNum));
//narrowing
//checagem tipos
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número.");
}
doSomething(5);
doSomething(true);
//generics
function showArrayItem(arr) {
    arr.forEach((item) => {
        console.log(`Item: ${item}`);
    });
}
const a1 = [1, 2, 3, 4];
const a2 = ["1,2,3,4"];
showArrayItem(a1);
showArrayItem(a2);
//classes
class Usuario {
    nome;
    senha;
    temPermissao;
    constructor(nome, senha, temPermissao) {
        this.nome = nome;
        this.senha = senha;
        this.temPermissao = temPermissao;
    }
    showUserName() {
        console.log(`O nome do usuário é: ${this.nome}`);
    }
}
const zeca = new Usuario("Zéca", 123, true);
zeca.showUserName();
class Car {
    brand;
    wheels;
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do veículo é: ${this.brand}`);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();
// 19 - heranca
class SuperCar extends Car {
    engine;
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
a4.showBrand();
// 20 - decorators
// setar experimentalDecorators
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            id = Math.random();
            created = new Date();
        };
    };
}
BaseParameters();
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
}
const sam = new Person("Sam");
console.log(sam);
const usuarioGabe = new Usuario("Gabriel", 12345, true);
window.onload = function () {
    var heading = document.createElement("h1");
    var heading_text = document.createTextNode("Big Head!");
    heading.appendChild(heading_text);
    document.body.appendChild(heading);
    var paragrafo = document.createElement("p");
    var paragrafo_text = document.createTextNode("Vamos ver");
    paragrafo.appendChild(paragrafo_text);
    document.body.appendChild(paragrafo);
};
