const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Policy = require("./Policy");

const Transaction = sequelize.define("Transaction", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  provider_reference: { type: DataTypes.STRING, allowNull: false },
  amount: { type: DataTypes.DECIMAL(12,2), allowNull: false },
  channel: {
    type: DataTypes.ENUM("mtn", "orange", "wave", "wallet", "other"),
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM("success", "failed", "pending"),
    defaultValue: "success"
  }
});

Policy.hasMany(Transaction, { foreignKey: "policy_id" });
Transaction.belongsTo(Policy, { foreignKey: "policy_id" });

module.exports = Transaction;
