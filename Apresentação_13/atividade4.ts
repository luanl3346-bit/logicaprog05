let matriz: number [][] = [
    [1, 2],
    [3, 4],
    [5, 6]
];

console.log(matriz);

// Matriz com loops alinhados
for(let i = 0; i < matriz.length; i++) {
    let linha: string = "";
    for(let j = 0; j < matriz[i].length; j++){
    linha += matriz[i][j]+" ";
    }
    console.log(linha);
}
console.log();

// Criando uma cópia dos valores da referência
let maT = [...matriz]; 
maT.pop();
for(let i = 0; i < maT.length; i++) {
    let linha: string = ""
    for(let j = 0; j < maT[i].length; j++){
    linha += maT[i][j] + " ";
    }
    console.log(linha);
}

// Cria uma copia de uma parte do array
// "splice"


