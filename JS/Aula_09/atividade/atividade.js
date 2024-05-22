const calendario = new Date();
const dia = calendario.getDate();
const mes = calendario.getMonth();
const ano = calendario.getFullYear();
const hora = calendario.getHours();
const minuto = calendario.getMinutes();

console.log(`Dia: ${dia}`);
console.log(`Mês: ${mes}`);
console.log(`Ano: ${ano}`);
console.log(`Hora: ${hora}:${minuto}`);
