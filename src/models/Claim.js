const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Policy = require("./Policy");

const Claim = sequelize.define("Claim", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  type: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true },
  status: {
    type: DataTypes.ENUM("submitted", "review", "approved", "rejected", "paid"),
    defaultValue: "submitted"
  },
  documents: { type: DataTypes.JSONB, allowNull: true }
});

Policy.hasMany(Claim, { foreignKey: "policy_id" });
Claim.belongsTo(Policy, { foreignKey: "policy_id" });

module.exports = Claim;
