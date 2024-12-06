let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

const resultado = [];

for (let i = 0; i < atletas.length; i++) {
  let atleta = atletas[i];
  // Ordena notas do menor para maior
  let notas = [...atleta.notas];
  let notasOrdenadas = notas.sort((a, b) => a - b);

  // Elimina a maior e a menor nota
  let notasComputadas = notasOrdenadas.slice(1,4);
  
  // Soma notas computadas
  let somaNotas = notasComputadas.reduce((a, b) => a + b);

  // Calcula média
  let media =  somaNotas / notasComputadas.length;

  resultado.push({
    'Atleta': atleta.nome,
    'Notas Obtidas': atleta.notas.join(','),
    'Média Válida': media
  })
}

console.log(resultado);