'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transaction', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.literal('gen_random_uuid()')
      },

      provider_reference: { type: Sequelize.STRING, allowNull: false },
      amount: { type: Sequelize.DECIMAL(12,2), allowNull: false },
      channel: { 
        type: Sequelize.ENUM("mtn", "orange", "wave", "wallet", "other"), 
        allowNull: false 
      },
      status: { 
        type: Sequelize.ENUM("success", "failed", "pending"), 
        defaultValue: "success" 
      },

      policy_id: {
        type: Sequelize.UUID,
        references: { model: 'Policy', key: 'id' },
        onDelete: 'CASCADE'
      },

      created_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') },
      updated_at: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('NOW') }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Transaction');
  }
};
