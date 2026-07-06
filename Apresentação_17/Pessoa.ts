export class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(): void {
        console.log(`Meu nome é ${this.nome}`)
    }
}

let p1 = new Pessoa(`Luan`, 15);

p1.apresentar();