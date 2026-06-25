const alt: number = 1.79;
const kg: number = 86;
const IMC: number = kg/(alt*alt);

if(IMC <= 18.5) {
   console.log(`Abaixo do peso!`)

}else if (IMC <= 24.9) {
    console.log(`Seu peso está normal`)

}else if (IMC <= 29.9) {
    console.log(`Acima do peso!`)

}else {
    console.log(`Sobrepeso!`)
};
