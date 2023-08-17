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