//criacao do banco
use kerrsyzygy_db

//criacao das colecoes
// USUARIOS E SALVAMENTOS
 db.createCollection("users");
 db.createCollection("saves");

 // PERSONAGENS
 db.createCollection("characters");
 db.createCollection("playercharacters");

 // LOJA E INVENTARIO
 db.createCollection("items");
 db.createCollection("inventory");
 db.createCollection("artifacts");
 db.createCollection("purchases");

 // MISSOES
 db.createCollection("quests");
 db.createCollection("playerquests");

 // VERIFICACAO
show collections