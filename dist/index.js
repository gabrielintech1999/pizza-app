"use strict";
const usuarios = [
    { id: 1, nome: "João", idade: 25 },
    { id: 2, nome: "Maria", idade: 30 },
    { id: 3, nome: "Carlos", idade: 22 }
];
// Encontrar o usuário com id 2
const usuario = usuarios.find(u => u.id === 2);
if (usuario) {
    Object.assign(usuario, { nome: "Mariana", idade: 31 });
}
console.log(usuarios);
//# sourceMappingURL=index.js.map