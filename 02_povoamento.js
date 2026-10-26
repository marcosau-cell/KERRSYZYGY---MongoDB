// ==================== 10 de cada =============================
// USUARIOS E SALVAMENTOS

// USERS
db.users.insertMany([
  {
    _id: ObjectId("670000000000000000000101"),
    username: "AnaLima",
    email: "analima@example.com",
    password: "HASH_FICTICIO_SEM_LOGIN",
    birthday: ISODate("2002-01-15T00:00:00Z"),
    gender: "Feminino",
    pronouns: "Ela/Dela"
  },
  {
    _id: ObjectId("670000000000000000000102"),
    username: "BrunoCosta",
    email: "brunocosta@example.com",
    password: "HASH_FICTICIO_SEM_LOGIN",
    birthday: ISODate("2003-02-15T00:00:00Z"),
    gender: "Masculino",
    pronouns: "Ele/Dele"
  },
  {
    _id: ObjectId("670000000000000000000103"),
    username: "CarlaRocha",
    email: "carlarocha@example.com",
    password: "HASH_FICTICIO_SEM_LOGIN",
    birthday: ISODate("2004-03-15T00:00:00Z"),
    gender: "Nao informado",
    pronouns: "Nao informado"
  },
  {
    _id: ObjectId("670000000000000000000104"),
    username: "DiegoSantos",
    email: "diegosantos@example.com",
    password: "HASH_FICTICIO_SEM_LOGIN",
    birthday: ISODate("2005-04-15T00:00:00Z"),
    gender: "Feminino",
    pronouns: "Ela/Dela"
  },
  {
    _id: ObjectId("670000000000000000000105"),
    username: "ElisaMoura",
    email: "elisamoura@example.com",
    password: "HASH_FICTICIO_SEM_LOGIN",
    birthday: ISODate("2006-05-15T00:00:00Z"),
    gender: "Masculino",
    pronouns: "Ele/Dele"
  },
  {
    _id: ObjectId("670000000000000000000106"),
    username: "FelipeNunes",
    email: "felipenunes@example.com",
    password: "HASH_FICTICIO_SEM_LOGIN",
    birthday: ISODate("2007-06-15T00:00:00Z"),
    gender: "Nao informado",
    pronouns: "Nao informado"
  },
  {
    _id: ObjectId("670000000000000000000107"),
    username: "GiovanaReis",
    email: "giovanareis@example.com",
    password: "HASH_FICTICIO_SEM_LOGIN",
    birthday: ISODate("2001-07-15T00:00:00Z"),
    gender: "Feminino",
    pronouns: "Ela/Dela"
  },
  {
    _id: ObjectId("670000000000000000000108"),
    username: "HeitorAlves",
    email: "heitoralves@example.com",
    password: "HASH_FICTICIO_SEM_LOGIN",
    birthday: ISODate("2002-08-15T00:00:00Z"),
    gender: "Masculino",
    pronouns: "Ele/Dele"
  },
  {
    _id: ObjectId("670000000000000000000109"),
    username: "IsabelaRamos",
    email: "isabelaramos@example.com",
    password: "HASH_FICTICIO_SEM_LOGIN",
    birthday: ISODate("2003-09-15T00:00:00Z"),
    gender: "Nao informado",
    pronouns: "Nao informado"
  },
  {
    _id: ObjectId("67000000000000000000010a"),
    username: "JoaoFerreira",
    email: "joaoferreira@example.com",
    password: "HASH_FICTICIO_SEM_LOGIN",
    birthday: ISODate("2004-01-15T00:00:00Z"),
    gender: "Feminino",
    pronouns: "Ela/Dela"
  }
])

