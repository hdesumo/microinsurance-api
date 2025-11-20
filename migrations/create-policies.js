'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Policy', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.literal('gen_random_uuid()')
      },

      user_phone: { type: Sequelize.STRING, allowNull: false },
      user_name: { type: Sequelize.STRING },

      status: {
        type: Sequelize.ENUM("active", "expired", "cancelled"),
        defaultValue: "active"
      },

      effective_date: { type: Sequelize.DATE, allowNull: false },
      expiration_date: { type: Sequelize.DATE, allowNull: false },
      premium_paid: { type: Sequelize.DECIMAL(12,2), allowNull: false },

      // FK product
      product_id: {
        type: Sequelize.UUID,
        references: { model: 'Product', key: 'id' },
        onDelete: 'CASCADE'
      },

      // FK partner
      partner_id: {
        type: Sequelize.UUID,
        references: { model: 'Partner', key: 'id' },
        onDelete: 'SET NULL'
      },

      created_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
      updated_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Policy');
  }
};
