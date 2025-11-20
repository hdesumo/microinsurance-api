'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Claim', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.literal('gen_random_uuid()')
      },

      type: { type: Sequelize.STRING, allowNull: false },
      description: { type: Sequelize.TEXT },
      status: {
        type: Sequelize.ENUM("submitted", "review", "approved", "rejected", "paid"),
        defaultValue: "submitted"
      },
      documents: { type: Sequelize.JSONB },

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
    await queryInterface.dropTable('Claim');
  }
};
