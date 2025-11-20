const sequelize = require("./db");

(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ PostgreSQL connecté avec succès !");
  } catch (err) {
    console.error("❌ Erreur de connexion PostgreSQL :", err);
  } finally {
    process.exit();
  }
})();
