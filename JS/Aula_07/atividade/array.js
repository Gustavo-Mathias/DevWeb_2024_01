let alunos = {
  nome: "Gustavo",
  idade: 20,
  sexo: "Masculino",
  nota: [8],
  endereco: {
    rua: "Rua do bobos",
    numero: 0,
    cidade: "São Paulo",
    estado: "SP",
  },
  nome: "Maria Eduarda",
  idade: 17,
  sexo: "Feminino",
  nota: [10],
  endereco: {
    rua: "Rua Renato",
    numero: 319,
    cidade: "Caieiras",
    estado: "SP",
  },
  nome: "Laura",
  idade: 30,
  sexo: "Feminino",
  nota: [5],
  endereco: {
    rua: "Rua Alameda",
    numero: 53,
    cidade: "Jundiai",
    estado: "SP",
  }
}

function calcularMedia(notas) {
  let soma = 0;
  for (let nota of notas) {
    soma += nota;
  }
}
return soma / notas.lenth;

for (let aluno of alunos){
  const media = calcularMedia(alunos.nota);
  if (media >= 7 ){
    console.log(`Aluno ${alunos.nome} com a nota ${aluno.nota} mora em tal endereço ${alunos.endereco} e teve a média ${media.toFixed(2)}`)
  }else {
    console.log(`Aluno ${alunos.nome} com a nota ${aluno.nota} mora em tal endereço ${alunos.endereco} e teve a média ${media.toFixed(2)}`)
  }
}