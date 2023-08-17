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
type Info = {
    nome: string,
    idade: number,
    salario: number,
    sexo: "m" | "f",
    estadoCivil: 's' | 'c' | 'v' | 'd'
}
let myInfo: Info = {
    nome: "Gabriel",
    idade: 22,
    salario: 500,
    sexo: "m",
    estadoCivil: "s"
}
function ValidarInfo(info: Info): boolean {
    function validarNome(nome: string): boolean {
        return nome.length > 3;
    }

    function validarIdade(idade: number): boolean {
        return idade >= 0 && idade <= 150;
    }

    function validarSalario(salario: number): boolean {
        return salario > 0;
    }

    function validarSexo(sexo: string): boolean {
        return sexo === 'f' || sexo === 'm';
    }

    function validarEstadoCivil(estadoCivil: string): boolean {
        return ['s', 'c', 'v', 'd'].includes(estadoCivil);

    }
    const { nome, idade, salario, sexo, estadoCivil } = info
    return (
        validarNome(nome),
        validarIdade(idade),
        validarSalario(salario),
        validarSexo(sexo),
        validarEstadoCivil(estadoCivil)
    )
}

const { nome, idade, salario, sexo, estadoCivil } = myInfo

if (ValidarInfo(myInfo)) {
    console.log(`O nome: ${myInfo.nome}, idade: ${myInfo.idade} anos, salário: R$${myInfo.salario},00 reais, sexo: ${myInfo.sexo} e estado civil: ${myInfo.estadoCivil}, todas as informações são válidas.Obrigado!`);
} else {
    console.log('Alguma informação é inválida. Por favor, verifique os dados.');
}