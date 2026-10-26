// 01. Analisar o desempenho da busca por artefatos com bonus de dano.
db.items.find({
  "buff.type": "damage"
}).sort({
  "buff.value": -1
}).explain("executionStats")


// 02. Criar um indice composto que organiza os artefatos pelo tipo de bonus e pelo valor do poder.
db.items.createIndex(
  {
    "buff.type": 1,
    "buff.value": -1
  },
  {
    name: "indice_poder_dos_artefatos"
  }
)


// 03. Comparar o desempenho da mesma busca apos criar o indice.
db.items.find({
  "buff.type": "damage"
}).sort({
  "buff.value": -1
}).explain("executionStats")


// 04. Criar um indice de texto inteligente para as missoes.
// O nome tem peso 10 e a descricao tem peso 2.
db.quests.createIndex(
  {
    name: "text",
    description: "text"
  },
  {
    weights: {
      name: 10,
      description: 2
    },
    name: "indice_busca_inteligente"
  }
)


// 05. Buscar missoes pela palavra Study e ordenar os resultados pela relevancia calculada pelo MongoDB.
db.quests.find(
  {
    $text: {
      $search: "Study"
    }
  },
  {
    _id: 0,
    name: 1,
    description: 1,
    relevancia: {
      $meta: "textScore"
    }
  }
).sort({
  relevancia: {
    $meta: "textScore"
  }
})
