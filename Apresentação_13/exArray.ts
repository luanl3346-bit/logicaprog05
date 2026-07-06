// Vetores:
const vet: number[] = [1,23,44,8,15];

console.log(vet[0]);
console.log(vet[4]);
console.log("\n")

// Matriz:
let matriz: number[][] = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log();

for(let i: number = 0; i < 3; i++){
    let linha: string= "";
        for(let j: number = 0; j < 3; j++){
            linha += matriz[i][j] + " ";
    }
    console.log(linha);
}
console.log("\n")

// Estrutura FOR para exibir os valores do vetor
console.log("For classico:");
for(let i: number = 0; i<vet.length; i++) {
    console.log(`[${i}] -> ${vet[i]}`);
}


