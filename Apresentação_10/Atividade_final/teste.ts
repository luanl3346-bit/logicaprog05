const nota1: number = 80;
const freq: number = 75;
const mediaPond: number = (((nota1*0.6)*(freq*0.4))/2)/10;
const suspensão: boolean = false;

if (!suspensão) {
    if ((nota1 >= 60 && freq >= 75) || nota1 >= 90)  {
        console.log(`APROVADO!! com média de ${mediaPond} !`);

    } else
        console.log(`REPROVADO!!! SEM MUITO PAPO.`);

} else 
    console.log(`ALUNO EXPULSO!!!`);

    
    



