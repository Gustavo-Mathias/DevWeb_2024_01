/*console.clear();
const boasVindas = () => {
alert('Bem vindo a nossa página');
console.log('Bem vindo a nossa página');
};
const eventClique = () => {
console.log('Você clicou no botão');
};*/
/*console.clear();
class NovoCarro {
  constructor(nome, ano) {
    this.nome = nome;
    this.ano = ano;
  }
}

let meuCarro1 = new Carro('Ford', 2014)
let meuCarro2 = new Carro('Fiat', 2015)

console.log(meuCarro1.nome)
console.log(meuCarro1.ano)
console.log(meuCarro2.nome)
console.log(meuCarro2.ano)*/

// Declarar nova classe com métodos
console.clear();
class NovoCarro {
  constructor(nome, ano) {
    this.nome = nome;
    this.ano = ano;
  }
  idadeCarro(ano) {
    return ano - this.ano;
  }
}
//Buscando o ano atual automaticamente
let dataHoje = new Date();
let ano = dataHoje.getFullYear();
// console.log(dataHoje);
// Intanciando o objeto à classe
let meuNovoCarro = new NovoCarro("Ford", 2014);
console.log(meuNovoCarro.idadeCarro(ano));
