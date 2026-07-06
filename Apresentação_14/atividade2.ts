let produto: {nome: string; preço: number} [] = [ 
    { nome: "Notebook", preço: 3000}, 
    { nome: "Mouse", preço: 200},
    { nome: "Teclado", preço: 300} 
];

for(let prod of produto) {
    console.log(`Produto: ${prod.nome} | Preço: ${prod.preço}`);
}

produto[0].preço = 2799;

console.log(`\nProduto alterado: ${produto[0].nome}, | Novo Preço: ${produto[0].preço}\n`);
