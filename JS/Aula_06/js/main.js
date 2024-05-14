const num = 'ola';
const g = 11;

if(num % 2 == 0 && !isNaN(num))
console.log('Número par');

else if (num % 2 !=0 && !isNaN(num))
console.log('Número impar');

else console.log('Não é um número');

console.clear()
let resultado = 3>4 ? 'Sim' : 'Não';

console.log(resultado);

const h = 11;
const cor = h > 11 ? 'vermelha' : 'azul'
console.clear()
switch(cor){
  case 'vermleha':console.log('A cor é vermelha');
  break;
  case 'azul':console.log('A cor é azul');
  break;
  default:console.log('A cor não é vermelha nem azul');
}

console.clear();

const num1 = (30, -1, 5, 3, 121);
const num2 = (-2, 40, 16, 111, 33, 164);

console.log(num1);
console.log(num2);

console.log(`primeiro elemento de num1: ${num1[0]}`);
console.log(`primeiro elemento de num2: ${num2[0]}`);
console.log(`primeiro elemento de num1: ${num1[2]}`);
console.log(`primeiro elemento de num2: ${num2[5]}`);

console.clear()
const matrix =[
  ['banana','maçã','pera'],
  ['laranja',true,1],
  [null,'uva',-350]
];

console.log(`Acessa a primeira linha: ${matrix[0]}`);
console.log(`Acessa a primeira linha: ${matrix[0][1]}`);




