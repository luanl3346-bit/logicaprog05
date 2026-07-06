// Função de soma
function somar(a: number, b: number): number {
    return a + b;
}

console.log(somar(10, 5));
console.log(somar(2, 6));
console.log(somar(9, 3));


// Par ou Ímpar
function verificarParOuImpar(n: number): string {
    if (n % 2 === 0) {
        return "\nNúmero par!";
    }
    return "\nNúmero Ímpar!";
}

console.log(verificarParOuImpar(7));
console.log(verificarParOuImpar(4));
console.log(verificarParOuImpar(12));
console.log(verificarParOuImpar(26));
console.log(verificarParOuImpar(19));



// Mensagem personalizada
function saudacao(nome: string): void {
    console.log(`\nOlá, ${nome}! Seja bem vindo a Petrobrás! `);
}

saudacao(`Luan Henrique`);
saudacao(`Henry Sargedo`);
saudacao(`João Daniel`);




