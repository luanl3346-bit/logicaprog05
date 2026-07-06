let numeros: number[] = [4, 87, 12, 6, 22];
let soma: number = 0;

let maior: number = numeros[0];
let menor: number = numeros[0];

for(let n of numeros) {
    soma += n;
    if(maior<n){
        maior = n;
    }
    if(menor>n){
        menor = n;
    }

}

console.log(`Soma: `, soma);

// Média 
let media: number = soma/numeros.length
console.log(`Média: `, media);
console.log(`Maior: ${maior}`);
console.log(`Menor: ${menor}`);
