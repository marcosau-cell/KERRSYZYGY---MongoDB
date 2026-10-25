//Cadastrar um novo usuario ficticio para testar a criacao.
db.users.insertOne({
  username: "ExploradorExtra",
  email: "explorador.extra@example.com",
  password: "HASH_FICTICIO_SEM_LOGIN",
  birthday: ISODate("2004-06-15"),
  gender: "Nao informado",
  pronouns: "Nao informado"
})

//Cadastrar um produto com buff embutido.
db.items.insertOne({
  name: "Elixir da Nebulosa",
  description: "Pocao temporaria de energia",
  category: "potions",
  type: "consumable",
  price: 210,
  currency: "credits",
  buff: {
    type: "stamina",
    value: 35,
    duration: 45
  },
  active: true
})

//Mostrar todos os usuarios sem exibir as senhas.
db.users.find({}, { password: 0 })

//Buscar um produto pelo ObjectId.
db.items.find({
  _id: ObjectId("670000000000000000000505")
})

//Mostrar os produtos da categoria de artefatos.
db.items.find({
  category: "items"
})

//Buscar produtos que custam entre 500 e 950 creditos.
db.items.find(
  { price: { $gte: 500, $lte: 950 } },
  { name: 1, price: 1, _id: 0 }
).sort({ price: 1 })

//Simular a barra de pesquisa da loja.
db.items.find(
  { name: /prism|cristal|orbe/i },
  { name: 1, category: 1, price: 1, _id: 0 }
)

//Encontrar itens que possuem bonus de ataque embutido.
db.items.find(
  { "buff.type": "damage" },
  { name: 1, buff: 1, _id: 0 }
)

//Encontrar produtos que nao possuem buff.
db.items.find(
  { buff: null },
  { name: 1, type: 1, _id: 0 }
)

//Encontrar buffs com duracao de pelo menos 30.
db.items.find({
  "buff.duration": { $gte: 30 }
})

//Ranking dos 5 personagens com maior ataque.
db.characters.find(
  {},
  { name: 1, base_attack: 1, _id: 0 }
).sort({ base_attack: -1 }).limit(5)

//Encontrar personagens rapidos com chance critica alta.
db.characters.find({
  base_speed: { $gte: 1.2 },
  base_crit_chance: { $gte: 0.12 }
})

//Mostrar os 5 saves com mais moedas sol.
db.saves.find(
  {},
  { current_levels: 1, sol: 1, _id: 0 }
).sort({ sol: -1 }).limit(5)

//Encontrar jogadores com nivel 5 ou superior e 400 sol.
db.saves.find({
  current_levels: { $gte: 5 },
  sol: { $gte: 400 }
})

//Descobrir todas as localizacoes diferentes do jogo.
db.saves.distinct("current_location")

//Procurar missoes dificeis ou do modo foco.
db.quests.find({
  $or: [
    { difficulty: "hard" },
    { type: "focus" }
  ]
})

//Mostrar todas as missoes que ainda estao pendentes.
db.playerquests.find({
  status: "pending"
})

//Mostrar as compras mais caras, acima de 900 creditos.
db.purchases.find({
  total_price: { $gte: 900 }
}).sort({ total_price: -1 })

//Encontrar artefatos evoluidos para o nivel 3 ou superior.
db.artifacts.find({
  upgrade_level: { $gte: 3 }
})

//Simular a segunda pagina da loja, mostrando 3 itens.
db.items.find(
  {},
  { name: 1, price: 1, _id: 0 }
).sort({ name: 1 }).skip(3).limit(3)


//Concluir uma missao pendente e registrar a data.
db.playerquests.updateOne(
  { _id: ObjectId("670000000000000000000a01") },
  {
    $set: {
      status: "completed",
      completed_at: new Date()
    }
  }
)

//Adicionar 3 unidades ao inventario de um jogador.
db.inventory.updateOne(
  { _id: ObjectId("670000000000000000000601") },
  { $inc: { quantity: 3 } }
)

