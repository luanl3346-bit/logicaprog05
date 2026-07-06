console.log("For: Clássico");

let numeros: number[] = [11, 22, 54, 47, 20];

for(let i: number = 0; i < numeros.length; i++) {
    console.log(`índice ${i}: ${numeros[i]}`);
}
console.log();

console.log("For..of:");
for(let nm of numeros){
    console.log(nm);
}
console.log()

console.log("For: Eatch");
numeros.forEach(
    (n,i) => {
        console.log(`índice: ${i}: ${n}`);
    }
);

