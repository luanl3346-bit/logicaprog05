//Criando um objeto usuário
let usuarios : 
    {nome:string; idade:number; ativo:boolean; email:string; endereço: {
        logradouro: string; numero:number; cidade: string; estado: string; cep: number}} [] 
        = [{ nome: "Luan", idade: 20, ativo: true, email: "luan123@gmail.com", 
            endereço: {
                logradouro: "Rua ranulpho Bocayuva Cunha",
                numero: 26,
                cidade: "Rio de Janeiro",
                estado: "RJ",
                cep: 21735230
            }
        },
        { nome: "Henry", idade: 19, ativo: false, email: "henrysgd@gmail.com",
            endereço: {
                logradouro: "Rua Marechal Rondon",
                numero: 70,               
                cidade: "Rio de Janeiro",
                estado: "RJ",
                cep: 21720440
        }          
        },
        { nome: "João", idade: 22, ativo: true, email: "jd@gmail.com",
            endereço: {
                logradouro: "Rua Oscar de Barros",
                numero: 40,
                cidade: "São Paulo",
                estado: "SP",
                cep: 10784550
        }
        },
        { nome: "Carol", idade: 20, ativo: true, email: "carol10@gmail.com",
            endereço: {
                logradouro: "Rua Marechal Abreu Lima",
                numero: 15,
                cidade: "Minas Gerais",
                estado: "MG",
                cep: 30170220
        }
        }
];
 
//Usando for...of para percorrer o array de usuários e exibir suas informações
for(let user of usuarios) {
    console.log(`Nome: ${user.nome} | Idade: ${user.idade} | Ativo: ${user.ativo} | Email: ${user.email} \n
        Endereço: ${user.endereço.logradouro},
        Número: ${user.endereço.numero},
        Cidade: ${user.endereço.cidade},
        Estado: ${user.endereço.estado},
        CEP: ${user.endereço.cep}\n`);
};

//Alterando o email e o status do primeiro usuário do array
usuarios[0].email = "luan1234@gmail.com";
usuarios[0].ativo = false;

console.log(`\nUsuário alterado: ${usuarios[0].nome}, | Novo Email: ${usuarios[0].email} | Ativo: ${usuarios[0].ativo}\n`);