//Recompensar um jogador com 100 moedas sol.
db.saves.updateOne(
  { _id: ObjectId("670000000000000000000201") },
  {
    $inc: { sol: 100 },
    $set: { updated_at: new Date() }
  }
)

//Atualizar o preco atual de um produto da loja.
db.items.updateOne(
  { _id: ObjectId("670000000000000000000505") },
  { $set: { price: 980 } }
)


// Soft Delete: inativar um item sem apagar do banco.
db.items.updateOne(
  { name: "Elixir da Nebulosa" },
  { $set: { active: false } }
)

//Mostrar somente os produtos nao inativados.
db.items.find({
  active: { $ne: false }
})

//Remover somente o usuario extra criado no teste.
db.users.deleteOne({
  email: "explorador.extra@example.com"
})


//Calcular o total de vendas por categoria em outubro de 2026.
db.purchases.aggregate([
  {
    $match: {
      purchased_at: {
        $gte: ISODate("2026-10-01"),
        $lt: ISODate("2026-11-01")
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
  { $unwind: "$item" },
  {
    $group: {
      _id: "$item.category",
      faturamento: { $sum: "$total_price" },
      unidades: { $sum: "$quantity" },
      total_compras: { $sum: 1 }
    }
  },
  { $sort: { faturamento: -1 } }
])

//Descobrir os 5 produtos que mais renderam creditos.
db.purchases.aggregate([
  {
    $lookup: {
      from: "items",
      localField: "item_id",
      foreignField: "_id",
      as: "item"
    }
  },
  { $unwind: "$item" },
  {
    $group: {
      _id: "$item.name",
      receita: { $sum: "$total_price" },
      unidades_vendidas: { $sum: "$quantity" }
    }
  },
  { $sort: { receita: -1 } },
  { $limit: 5 }
])

//Ranking dos jogadores mais ricos, mostrando seus nomes.
db.saves.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "user_id",
      foreignField: "_id",
      as: "usuario"
    }
  },
  { $unwind: "$usuario" },
  {
    $project: {
      _id: 0,
      jogador: "$usuario.username",
      sol: 1,
      nivel: "$current_levels",
      localizacao: "$current_location"
    }
  },
  { $sort: { sol: -1 } },
  { $limit: 10 }
])

//Mostrar quais personagens pertencem a cada jogador.
db.playercharacters.aggregate([
  {
    $lookup: {
      from: "characters",
      localField: "character_id",
      foreignField: "_id",
      as: "personagem"
    }
  },
  { $unwind: "$personagem" },
  {
    $lookup: {
      from: "saves",
      localField: "save_id",
      foreignField: "_id",
      as: "save"
    }
  },
  { $unwind: "$save" },
  {
    $lookup: {
      from: "users",
      localField: "save.user_id",
      foreignField: "_id",
      as: "usuario"
    }
  },
  { $unwind: "$usuario" },
  {
    $project: {
      _id: 0,
      jogador: "$usuario.username",
      personagem: "$personagem.name",
      nivel: "$level",
      vida: "$current_health"
    }
  },
  { $sort: { jogador: 1 } }
])

//Mostrar o inventario com nome do jogador, item e quantidade.
db.inventory.aggregate([
  {
    $lookup: {
      from: "items",
      localField: "item_id",
      foreignField: "_id",
      as: "item"
    }
  },
  { $unwind: "$item" },
  {
    $lookup: {
      from: "saves",
      localField: "save_id",
      foreignField: "_id",
      as: "save"
    }
  },
  { $unwind: "$save" },
  {
    $lookup: {
      from: "users",
      localField: "save.user_id",
      foreignField: "_id",
      as: "usuario"
    }
  },
  { $unwind: "$usuario" },
  {
    $project: {
      _id: 0,
      jogador: "$usuario.username",
      item: "$item.name",
      quantidade: "$quantity"
    }
  },
  { $sort: { jogador: 1 } }
])

