let turma: string = ["Luan", "Henry", "João"];
console.log("turma inicial: ", turma);

// push() - adiciona ao final.
// unshift() - adiciona ao inicio.
// pop() - remove do final.
// shift() - remove do inicio.

// Push
turma.push("Carol");
console.log("Após o push: ", turma); 

// Shift
turma.shift(); 
console.log("Após o shift: ", turma);

// Cria uma copia de uma parte do array
// "splice"
turma.splice(1,1);
console.log(turma);
