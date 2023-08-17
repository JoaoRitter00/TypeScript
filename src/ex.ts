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
    salario: 1780,
    sexo: "m",
    estadoCivil: "s"

}
function ValidarInfo(info: Info): string | null {
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
    if (!validarNome(info.nome)) {
        return "Nome inválido";
    }

    if (!validarIdade(info.idade)) {
        return "Idade inválida";
    }

    if (!validarSalario(info.salario)) {
        return "Salário inválido";
    }

    if (!validarSexo(info.sexo)) {
        return "Sexo inválido";
    }

    if (!validarEstadoCivil(info.estadoCivil)) {
        return "Estado civil inválido";
    }

    return null;
}

const erro = ValidarInfo(myInfo)

if (erro){
    console.log(`Erro: ${erro}. Por favor, verifique os dados`)
}
else{
    console.log(`O nome: ${myInfo.nome}, idade: ${myInfo.idade} anos, salário: R$${myInfo.salario},00 reais, sexo: ${myInfo.sexo} e estado civil: ${myInfo.estadoCivil}, todas as informações são válidas.Obrigado!`)
}