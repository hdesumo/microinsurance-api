const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Product = require("./Product");
const Partner = require("./Partner");

const Policy = sequelize.define("Policy", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  user_phone: { type: DataTypes.STRING, allowNull: false },
  user_name: { type: DataTypes.STRING, allowNull: true },
  status: {
    type: DataTypes.ENUM("active", "expired", "cancelled"),
    defaultValue: "active"
  },
  effective_date: { type: DataTypes.DATE, allowNull: false },
  expiration_date: { type: DataTypes.DATE, allowNull: false },
  premium_paid: { type: DataTypes.DECIMAL(12,2), allowNull: false }
});

// Associations
Product.hasMany(Policy, { foreignKey: "product_id" });
Policy.belongsTo(Product, { foreignKey: "product_id" });

Partner.hasMany(Policy, { foreignKey: "partner_id" });
Policy.belongsTo(Partner, { foreignKey: "partner_id" });

module.exports = Policy;