//Descobrir quanto cada jogador gastou na loja.
db.purchases.aggregate([
  {
    $group: {
      _id: "$save_id",
      total_gasto: { $sum: "$total_price" },
      compras: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "saves",
      localField: "_id",
      foreignField: "_id",
      as: "save"
    }
  },
  { $unwind: "$save" },
  {
    $lookup: {
      from: "users",
      localField: "save.user_id",
      foreignField: "_id",
      as: "usuario"
    }
  },
  { $unwind: "$usuario" },
  {
    $project: {
      _id: 0,
      jogador: "$usuario.username",
      total_gasto: 1,
      compras: 1
    }
  },
  { $sort: { total_gasto: -1 } }
])

//Contar missoes concluidas e pendentes por dificuldade.
db.playerquests.aggregate([
  {
    $lookup: {
      from: "quests",
      localField: "quest_id",
      foreignField: "_id",
      as: "missao"
    }
  },
  { $unwind: "$missao" },
  {
    $group: {
      _id: {
        dificuldade: "$missao.difficulty",
        status: "$status"
      },
      quantidade: { $sum: 1 }
    }
  },
  {
    $sort: {
      "_id.dificuldade": 1,
      "_id.status": 1
    }
  }
])

//Calcular a porcentagem de missoes concluidas por jogador.
db.playerquests.aggregate([
  {
    $group: {
      _id: "$save_id",
      total: { $sum: 1 },
      concluidas: {
        $sum: {
          $cond: [
            { $eq: ["$status", "completed"] },
            1,
            0
          ]
        }
      }
    }
  },
  {
    $lookup: {
      from: "saves",
      localField: "_id",
      foreignField: "_id",
      as: "save"
    }
  },
  { $unwind: "$save" },
  {
    $lookup: {
      from: "users",
      localField: "save.user_id",
      foreignField: "_id",
      as: "usuario"
    }
  },
  { $unwind: "$usuario" },
  {
    $project: {
      _id: 0,
      jogador: "$usuario.username",
      total: 1,
      concluidas: 1,
      percentual: {
        $multiply: [
          { $divide: ["$concluidas", "$total"] },
          100
        ]
      }
    }
  },
  { $sort: { percentual: -1 } }
])

//Calcular a media dos bonus embutidos por tipo.
db.items.aggregate([
  {
    $match: {
      "buff.type": { $exists: true }
    }
  },
  {
    $group: {
      _id: "$buff.type",
      media_bonus: { $avg: "$buff.value" },
      itens: { $sum: 1 }
    }
  },
  { $sort: { media_bonus: -1 } }
])

//Descobrir quais regioes possuem mais jogadores.
db.saves.aggregate([
  {
    $group: {
      _id: "$current_location",
      jogadores: { $sum: 1 },
      nivel_medio: { $avg: "$current_levels" }
    }
  },
  { $sort: { jogadores: -1 } }
])

//Mostrar os artefatos mais evoluidos e seus bonus.
db.artifacts.aggregate([
  {
    $lookup: {
      from: "items",
      localField: "item_id",
      foreignField: "_id",
      as: "item"
    }
  },
  { $unwind: "$item" },
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
    $sort: {
      upgrade_level: -1,
      bonus_value: -1
    }
  }
])

//Separar os itens da loja por faixas de preco.
db.items.aggregate([
  {
    $bucket: {
      groupBy: "$price",
      boundaries: [0, 300, 700, 1000, 2000],
      default: "Outros",
      output: {
        quantidade: { $sum: 1 },
        produtos: { $push: "$name" }
      }
    }
  }
])

//Encontrar compras com referencias quebradas para itens inexistentes.
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
    $match: {
      item: { $size: 0 }
    }
  },
  {
    $project: {
      _id: 1,
      save_id: 1,
      item_id: 1
    }
  }
])