// SAVES
db.saves.insertMany([
  {
    _id: ObjectId("670000000000000000000201"),
    user_id: ObjectId("670000000000000000000101"),
    current_location: "Solar Station",
    current_levels: 1,
    current_health: 95,
    sol: 175,
    singularities: 1,
    prism: 1,
    created_at: ISODate("2026-10-20T12:00:00Z"),
    updated_at: ISODate("2026-10-22T12:00:00Z")
  },
  {
    _id: ObjectId("670000000000000000000202"),
    user_id: ObjectId("670000000000000000000102"),
    current_location: "Astral Forest",
    current_levels: 2,
    current_health: 105,
    sol: 250,
    singularities: 2,
    prism: 2,
    created_at: ISODate("2026-10-20T12:00:00Z"),
    updated_at: ISODate("2026-10-22T12:00:00Z")
  },
  {
    _id: ObjectId("670000000000000000000203"),
    user_id: ObjectId("670000000000000000000103"),
    current_location: "Crystal Ruins",
    current_levels: 3,
    current_health: 115,
    sol: 325,
    singularities: 3,
    prism: 3,
    created_at: ISODate("2026-10-20T12:00:00Z"),
    updated_at: ISODate("2026-10-22T12:00:00Z")
  },
  {
    _id: ObjectId("670000000000000000000204"),
    user_id: ObjectId("670000000000000000000104"),
    current_location: "Lunar Base",
    current_levels: 4,
    current_health: 125,
    sol: 400,
    singularities: 4,
    prism: 0,
    created_at: ISODate("2026-10-20T12:00:00Z"),
    updated_at: ISODate("2026-10-22T12:00:00Z")
  },
  {
    _id: ObjectId("670000000000000000000205"),
    user_id: ObjectId("670000000000000000000105"),
    current_location: "Nebula Gate",
    current_levels: 5,
    current_health: 135,
    sol: 475,
    singularities: 5,
    prism: 1,
    created_at: ISODate("2026-10-20T12:00:00Z"),
    updated_at: ISODate("2026-10-22T12:00:00Z")
  },
  {
    _id: ObjectId("670000000000000000000206"),
    user_id: ObjectId("670000000000000000000106"),
    current_location: "Solar Station",
    current_levels: 6,
    current_health: 145,
    sol: 550,
    singularities: 0,
    prism: 2,
    created_at: ISODate("2026-10-20T12:00:00Z"),
    updated_at: ISODate("2026-10-22T12:00:00Z")
  },
  {
    _id: ObjectId("670000000000000000000207"),
    user_id: ObjectId("670000000000000000000107"),
    current_location: "Astral Forest",
    current_levels: 7,
    current_health: 155,
    sol: 625,
    singularities: 1,
    prism: 3,
    created_at: ISODate("2026-10-20T12:00:00Z"),
    updated_at: ISODate("2026-10-22T12:00:00Z")
  },
  {
    _id: ObjectId("670000000000000000000208"),
    user_id: ObjectId("670000000000000000000108"),
    current_location: "Crystal Ruins",
    current_levels: 8,
    current_health: 165,
    sol: 700,
    singularities: 2,
    prism: 0,
    created_at: ISODate("2026-10-20T12:00:00Z"),
    updated_at: ISODate("2026-10-22T12:00:00Z")
  },
  {
    _id: ObjectId("670000000000000000000209"),
    user_id: ObjectId("670000000000000000000109"),
    current_location: "Lunar Base",
    current_levels: 9,
    current_health: 175,
    sol: 775,
    singularities: 3,
    prism: 1,
    created_at: ISODate("2026-10-20T12:00:00Z"),
    updated_at: ISODate("2026-10-22T12:00:00Z")
  },
  {
    _id: ObjectId("67000000000000000000020a"),
    user_id: ObjectId("67000000000000000000010a"),
    current_location: "Nebula Gate",
    current_levels: 10,
    current_health: 185,
    sol: 850,
    singularities: 4,
    prism: 2,
    created_at: ISODate("2026-10-20T12:00:00Z"),
    updated_at: ISODate("2026-10-22T12:00:00Z")
  }
])

// PERSONAGENS

