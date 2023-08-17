//string, bolean, number...
let teste: number = 10;
//teste = "Ola";
console.log(teste);

//Inferencia x annotation

let y = 12;;
let x = "12";
let o = true;

let z:number = 10;

//Tipos basicos
let nome1:string = "Gabriel";
let idade1:number = 22;
let isAdmin: boolean = true;

//object
const myNumber:number[] = [1,2,3];
console.log(myNumber.length);
//console.log(myNumber.toUpperCase());
myNumber.push(5);
myNumber.pop();
myNumber.push(4);

//tupla
let myTuple:[number, string, string[]] = [2,"Oi", ["a","b"]];
console.log(myTuple);
//myTuple = [true, false, 0]

//object literals
let myObj:{name:string, age:number, empregado:boolean} = {
    name: "Pedro",
    age: 59,
    empregado: true
}
console.log(myObj);

console.log(myObj.name);

let a:any = 0;

a = "teste";
a = true;
a = [];

console.log(a);

//union type
let id: string | number = "10";
id = 200;

//id = true;
//id [];

//type aliens
type myIdType = string | number | boolean | object[];

const userId: myIdType = 10;
const productId: myIdType = true;
const nameId: myIdType = "Ola";
const objId: myIdType = [];
//enum
//tamanho de roupas (size: Médio, size: Grande)
enum Size{
    P = "Pequeno",
    M = "Médio",
    G = "Grande",
}

const camisa = {

    name: "Camisa gola V",
    size: Size.G,
};

console.log(camisa);

//literal types

let teste1: "autenticado" | null;
teste1 = "autenticado";
teste1 = null;

//var vamosVer:string = "Ola";

//funcao
function soma(a:number, b:number): number | string{
    return "Ola Manu essa é a soma:"+a+b;
}

console.log(soma(12,12));
//console.log(soma("12", true);

function sayHello(name:string):string{
    return `Hello ${name}`;
}

console.log(sayHello("Gabriel"));

//Colocar :void na funcao logger sem return
function logger(msg: string):void{
console.log(msg);
}
logger("Teste");

let vazio: void // "" '' [] {}
let nulo: null // 

//? Faz com que o parâmetro seja opcional
function greeting(name:string, greet?:string){
    //console.log(`Olá ${name} ${greet}`)
    if(greet){
        console.log(`Olá ${name} ${greet}`);
        return;
    }
    else{
        console.log(`Olá ${name}`);
    }
}
greeting("Pedro", "Sir");

//interface
interface MathFunctionParams{
    n1: number;
    n2: number;
}

function somaNum(nums: MathFunctionParams){
    return nums.n1 + nums.n2;
}

somaNum({n1:1,n2:2});

function multiplicaNum(nums:MathFunctionParams){
    return nums.n1 * nums.n2;
}

const algunsNum:MathFunctionParams = {
    n1: 5,
    n2: 10,
}

console.log(multiplicaNum(algunsNum));

//narrowing
//checagem tipos

function doSomething(info: number | boolean){
    
    if(typeof info === "number"){
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número.");
}

doSomething(5);
doSomething(true);

//generics
function showArrayItem<T>(arr: T[]){
    arr.forEach((item)=>{
        console.log(`Item: ${item}`);
    });
}

const a1 = [1,2,3,4];
const a2 = ["1,2,3,4"];

showArrayItem(a1);
showArrayItem(a2);

//classes

class Usuario{
    nome;
    senha;
    temPermissao;

    constructor(nome: string, senha:number, temPermissao:boolean){
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

// 18 - interface em classes
interface IVehicle {
  brand: string;
  showBrand(): void;
}

class Car implements IVehicle {
  brand;
  wheels;

  constructor(brand: string, wheels: number) {
    this.brand = brand;
    this.wheels = wheels;
  }

  showBrand(): void {
    console.log(`A marca do veículo é: ${this.brand}`);
  }
}

const fusca = new Car("VW", 4);

fusca.showBrand();

// 19 - heranca
class SuperCar extends Car {
  engine;

  constructor(brand: string, wheels: number, engine: number) {
    super(brand, wheels);
    this.engine = engine;
  }
}

const a4 = new SuperCar("Audi", 4, 2.0);

a4.showBrand();

// 20 - decorators
// setar experimentalDecorators
function BaseParameters() {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      id = Math.random();
      created = new Date();
    };
  };
}

BaseParameters()
class Person {
  name;

  constructor(name: string) {
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