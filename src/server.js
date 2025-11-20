const app = require("./app");
const sequelize = require("./config/db");

const PORT = process.env.PORT || 8080;

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("📡 Base de données connectée.");

    app.listen(PORT, () => {
      console.log(`🚀 Serveur en cours d’écoute sur le port ${PORT}`);
    });

  } catch (err) {
    console.error("❌ Impossible de démarrer le serveur :", err);
  }
}

startServer();