// CHARACTERS
db.characters.insertMany([
  {
    _id: ObjectId("670000000000000000000301"),
    name: "Astra",
    description: "Exploradora das estrelas",
    base_health: 90,
    base_attack: 17,
    base_defense: 10,
    base_speed: 0.86,
    base_crit_chance: 0.06
  },
  {
    _id: ObjectId("670000000000000000000302"),
    name: "Orion",
    description: "Guerreiro espacial",
    base_health: 100,
    base_attack: 19,
    base_defense: 11,
    base_speed: 0.92,
    base_crit_chance: 0.07
  },
  {
    _id: ObjectId("670000000000000000000303"),
    name: "Lyra",
    description: "Guardiã das nebulosas",
    base_health: 110,
    base_attack: 21,
    base_defense: 12,
    base_speed: 0.98,
    base_crit_chance: 0.08
  },
  {
    _id: ObjectId("670000000000000000000304"),
    name: "Nova",
    description: "Defensora da aurora",
    base_health: 120,
    base_attack: 23,
    base_defense: 13,
    base_speed: 1.04,
    base_crit_chance: 0.09
  },
  {
    _id: ObjectId("670000000000000000000305"),
    name: "Vega",
    description: "Viajante intergaláctica",
    base_health: 130,
    base_attack: 25,
    base_defense: 14,
    base_speed: 1.1,
    base_crit_chance: 0.1
  },
  {
    _id: ObjectId("670000000000000000000306"),
    name: "Atlas",
    description: "Protetor celeste",
    base_health: 140,
    base_attack: 27,
    base_defense: 15,
    base_speed: 1.16,
    base_crit_chance: 0.11
  },
  {
    _id: ObjectId("670000000000000000000307"),
    name: "Selene",
    description: "Guardião lunar",
    base_health: 150,
    base_attack: 29,
    base_defense: 16,
    base_speed: 1.22,
    base_crit_chance: 0.12
  },
  {
    _id: ObjectId("670000000000000000000308"),
    name: "Sirius",
    description: "Guerreiro das constelações",
    base_health: 160,
    base_attack: 31,
    base_defense: 17,
    base_speed: 1.28,
    base_crit_chance: 0.13
  },
  {
    _id: ObjectId("670000000000000000000309"),
    name: "Eclipse",
    description: "Espadachim das sombras",
    base_health: 170,
    base_attack: 33,
    base_defense: 18,
    base_speed: 1.34,
    base_crit_chance: 0.14
  },
  {
    _id: ObjectId("67000000000000000000030a"),
    name: "Zenith",
    description: "Sentinela da luz",
    base_health: 180,
    base_attack: 35,
    base_defense: 19,
    base_speed: 1.4,
    base_crit_chance: 0.15
  }
])

