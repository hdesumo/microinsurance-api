const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true },
  premium: { type: DataTypes.DECIMAL(12,2), allowNull: false },
  frequency: { 
    type: DataTypes.ENUM("daily", "weekly", "monthly"), 
    allowNull: false 
  },
  coverage_amount: { type: DataTypes.DECIMAL(12,2), allowNull: false },
  is_active: { type: DataTypes.BOOLEAN, defaultValue: true }
});

module.exports = Product;
