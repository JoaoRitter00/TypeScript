"use strict";
let myInfo = {
    nome: "Gabriel",
    idade: 22,
    salario: 500,
    sexo: "m",
    estadoCivil: "s"
};
function ValidarInfo(info) {
    function validarNome(nome) {
        return nome.length > 3;
    }
    function validarIdade(idade) {
        return idade >= 0 && idade <= 150;
    }
    function validarSalario(salario) {
        return salario > 0;
    }
    function validarSexo(sexo) {
        return sexo === 'f' || sexo === 'm';
    }
    function validarEstadoCivil(estadoCivil) {
        return ['s', 'c', 'v', 'd'].includes(estadoCivil);
    }
    const { nome, idade, salario, sexo, estadoCivil } = info;
    return (validarNome(nome),
        validarIdade(idade),
        validarSalario(salario),
        validarSexo(sexo),
        validarEstadoCivil(estadoCivil));
}
const { nome, idade, salario, sexo, estadoCivil } = myInfo;
if (ValidarInfo(myInfo)) {
    console.log(`O nome: ${myInfo.nome}, idade: ${myInfo.idade} anos, salário: R$${myInfo.salario},00 reais, sexo: ${myInfo.sexo} e estado civil: ${myInfo.estadoCivil}, todas as informações são válidas.Obrigado!`);
}
else {
    console.log('Alguma informação é inválida. Por favor, verifique os dados.');
}
