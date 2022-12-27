'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn(
      'Bookings',                 //In which column want to enter
      'noOfSeats',                //Column names
      //Properties
      {
        type:Sequelize.INTEGER,
        allowNull:false,
        defaultValue: 1
      }
    );
    await queryInterface.addColumn(
      'Bookings',                 //In which column want to enter
      'totalCost',                //Column names
      //Properties
      {
        type:Sequelize.INTEGER,
        allowNull:false,
        defaultValue: 0
      }
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Bookings', 'noOfSeats');
    await queryInterface.removeColumn('Bookings', 'totalCost');
  }
};
