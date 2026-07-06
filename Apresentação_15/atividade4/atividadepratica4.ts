function calcularDesconto( preco: number, percentual: number): number {
    let desconto = (preco * percentual);
    let final = preco - desconto;
    return final;
}

let precoFinal = calcularDesconto(1500,0.20);
console.log(precoFinal);


