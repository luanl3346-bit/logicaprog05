class Carro {
    marca: string;
    modelo: string;
    ano: number;

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirDetalhes(): void {
        console.log(`Carro da ${this.marca} | modelo ${this.modelo} | do ano de ${this.ano}.`);
    }
}

let carro1 = new Carro(`Hyundai`, `Creta`, 2021);
let carro2 = new Carro(`Bmw`, `x6`, 2025);
let carro3 = new Carro(`Renault`, `Logan`, 2014);

console.log(`Exibir dados do carro 1:`)
carro1.exibirDetalhes();

console.log(`\nExibir dados do carro 2:`)
carro2.exibirDetalhes();

console.log(`\nExibir dados do carro 3:`)
carro3.exibirDetalhes();

 