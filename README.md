# Projeto de certificação 1 - Pontuação dos atletas

### Resumo do projeto

Crie uma aplicação capaz de receber o nome e as notas de um atleta, calcular a média e apresentar ao usuário.

### Introdução

Em uma determinada competição de ginástica artística, vários atletas realizam apresentações para uma banca composta por cinco jurados. Cada jurado é responsável por avaliar um critério em específico, sendo eles o tempo de duração da apresentação, originalidade da coreografia, postura do atleta, dificuldade das acrobacias e sincronismo.

A competição em questão possui a seguinte regra de avaliação:

Cada jurado pode fornecer uma nota de um (1) a dez (10);
A média é calculada com base nas três notas do meio, desconsiderando a maior e menor nota.
O organizador da competição contratou a sua equipe para criar uma aplicação capaz de receber o nome e notas dos atletas e realizar o devido cálculo. Você foi o encarregado de criar a solução utilizando a linguagem JavaScript.

### Resolução
Primeiramente foi criada uma variavel resultado para armazenar os resultados finais de cada atleta em uma matriz.

```javascript
const resultado = [];
```

Depois foi criado um laço for para percorrer a matriz atletas, para executar a soma da media para cada atleta;
```javascript
for (let i = 0; i < atletas.length; i++) {
  // logica do calculo da media aqui
}
```

Foi salvo os dados do atleta em uma variavel temporaria atleta.
```javascript
let atleta = atletas[i];
```

Conforme especificado, as notas da matriz de notas do atleta foram ordenadas em ordem decrecente utilizando o médoto 'sort()'.
```javascript
let notas = [...atleta.notas];
let notasOrdenadas = notas.sort((a, b) => a - b);
```

Depois foram removidas a menor e a maior nota do atleta da matriz de notas.
```javascript
let notasComputadas = notasOrdenadas.slice(1,4);
```

Então foram somandas as três notas do atleta utilizando o método 'reduce()'.
```javascript
let somaNotas = notasComputadas.reduce((a, b) => a + b);
```

Por fim foi calculada a média das três notas.
```javascript
let media =  somaNotas / notasComputadas.length;
```

E então atribuida a matriz de resultado o objeto contendo 'Atleta', 'Notas Obtidas' e 'Média Válida'.
```javascript
resultado.push({
  'Atleta': atleta.nome,
  'Notas Obtidas': atleta.notas.join(','),
  'Média Válida': media
})
```

### Comando para execução do código 
```bash
node notas-atletas.js
```