// PLAYERCHARACTERS
db.playercharacters.insertMany([
  {
    _id: ObjectId("670000000000000000000401"),
    save_id: ObjectId("670000000000000000000201"),
    character_id: ObjectId("670000000000000000000301"),
    level: 1,
    current_health: 85,
    skill_1: 2,
    skill_2: 2,
    skill_3: 2
  },
  {
    _id: ObjectId("670000000000000000000402"),
    save_id: ObjectId("670000000000000000000202"),
    character_id: ObjectId("670000000000000000000302"),
    level: 2,
    current_health: 95,
    skill_1: 3,
    skill_2: 1,
    skill_3: 3
  },
  {
    _id: ObjectId("670000000000000000000403"),
    save_id: ObjectId("670000000000000000000203"),
    character_id: ObjectId("670000000000000000000303"),
    level: 3,
    current_health: 105,
    skill_1: 1,
    skill_2: 2,
    skill_3: 4
  },
  {
    _id: ObjectId("670000000000000000000404"),
    save_id: ObjectId("670000000000000000000204"),
    character_id: ObjectId("670000000000000000000304"),
    level: 4,
    current_health: 115,
    skill_1: 2,
    skill_2: 1,
    skill_3: 1
  },
  {
    _id: ObjectId("670000000000000000000405"),
    save_id: ObjectId("670000000000000000000205"),
    character_id: ObjectId("670000000000000000000305"),
    level: 5,
    current_health: 125,
    skill_1: 3,
    skill_2: 2,
    skill_3: 2
  },
  {
    _id: ObjectId("670000000000000000000406"),
    save_id: ObjectId("670000000000000000000206"),
    character_id: ObjectId("670000000000000000000306"),
    level: 6,
    current_health: 135,
    skill_1: 1,
    skill_2: 1,
    skill_3: 3
  },
  {
    _id: ObjectId("670000000000000000000407"),
    save_id: ObjectId("670000000000000000000207"),
    character_id: ObjectId("670000000000000000000307"),
    level: 7,
    current_health: 145,
    skill_1: 2,
    skill_2: 2,
    skill_3: 4
  },
  {
    _id: ObjectId("670000000000000000000408"),
    save_id: ObjectId("670000000000000000000208"),
    character_id: ObjectId("670000000000000000000308"),
    level: 8,
    current_health: 155,
    skill_1: 3,
    skill_2: 1,
    skill_3: 1
  },
  {
    _id: ObjectId("670000000000000000000409"),
    save_id: ObjectId("670000000000000000000209"),
    character_id: ObjectId("670000000000000000000309"),
    level: 9,
    current_health: 165,
    skill_1: 1,
    skill_2: 2,
    skill_3: 2
  },
  {
    _id: ObjectId("67000000000000000000040a"),
    save_id: ObjectId("67000000000000000000020a"),
    character_id: ObjectId("67000000000000000000030a"),
    level: 10,
    current_health: 175,
    skill_1: 2,
    skill_2: 1,
    skill_3: 3
  }
])


// LOJA E INVENTARIO

// ITEMS
db.items.insertMany([
  {
    _id: ObjectId("670000000000000000000501"),
    name: "Stellar Concentrate",
    description: "Material para evolução",
    category: "recommended",
    type: "material",
    price: 500,
    currency: "credits",
    buff: null
  },
  {
    _id: ObjectId("670000000000000000000502"),
    name: "Tungsten Alloy",
    description: "Material para equipamentos",
    category: "recommended",
    type: "material",
    price: 350,
    currency: "credits",
    buff: null
  },
  {
    _id: ObjectId("670000000000000000000503"),
    name: "Resonance Charge",
    description: "Carga de energia para habilidades",
    category: "recommended",
    type: "consumable",
    price: 120,
    currency: "credits",
    buff: {
      type: "stamina",
      value: 15,
      duration: 30
    }
  },
  {
    _id: ObjectId("670000000000000000000504"),
    name: "Poção de Energia",
    description: "Recupera energia",
    category: "potions",
    type: "consumable",
    price: 150,
    currency: "credits",
    buff: {
      type: "stamina",
      value: 25,
      duration: 60
    }
  },
  {
    _id: ObjectId("670000000000000000000505"),
    name: "Prism Core",
    description: "Artefato que amplia o ataque",
    category: "items",
    type: "artifact",
    price: 900,
    currency: "credits",
    buff: {
      type: "damage",
      value: 10,
      duration: 0
    }
  },
  {
    _id: ObjectId("670000000000000000000506"),
    name: "Escudo Nebular",
    description: "Artefato de defesa",
    category: "items",
    type: "artifact",
    price: 800,
    currency: "credits",
    buff: {
      type: "defense",
      value: 15,
      duration: 0
    }
  },
  {
    _id: ObjectId("670000000000000000000507"),
    name: "Orbe Solar",
    description: "Artefato de poder",
    category: "items",
    type: "artifact",
    price: 950,
    currency: "credits",
    buff: {
      type: "damage",
      value: 12,
      duration: 0
    }
  },
  {
    _id: ObjectId("670000000000000000000508"),
    name: "Cristal Lunar",
    description: "Artefato de agilidade",
    category: "items",
    type: "artifact",
    price: 700,
    currency: "credits",
    buff: {
      type: "speed",
      value: 8,
      duration: 0
    }
  },
  {
    _id: ObjectId("670000000000000000000509"),
    name: "Prisma Estelar",
    description: "Artefato de precisão",
    category: "items",
    type: "artifact",
    price: 1000,
    currency: "credits",
    buff: {
      type: "critical",
      value: 5,
      duration: 0
    }
  },
  {
    _id: ObjectId("67000000000000000000050a"),
    name: "Anel Cósmico",
    description: "Artefato de vitalidade",
    category: "items",
    type: "artifact",
    price: 650,
    currency: "credits",
    buff: {
      type: "health",
      value: 20,
      duration: 0
    }
  }
])

