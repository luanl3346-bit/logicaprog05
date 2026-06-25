// Declarando Variavéis 
const nota = 85;
const frequen = 80;
const mP = (((nota*0.6)*(frequen*0.4))/2)/10;

// Variável com condição de !
const suspensao = false;

// Condição
if (!suspensao) {
    if ((nota >= 60 && frequen >= 75) || nota >= 90) {
        console.log(`APROVADO!!! Com media ${mP} !`);
    
    } else {
        console.log(`REPROVADO!!! Com media ${mP} !`);
    };
} else {
    console.log(`ALUNO EXPULSO!!!`);
    
};