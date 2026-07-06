let numeros: number[] = [15, 2, 31, 84, 49];

console.log(numeros);

// Ordenando em ordem crescente:
 let crescente = [...numeros].sort((a,b) => a-b);
 console.log(crescente);

// Ordem Decrescente:
 let decrescente = [...numeros].sort((a,b) => b-a);
 console.log(decrescente);


