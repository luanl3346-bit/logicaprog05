import { Pessoa } from './Pessoa';

class Aluno extends Pessoa {
    nota: number;

    constructor(nome: string, idade: number, nota: number){
        super(nome, idade);
        this.nota = nota;
    }

    estaAprovado(): boolean {
        return this.nota >=6;
    }
}

let alunos: Aluno[] = [
    new Aluno(`João`, 19, 4),
    new Aluno(`Rodolfo`, 25, 5),
    new Aluno(`Pedro`, 23, 5)
];

function adicionarAluno(nome: string, nota: number, idade: number): void {
    alunos.push(new Aluno(nome, nota, idade));
}


adicionarAluno(`Henry`, 20, 8);
adicionarAluno(`Luiza`, 26, 7);
adicionarAluno(`Marcos`, 18, 10);

console.log(`\n---LISTA---`);

function listarAlunos(): void {
    alunos.forEach((alunos) => {
        console.log(`Nome: ${alunos.nome}\nIdade: ${alunos.idade}\nNota: ${alunos.nota}\n`);
    });
}

function exibirAprovados(): void {
    console.log(`---APROVADOS---`);
    alunos.forEach((alunos) => {
        if(alunos.nota >= 6) {
                console.log(`Aluno: ${alunos.nome} APROVADO com nota: ${alunos.nota}`)
                return;
        }
    });

}
listarAlunos();

exibirAprovados();