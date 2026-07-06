// Criando classe Aluno e atributos
class Aluno {
    nome: string;
    idade: number;
    nota: number;

    constructor(nome: string, idade: number, nota: number) {
        this.nome = nome, 
        this.idade = idade
        this.nota = nota
    }

    verificarAprovacao(): void {
        if(this.nota >= 6) {
            console.log(`\n${this.nome} foi APROVADO com nota: ${this.nota}.`)
            return;
        } console.log(`\n${this.nome} foi REPROVADO com nota de: ${this.nota}`)
    }

    exibirPerfil(): void {
        console.log(`----Perfil do Aluno----`)
        if(this.nota >= 6) {
            console.log(`Aluno: ${this.nome}\nIdade: ${this.idade} anos\nSTATUS: APROVADO\nNota: ${this.nota}`)
            return;
        } console.log(`Aluno: ${this.nome}\nIdade: ${this.idade} anos\nSTATUS: REPROVADO\nNota: ${this.nota}`)
        
        }

}
// Array de alunos usando a Classe
let alunos: Aluno[] = [
    new Aluno(`Matteo`, 19, 8),
    new Aluno(`Henrique`, 21, 5),
    new Aluno(`Luan`,20, 6)
];

// usando forEach
alunos.forEach((alunos) => {
    alunos.verificarAprovacao();
    alunos.exibirPerfil();
});



