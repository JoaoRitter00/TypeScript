enum cor {
    b = "branco",
    p = "preto",
    a = "azul"
}
const camisa = {
    name:"Camisa gola V",
    size: cor.p
}
console.log(camisa)

//literal types
let teste1 : "autenticado" | null;
teste1 = "autenticado"
teste1 = null

var vamosVer:string = "Ola";
//funcao
function soma(a:number, b:number):string | number{
    return `Olá Manu essa é a soma:${+a+b}`;
}
console.log(soma(12,12));

function sayHello(name:string):string{
    return `Hello ${name}`
}

function greeting(name:string, greet?:string){
    if(greet){
        console.log(`Olá ${name}${greet}`)
    }
    else{
        console.log(`Olá ${name}`)
    }
    return
}
greeting("Pedro", "Sir")


//interface
interface MathFunctionParams{ //focado em parametros para funções
    n1: number,
    n2: number
}



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