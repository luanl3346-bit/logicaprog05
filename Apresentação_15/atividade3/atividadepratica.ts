// Testando escopo
let mensagem: string = "Global";

function teste() {
    let mensagem: string = "Local";
    console.log(mensagem);
}

teste();
console.log(mensagem);