// ===================== CREATE =====================
// Inserir novos documentos no banco.

// Remover um usuario de teste antigo, caso exista.
// Execute apenas se precisar reiniciar o teste.
db.users.deleteOne({
  email: "teste.consultas.kerrsyzygy@example.com"
})


// Criar um usuario ficticio para demonstrar o CREATE.
db.users.insertOne({
  username: "TesteCRUD",
  email: "teste.consultas.kerrsyzygy@example.com",
  password: "HASH_TESTE",
  birthday: ISODate("2001-01-01T00:00:00Z"),
  gender: "Nao informado",
  pronouns: "Nao informado"
})


// ===================== READ =====================
// Consultar documentos usando find().


// Consultar o usuario criado no teste, sem mostrar a senha.
db.users.find(
  { email: "teste.consultas.kerrsyzygy@example.com" },
  { password: 0 }
)


// Mostrar os usuarios cadastrados sem exibir as senhas.
db.users.find({}, { password: 0 })


// Encontrar uma usuaria especifica pelo email.
db.users.find(
  { email: "analima@example.com" },
  { username: 1, email: 1, _id: 0 }
)


// Mostrar os cinco personagens com maior ataque base.
db.characters.find(
  {},
  { name: 1, base_attack: 1, _id: 0 }
).sort({ base_attack: -1 }).limit(5)


// Encontrar personagens dos jogadores com nivel 5 ou superior.
db.playercharacters.find(
  { level: { $gte: 5 } },
  {
    save_id: 1,
    character_id: 1,
    level: 1,
    _id: 0
  }
)


// Buscar itens com bonus de dano embutido.
db.items.find(
  { "buff.type": "damage" },
  { name: 1, buff: 1, _id: 0 }
)


// Mostrar produtos da categoria de pocoes.
db.items.find(
  { category: "potions" },
  { name: 1, price: 1, _id: 0 }
)


// Encontrar itens entre 500 e 950 creditos.
// Organizar do mais barato para o mais caro.
db.items.find(
  { price: { $gte: 500, $lte: 950 } },
  { name: 1, price: 1, _id: 0 }
).sort({ price: 1 })


// Mostrar os produtos que nao possuem buff embutido.
db.items.find(
  { buff: null },
  { name: 1, type: 1, _id: 0 }
)


// Mostrar os cinco saves com mais moedas sol.
db.saves.find(
  {},
  { current_levels: 1, sol: 1, _id: 0 }
).sort({ sol: -1 }).limit(5)


// Encontrar as missoes dos jogadores que estao pendentes.
db.playerquests.find(
  { status: "pending" },
  {
    save_id: 1,
    quest_id: 1,
    status: 1,
    _id: 0
  }
)


// Buscar missoes dificeis ou do modo foco.
db.quests.find(
  {
    $or: [
      { difficulty: "hard" },
      { type: "focus" }
    ]
  },
  {
    name: 1,
    type: 1,
    difficulty: 1,
    _id: 0
  }
)


// Mostrar compras realizadas em outubro de 2026.
db.purchases.find(
  {
    purchased_at: {
      $gte: ISODate("2026-10-01T00:00:00Z"),
      $lt: ISODate("2026-11-01T00:00:00Z")
    }
  },
  {
    total_price: 1,
    purchased_at: 1,
    _id: 0
  }
).sort({ purchased_at: 1 })


// Buscar artefatos com nivel de aprimoramento 3 ou maior.
db.artifacts.find(
  { upgrade_level: { $gte: 3 } },
  {
    save_id: 1,
    item_id: 1,
    upgrade_level: 1,
    bonus_value: 1,
    _id: 0
  }
)


// ===================== UPDATE =====================
// Atualizar informacoes de documentos existentes.


// Alterar o nome do usuario ficticio utilizando $set.
db.users.updateOne(
  { email: "teste.consultas.kerrsyzygy@example.com" },
  {
    $set: {
      username: "TesteCRUDAtualizado"
    }
  }
)


// ===================== DELETE =====================
// Remover documentos do banco.


// Excluir somente o usuario ficticio usado no teste.
db.users.deleteOne({
  email: "teste.consultas.kerrsyzygy@example.com"
})


// ===================== AGREGACOES =====================
// Criar relatorios e analisar informacoes do banco.