// INVENTORY
db.inventory.insertMany([
  {
    _id: ObjectId("670000000000000000000601"),
    save_id: ObjectId("670000000000000000000201"),
    item_id: ObjectId("670000000000000000000505"),
    quantity: 1
  },
  {
    _id: ObjectId("670000000000000000000602"),
    save_id: ObjectId("670000000000000000000202"),
    item_id: ObjectId("670000000000000000000506"),
    quantity: 1
  },
  {
    _id: ObjectId("670000000000000000000603"),
    save_id: ObjectId("670000000000000000000203"),
    item_id: ObjectId("670000000000000000000507"),
    quantity: 1
  },
  {
    _id: ObjectId("670000000000000000000604"),
    save_id: ObjectId("670000000000000000000204"),
    item_id: ObjectId("670000000000000000000508"),
    quantity: 1
  },
  {
    _id: ObjectId("670000000000000000000605"),
    save_id: ObjectId("670000000000000000000205"),
    item_id: ObjectId("670000000000000000000509"),
    quantity: 1
  },
  {
    _id: ObjectId("670000000000000000000606"),
    save_id: ObjectId("670000000000000000000206"),
    item_id: ObjectId("67000000000000000000050a"),
    quantity: 1
  },
  {
    _id: ObjectId("670000000000000000000607"),
    save_id: ObjectId("670000000000000000000207"),
    item_id: ObjectId("670000000000000000000505"),
    quantity: 1
  },
  {
    _id: ObjectId("670000000000000000000608"),
    save_id: ObjectId("670000000000000000000208"),
    item_id: ObjectId("670000000000000000000506"),
    quantity: 1
  },
  {
    _id: ObjectId("670000000000000000000609"),
    save_id: ObjectId("670000000000000000000209"),
    item_id: ObjectId("670000000000000000000507"),
    quantity: 1
  },
  {
    _id: ObjectId("67000000000000000000060a"),
    save_id: ObjectId("67000000000000000000020a"),
    item_id: ObjectId("670000000000000000000508"),
    quantity: 1
  }
])