// 41. Ranking dos jogadores que mais ganharam XP e moedas ao completar missoes.
db.playerquests.aggregate([
  { $match: { status: "completed" } },
  {
    $lookup: {
      from: "quests",
      localField: "quest_id",
      foreignField: "_id",
      as: "missao"
    }
  },
  { $unwind: "$missao" },
  {
    $group: {
      _id: "$save_id",
      xp_ganho: { $sum: "$missao.reward_xp" },
      moedas_ganhas: { $sum: "$missao.reward_coins" },
      missoes_concluidas: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "saves",
      localField: "_id",
      foreignField: "_id",
      as: "save"
    }
  },
  { $unwind: "$save" },
  {
    $lookup: {
      from: "users",
      localField: "save.user_id",
      foreignField: "_id",
      as: "usuario"
    }
  },
  { $unwind: "$usuario" },
  {
    $project: {
      _id: 0,
      jogador: "$usuario.username",
      xp_ganho: 1,
      moedas_ganhas: 1,
      missoes_concluidas: 1
    }
  },
  { $sort: { xp_ganho: -1 } }
])


// 42. Descobrir quais personagens sao mais populares
// e calcular o nivel medio de cada personagem.
db.playercharacters.aggregate([
  {
    $group: {
      _id: "$character_id",
      jogadores: { $sum: 1 },
      nivel_medio: { $avg: "$level" }
    }
  },
  {
    $lookup: {
      from: "characters",
      localField: "_id",
      foreignField: "_id",
      as: "personagem"
    }
  },
  { $unwind: "$personagem" },
  {
    $project: {
      _id: 0,
      personagem: "$personagem.name",
      jogadores: 1,
      nivel_medio: { $round: ["$nivel_medio", 1] }
    }
  },
  { $sort: { jogadores: -1, personagem: 1 } }
])


// 43. Descobrir os 5 jogadores com inventarios mais valiosos.
// Calcula quantidade multiplicada pelo preco atual de cada item.
db.inventory.aggregate([
  {
    $lookup: {
      from: "items",
      localField: "item_id",
      foreignField: "_id",
      as: "item"
    }
  },
  { $unwind: "$item" },
  {
    $group: {
      _id: "$save_id",
      quantidade_total: { $sum: "$quantity" },
      valor_estimado: {
        $sum: {
          $multiply: ["$quantity", "$item.price"]
        }
      }
    }
  },
  {
    $lookup: {
      from: "saves",
      localField: "_id",
      foreignField: "_id",
      as: "save"
    }
  },
  { $unwind: "$save" },
  {
    $lookup: {
      from: "users",
      localField: "save.user_id",
      foreignField: "_id",
      as: "usuario"
    }
  },
  { $unwind: "$usuario" },
  {
    $project: {
      _id: 0,
      jogador: "$usuario.username",
      quantidade_total: 1,
      valor_estimado: 1
    }
  },
  { $sort: { valor_estimado: -1 } },
  { $limit: 5 }
])


// 44. Encontrar produtos encalhados na loja. Mostra itens cadastrados que nunca foram comprados.
db.items.aggregate([
  {
    $lookup: {
      from: "purchases",
      localField: "_id",
      foreignField: "item_id",
      as: "compras"
    }
  },
  { $match: { compras: { $size: 0 } } },
  {
    $project: {
      _id: 0,
      produto: "$name",
      categoria: "$category",
      preco: "$price"
    }
  },
  { $sort: { preco: -1 } }
])


//Descobrir quanto XP e quantas moedas ainda podem ser ganhos ao completar as missoes pendentes.
db.playerquests.aggregate([
  { $match: { status: "pending" } },
  {
    $lookup: {
      from: "quests",
      localField: "quest_id",
      foreignField: "_id",
      as: "missao"
    }
  },
  { $unwind: "$missao" },
  {
    $group: {
      _id: "$missao.difficulty",
      missoes_pendentes: { $sum: 1 },
      xp_disponivel: { $sum: "$missao.reward_xp" },
      moedas_disponiveis: {
        $sum: "$missao.reward_coins"
      }
    }
  },
  {
    $project: {
      _id: 0,
      dificuldade: "$_id",
      missoes_pendentes: 1,
      xp_disponivel: 1,
      moedas_disponiveis: 1
    }
  },
  { $sort: { xp_disponivel: -1 } }
])