// RELATORIO ESCOLHIDO PARA A APRESENTACAO.
// Calcular o faturamento de outubro de 2026 por categoria.
// Relaciona Purchases com Items e soma os valores das compras.
db.purchases.aggregate([
  {
    $match: {
      purchased_at: {
        $gte: ISODate("2026-10-01T00:00:00Z"),
        $lt: ISODate("2026-11-01T00:00:00Z")
      }
    }
  },
  {
    $lookup: {
      from: "items",
      localField: "item_id",
      foreignField: "_id",
      as: "item"
    }
  },
  {
    $unwind: "$item"
  },
  {
    $group: {
      _id: "$item.category",
      faturamento: { $sum: "$total_price" },
      unidades: { $sum: "$quantity" },
      total_compras: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      categoria: "$_id",
      faturamento: 1,
      unidades: 1,
      total_compras: 1
    }
  },
  {
    $sort: {
      faturamento: -1
    }
  }
])


// Descobrir os cinco produtos que mais geraram creditos em compras.
db.purchases.aggregate([
  {
    $lookup: {
      from: "items",
      localField: "item_id",
      foreignField: "_id",
      as: "item"
    }
  },
  {
    $unwind: "$item"
  },
  {
    $group: {
      _id: "$item.name",
      receita: { $sum: "$total_price" },
      unidades_vendidas: { $sum: "$quantity" }
    }
  },
  {
    $sort: { receita: -1 }
  },
  {
    $limit: 5
  },
  {
    $project: {
      _id: 0,
      produto: "$_id",
      receita: 1,
      unidades_vendidas: 1
    }
  }
])


// Relacionar os personagens dos jogadores com os nomes
// dos personagens cadastrados em Characters.
db.playercharacters.aggregate([
  {
    $lookup: {
      from: "characters",
      localField: "character_id",
      foreignField: "_id",
      as: "personagem"
    }
  },
  {
    $unwind: "$personagem"
  },
  {
    $project: {
      _id: 0,
      save_id: 1,
      personagem: "$personagem.name",
      nivel: "$level",
      vida_atual: "$current_health"
    }
  },
  {
    $sort: { nivel: -1 }
  }
])


// Mostrar o ranking dos jogadores com mais moedas sol.
// Relaciona os saves aos nomes dos usuarios.
db.saves.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "user_id",
      foreignField: "_id",
      as: "usuario"
    }
  },
  {
    $unwind: "$usuario"
  },
  {
    $project: {
      _id: 0,
      jogador: "$usuario.username",
      moedas_sol: "$sol",
      nivel: "$current_levels"
    }
  },
  {
    $sort: { moedas_sol: -1 }
  },
  {
    $limit: 5
  }
])


// Contar quantas missoes estao pendentes e concluidas.
db.playerquests.aggregate([
  {
    $group: {
      _id: "$status",
      quantidade: { $sum: 1 }
    }
  },
  {
    $sort: {
      quantidade: -1,
      _id: 1
    }
  }
])


// Mostrar o nome dos artefatos, nivel de melhoria
// e os seus respectivos bonus.
db.artifacts.aggregate([
  {
    $lookup: {
      from: "items",
      localField: "item_id",
      foreignField: "_id",
      as: "item"
    }
  },
  {
    $unwind: "$item"
  },
  {
    $project: {
      _id: 0,
      artefato: "$item.name",
      upgrade_level: 1,
      bonus_type: 1,
      bonus_value: 1
    }
  },
  {
    $sort: { upgrade_level: -1 }
  }
])


// Descobrir quantos jogadores existem em cada localizacao
// e calcular o nivel medio desses jogadores.
db.saves.aggregate([
  {
    $group: {
      _id: "$current_location",
      jogadores: { $sum: 1 },
      nivel_medio: { $avg: "$current_levels" }
    }
  },
  {
    $sort: {
      jogadores: -1,
      _id: 1
    }
  }
])


// Mostrar produtos cadastrados que ainda nao foram comprados.
db.items.aggregate([
  {
    $lookup: {
      from: "purchases",
      localField: "_id",
      foreignField: "item_id",
      as: "compras"
    }
  },
  {
    $match: {
      compras: { $size: 0 }
    }
  },
  {
    $project: {
      _id: 0,
      produto: "$name",
      categoria: "$category",
      preco: "$price"
    }
  },
  {
    $sort: { preco: -1 }
  }
])