// ARTIFACTS
db.artifacts.insertMany([
  {
    _id: ObjectId("670000000000000000000701"),
    save_id: ObjectId("670000000000000000000201"),
    item_id: ObjectId("670000000000000000000505"),
    upgrade_level: 2,
    bonus_type: "damage",
    bonus_value: 0.04
  },
  {
    _id: ObjectId("670000000000000000000702"),
    save_id: ObjectId("670000000000000000000202"),
    item_id: ObjectId("670000000000000000000506"),
    upgrade_level: 3,
    bonus_type: "defense",
    bonus_value: 0.05
  },
  {
    _id: ObjectId("670000000000000000000703"),
    save_id: ObjectId("670000000000000000000203"),
    item_id: ObjectId("670000000000000000000507"),
    upgrade_level: 4,
    bonus_type: "damage",
    bonus_value: 0.06
  },
  {
    _id: ObjectId("670000000000000000000704"),
    save_id: ObjectId("670000000000000000000204"),
    item_id: ObjectId("670000000000000000000508"),
    upgrade_level: 1,
    bonus_type: "speed",
    bonus_value: 0.03
  },
  {
    _id: ObjectId("670000000000000000000705"),
    save_id: ObjectId("670000000000000000000205"),
    item_id: ObjectId("670000000000000000000509"),
    upgrade_level: 2,
    bonus_type: "critical",
    bonus_value: 0.04
  },
  {
    _id: ObjectId("670000000000000000000706"),
    save_id: ObjectId("670000000000000000000206"),
    item_id: ObjectId("67000000000000000000050a"),
    upgrade_level: 3,
    bonus_type: "health",
    bonus_value: 0.05
  },
  {
    _id: ObjectId("670000000000000000000707"),
    save_id: ObjectId("670000000000000000000207"),
    item_id: ObjectId("670000000000000000000505"),
    upgrade_level: 4,
    bonus_type: "damage",
    bonus_value: 0.06
  },
  {
    _id: ObjectId("670000000000000000000708"),
    save_id: ObjectId("670000000000000000000208"),
    item_id: ObjectId("670000000000000000000506"),
    upgrade_level: 1,
    bonus_type: "defense",
    bonus_value: 0.03
  },
  {
    _id: ObjectId("670000000000000000000709"),
    save_id: ObjectId("670000000000000000000209"),
    item_id: ObjectId("670000000000000000000507"),
    upgrade_level: 2,
    bonus_type: "damage",
    bonus_value: 0.04
  },
  {
    _id: ObjectId("67000000000000000000070a"),
    save_id: ObjectId("67000000000000000000020a"),
    item_id: ObjectId("670000000000000000000508"),
    upgrade_level: 3,
    bonus_type: "speed",
    bonus_value: 0.05
  }
])

// PURCHASES
db.purchases.insertMany([
  {
    _id: ObjectId("670000000000000000000801"),
    save_id: ObjectId("670000000000000000000201"),
    item_id: ObjectId("670000000000000000000505"),
    quantity: 1,
    unit_price: 900,
    total_price: 900,
    currency: "credits",
    purchased_at: ISODate("2026-10-11T14:00:00Z")
  },
  {
    _id: ObjectId("670000000000000000000802"),
    save_id: ObjectId("670000000000000000000202"),
    item_id: ObjectId("670000000000000000000506"),
    quantity: 1,
    unit_price: 800,
    total_price: 800,
    currency: "credits",
    purchased_at: ISODate("2026-10-12T14:00:00Z")
  },
  {
    _id: ObjectId("670000000000000000000803"),
    save_id: ObjectId("670000000000000000000203"),
    item_id: ObjectId("670000000000000000000507"),
    quantity: 1,
    unit_price: 950,
    total_price: 950,
    currency: "credits",
    purchased_at: ISODate("2026-10-13T14:00:00Z")
  },
  {
    _id: ObjectId("670000000000000000000804"),
    save_id: ObjectId("670000000000000000000204"),
    item_id: ObjectId("670000000000000000000508"),
    quantity: 1,
    unit_price: 700,
    total_price: 700,
    currency: "credits",
    purchased_at: ISODate("2026-10-14T14:00:00Z")
  },
  {
    _id: ObjectId("670000000000000000000805"),
    save_id: ObjectId("670000000000000000000205"),
    item_id: ObjectId("670000000000000000000509"),
    quantity: 1,
    unit_price: 1000,
    total_price: 1000,
    currency: "credits",
    purchased_at: ISODate("2026-10-15T14:00:00Z")
  },
  {
    _id: ObjectId("670000000000000000000806"),
    save_id: ObjectId("670000000000000000000206"),
    item_id: ObjectId("67000000000000000000050a"),
    quantity: 1,
    unit_price: 650,
    total_price: 650,
    currency: "credits",
    purchased_at: ISODate("2026-10-16T14:00:00Z")
  },
  {
    _id: ObjectId("670000000000000000000807"),
    save_id: ObjectId("670000000000000000000207"),
    item_id: ObjectId("670000000000000000000505"),
    quantity: 1,
    unit_price: 900,
    total_price: 900,
    currency: "credits",
    purchased_at: ISODate("2026-10-17T14:00:00Z")
  },
  {
    _id: ObjectId("670000000000000000000808"),
    save_id: ObjectId("670000000000000000000208"),
    item_id: ObjectId("670000000000000000000506"),
    quantity: 1,
    unit_price: 800,
    total_price: 800,
    currency: "credits",
    purchased_at: ISODate("2026-10-18T14:00:00Z")
  },
  {
    _id: ObjectId("670000000000000000000809"),
    save_id: ObjectId("670000000000000000000209"),
    item_id: ObjectId("670000000000000000000507"),
    quantity: 1,
    unit_price: 950,
    total_price: 950,
    currency: "credits",
    purchased_at: ISODate("2026-10-19T14:00:00Z")
  },
  {
    _id: ObjectId("67000000000000000000080a"),
    save_id: ObjectId("67000000000000000000020a"),
    item_id: ObjectId("670000000000000000000508"),
    quantity: 1,
    unit_price: 700,
    total_price: 700,
    currency: "credits",
    purchased_at: ISODate("2026-10-20T14:00:00Z")
  }
])


