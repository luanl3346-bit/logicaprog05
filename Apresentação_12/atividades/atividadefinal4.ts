// Atividade 4 
// Usar pelo menos 2 tipos de laço
// Exibindo matriz 3x3 com for e somando até o usuário sair

// usando FOR para percorrer a matriz
let matrizAtividade4: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let somaTotal: number = 0;

for (let linha: number = 0; linha < matrizAtividade4.length; linha++) {
    for (let coluna: number = 0; coluna < matrizAtividade4[linha].length; coluna++) {
        console.log(`matriz[${linha}][${coluna}] = ${matrizAtividade4[linha][coluna]}`);
        somaTotal += matrizAtividade4[linha][coluna];
    }
}

console.log(`Soma dos elementos da matriz = ${somaTotal}`)

// unstrar outro tipo sando DO-WHILE para demode laço
let repeticao: number = 1;
let somaParcial: number = 0;

// Demonstra soma repetindo até parar (ordem executa ao menos 1 vez)
do {
    let numeroParaSomar: number = repeticao * 2; // exemplo determinístico
    console.log(`Somando: ${numeroParaSomar}`);
    somaParcial += numeroParaSomar;

    repeticao++;
} while (repeticao <= 3);

console.log(`Soma parcial (do-while) = ${somaParcial}`)

