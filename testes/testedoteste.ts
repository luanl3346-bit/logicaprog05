// Matriz 3x3 para exibir no formato correto no terminal

const matrizTeste: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let linha = 0; linha < matrizTeste.length; linha++) {
  const linhaFormatada = matrizTeste[linha]
    .map((valor) => String(valor).padStart(3, ' '))
    .join(', ');

  console.log(`[${linhaFormatada}]`);
}

//////////////////////////////////////////////

let lista: number = [20, 9, 14, 5];
lista.push(4);

console.log(lista);


lista.sort((a, b) => a + b);

console.log(lista);