// MISSOES

// QUESTS
db.quests.insertMany([
  {
    _id: ObjectId("670000000000000000000901"),
    name: "Drink Water",
    description: "Beber água durante o dia",
    type: "daily",
    difficulty: "easy",
    reward_xp: 20,
    reward_coins: 5,
    icon: "water"
  },
  {
    _id: ObjectId("670000000000000000000902"),
    name: "Study",
    description: "Estudar por 30 minutos",
    type: "daily",
    difficulty: "medium",
    reward_xp: 100,
    reward_coins: 20,
    icon: "book"
  },
  {
    _id: ObjectId("670000000000000000000903"),
    name: "Exercise",
    description: "Praticar atividade física",
    type: "daily",
    difficulty: "medium",
    reward_xp: 50,
    reward_coins: 10,
    icon: "activity"
  },
  {
    _id: ObjectId("670000000000000000000904"),
    name: "Sleep Early",
    description: "Dormir mais cedo",
    type: "daily",
    difficulty: "easy",
    reward_xp: 75,
    reward_coins: 15,
    icon: "moon"
  },
  {
    _id: ObjectId("670000000000000000000905"),
    name: "Read a Book",
    description: "Ler por 20 minutos",
    type: "daily",
    difficulty: "easy",
    reward_xp: 25,
    reward_coins: 5,
    icon: "book"
  },
  {
    _id: ObjectId("670000000000000000000906"),
    name: "Practice Coding",
    description: "Praticar programação",
    type: "daily",
    difficulty: "medium",
    reward_xp: 60,
    reward_coins: 15,
    icon: "code"
  },
  {
    _id: ObjectId("670000000000000000000907"),
    name: "Complete a Project",
    description: "Concluir um projeto",
    type: "normal",
    difficulty: "hard",
    reward_xp: 150,
    reward_coins: 40,
    icon: "check"
  },
  {
    _id: ObjectId("670000000000000000000908"),
    name: "Walk Outside",
    description: "Fazer uma caminhada",
    type: "daily",
    difficulty: "easy",
    reward_xp: 30,
    reward_coins: 5,
    icon: "footprints"
  },
  {
    _id: ObjectId("670000000000000000000909"),
    name: "Organize Tasks",
    description: "Organizar as tarefas do dia",
    type: "normal",
    difficulty: "medium",
    reward_xp: 40,
    reward_coins: 10,
    icon: "list"
  },
  {
    _id: ObjectId("67000000000000000000090a"),
    name: "Meditate",
    description: "Praticar atenção plena",
    type: "focus",
    difficulty: "easy",
    reward_xp: 35,
    reward_coins: 8,
    icon: "moon"
  }
])

