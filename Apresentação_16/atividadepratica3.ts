class Pedido {
    numero: number;
    itens: {nome: string; preco: number; quantidade: number} [];
    status: string;

    constructor(numero: number, itens:{nome: string; preco: number; quantidade: number}[], status: string) {
        this.numero = numero;
        this.itens = itens;
        this.status = status;
    }

    calcularTotal(): number {
        let total = 0;
        this.itens.forEach((item) => {
            total += item.preco * item.quantidade;
        });
        return total;
    }

    atualizarStatus(novoStatus: string): void {
        if(novoStatus === "PENDENTE" || novoStatus === "PAGO" || novoStatus === "ENVIADO" || novoStatus === "CANCELADO") {
            this.status = novoStatus;
            console.log(`Status do pedido ${this.numero} atualizado para: ${this.status}`);
            return;
        }
        console.log("Status inválido!");
    }
}

let p1 = new Pedido(1, [
    {nome: `Mouse`, preco: 100, quantidade: 2},
    {nome: `Teclado`, preco: 200, quantidade: 1}
] , `PENDENTE`);

console.log(`\nO valor total do pedido é de R$${p1.calcularTotal()}`);

p1.atualizarStatus(`PAGO`);


let p2 = new Pedido(2, [
    {nome: `Monitor`, preco: 300, quantidade: 1},
    {nome: `Placa de Vídeo`, preco: 800, quantidade: 1}
] , `PAGO`);

console.log(`\nO valor total do pedido é de R$${p2.calcularTotal()}`);






