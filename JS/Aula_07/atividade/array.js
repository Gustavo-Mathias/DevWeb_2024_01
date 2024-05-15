let alunos = [
  {
      nome: "João",
      notas: [8, 7, 9],
      endereco: {
          rua: "Rua A",
          cidade: "Cidade X",
          estado: "Estado Y"
      }
  },
  {
      nome: "Maria",
      notas: [6, 5, 7],
      endereco: {
          rua: "Rua B",
          cidade: "Cidade Z",
          estado: "Estado W"
      }
  },
  {
      nome: "Pedro",
      notas: [7, 8, 6],
      endereco: {
          rua: "Rua C",
          cidade: "Cidade M",
          estado: "Estado N"
      }
  }
];

function calcularMedia(notas) {
  let total = 0;
  for (let nota of notas) {
      total += nota;
  }
  return total / notas.length;
}

for (let aluno of alunos) {
  const media = calcularMedia(aluno.notas);
  const status = media >= 7 ? "aprovado(a)" : "reprovado(a)";
  console.log(`Aluno(a) ${aluno.nome} com notas ${aluno.notas.join(', ')} mora na ${aluno.endereco.rua}, ${aluno.endereco.cidade}, ${aluno.endereco.estado} e teve a média ${media.toFixed(2)}, portanto foi ${status}.`);
}