// PLAYERQUESTS
db.playerquests.insertMany([
  {
    _id: ObjectId("670000000000000000000a01"),
    save_id: ObjectId("670000000000000000000201"),
    quest_id: ObjectId("670000000000000000000901"),
    status: "pending",
    assigned_at: ISODate("2026-10-20T09:00:00Z"),
    completed_at: null
  },
  {
    _id: ObjectId("670000000000000000000a02"),
    save_id: ObjectId("670000000000000000000202"),
    quest_id: ObjectId("670000000000000000000902"),
    status: "completed",
    assigned_at: ISODate("2026-10-20T09:00:00Z"),
    completed_at: ISODate("2026-10-20T10:00:00Z")
  },
  {
    _id: ObjectId("670000000000000000000a03"),
    save_id: ObjectId("670000000000000000000203"),
    quest_id: ObjectId("670000000000000000000903"),
    status: "pending",
    assigned_at: ISODate("2026-10-20T09:00:00Z"),
    completed_at: null
  },
  {
    _id: ObjectId("670000000000000000000a04"),
    save_id: ObjectId("670000000000000000000204"),
    quest_id: ObjectId("670000000000000000000904"),
    status: "completed",
    assigned_at: ISODate("2026-10-20T09:00:00Z"),
    completed_at: ISODate("2026-10-20T10:00:00Z")
  },
  {
    _id: ObjectId("670000000000000000000a05"),
    save_id: ObjectId("670000000000000000000205"),
    quest_id: ObjectId("670000000000000000000905"),
    status: "pending",
    assigned_at: ISODate("2026-10-20T09:00:00Z"),
    completed_at: null
  },
  {
    _id: ObjectId("670000000000000000000a06"),
    save_id: ObjectId("670000000000000000000206"),
    quest_id: ObjectId("670000000000000000000906"),
    status: "completed",
    assigned_at: ISODate("2026-10-20T09:00:00Z"),
    completed_at: ISODate("2026-10-20T10:00:00Z")
  },
  {
    _id: ObjectId("670000000000000000000a07"),
    save_id: ObjectId("670000000000000000000207"),
    quest_id: ObjectId("670000000000000000000907"),
    status: "pending",
    assigned_at: ISODate("2026-10-20T09:00:00Z"),
    completed_at: null
  },
  {
    _id: ObjectId("670000000000000000000a08"),
    save_id: ObjectId("670000000000000000000208"),
    quest_id: ObjectId("670000000000000000000908"),
    status: "completed",
    assigned_at: ISODate("2026-10-20T09:00:00Z"),
    completed_at: ISODate("2026-10-20T10:00:00Z")
  },
  {
    _id: ObjectId("670000000000000000000a09"),
    save_id: ObjectId("670000000000000000000209"),
    quest_id: ObjectId("670000000000000000000909"),
    status: "pending",
    assigned_at: ISODate("2026-10-20T09:00:00Z"),
    completed_at: null
  },
  {
    _id: ObjectId("670000000000000000000a0a"),
    save_id: ObjectId("67000000000000000000020a"),
    quest_id: ObjectId("67000000000000000000090a"),
    status: "completed",
    assigned_at: ISODate("2026-10-20T09:00:00Z"),
    completed_at: ISODate("2026-10-20T10:00:00Z")
  }
])

// VERIFICACAO
db.users.countDocuments({}) / db.users.find({}, { password: 0 }).limit(2)
db.saves.countDocuments({})
db.characters.countDocuments({})
db.playercharacters.countDocuments({})
db.items.countDocuments({})
db.inventory.countDocuments({})
db.artifacts.countDocuments({})
db.purchases.countDocuments({})
db.quests.countDocuments({})
db.playerquests.countDocuments({})
