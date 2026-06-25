// Tarefa 1:
const n: number = 9;

if(n > 0) {
    console.log(`Positivo!!\n`);
} else if (n < 0) {
    console.log(`Negativo!!\n`);
} else {
    console.log(`Zero!!\n`);
};

// Tarefa 2:

const nota: number = 6;

if(nota >= 6) {
    console.log(`APROVADO! com nota ${nota} !`);

} else if(nota >= 4) {
    console.log(`Recuperação!! com nota ${nota} !`);

} else {
    console.log(`REPROVADO!! com nota ${nota} !`);
};

// Tarefa 3:

const opcao: number = 2;

console.log(`\n1 - Cadastrar.`)
console.log(`2 - Consultar.`)
console.log(`3 - Excluir.`)
console.log(`4 - Sair.\n`)

switch(opcao) {
    case 1: 
        console.log(`Cadastrar!`);
        break;
    case 2:
        console.log(`Consultar!`);
        break;
    case 3:
        console.log(`Excluir!`);
        break;
    case 4:
        console.log(`Excluir!`);
        break;    
    default: 
        console.log(`Opção inválida!`);
        break;
};