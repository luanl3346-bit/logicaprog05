class ContaBancaria {
    titular: string; 
    saldo: number;
    historico: string[];

    constructor(titular: string, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
        this.historico = [];
        if(saldo > 0) {
            this.historico.push(`Depósito feito com sucesso no valor de R$${this.saldo}!`);
        }
        console.log(`1° Déposito realizado com sucesso!! Valor: R$${this.saldo}`)
    }

    depositar(valor: number): void {
        this.saldo += valor;
        this.historico.push(`Depósito de R$${valor}`);
        console.log(`Deposito feito com sucesso com de: R$${valor}`);
        this.exibirSaldo();
    }
    sacar(valor: number): void {
        if(valor < this.saldo) {
            this.saldo -= valor;
            console.log(`Saque efetuado com sucesso no valor de ${valor}!`);
            this.historico.push(`Saque efetuado com sucesso no valor de: R$${valor}`)
            this.exibirSaldo();
            return;
        }
        console.log(`Saldo insuficiente!`);
        
    } 
    
    exibirSaldo(): void{
        console.log(`Saldo de: R$${this.saldo}!`);
    }

    exibirHistorico(): void {
        console.log(`\n---Extrato---`)
        console.log(`TITULAR: ${this.titular}`)
        if( this.historico.length === 0) {
            console.log(`Não há lançamentos.`)
            return;
        }
        
        this.historico.forEach((operacao, indice) => {
            console.log(`${indice+1} - ${operacao}`);
        });
        console.log(`---Extrato---\n`)
    }
}

let c1 = new ContaBancaria(`Luan Henrique`, 1000);
c1.depositar(500);

c1.sacar(200);

c1.exibirHistorico();

let c2 = new ContaBancaria(`Matteo Henrique`, 2000);

c2.depositar(3000);

c2.sacar(1000);

c2.exibirHistorico();
