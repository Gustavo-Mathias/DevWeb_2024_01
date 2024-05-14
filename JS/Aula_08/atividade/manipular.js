const funcionarios = [
  { nome: "Wally", salario: 4800 },
  { nome: "Alice", salario: 5500 },
  { nome: "Bob", salario: 5200 },
  { nome: "Carol", salario: 4900 },
  { nome: "Dave", salario: 5000 }
];

console.log("Funcionários e seus salários:");
funcionarios.forEach(funcionario => {
  console.log(`${funcionario.nome}: R$ ${funcionario.salario}`);
});

const funcionariosReajustados = funcionarios.map(funcionario => {
  return {
    nome: funcionario.nome,
    salario: funcionario.salario * 1.05 // Aumento de 5%
  };
});

const funcionariosAcimaDe5000 = funcionariosReajustados.filter(funcionario => funcionario.salario > 5000);

const wally = funcionariosAcimaDe5000.find(funcionario => funcionario.nome === "Wally");
console.log("Você encontrou o Wally?");
if (wally) {
  console.log("Sim, encontrou-o!");
} else {
  console.log("Não, não o encontrou.");
}