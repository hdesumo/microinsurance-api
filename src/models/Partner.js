const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Partner = sequelize.define("Partner", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: { type: DataTypes.STRING, allowNull: false },
  api_key: { type: DataTypes.STRING, allowNull: false },
  status: {
    type: DataTypes.ENUM("active", "disabled"),
    defaultValue: "active"
  }
});

module.exports = Partner;
