'use strict';
const bcrypt = require('bcryptjs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example: 
     */
    await queryInterface.bulkInsert('Users', [{
      fullName: 'Muhammad Adeel',
      email: 'Adeel@gmail.com',
      emailVerifiedAt: new Date(),
      password: await bcrypt.hash("12345",8),
      createdAt: new Date(),
      updatedAt:  new Date()
    },{
      fullName: 'Ahmad',
      email: 'Ahmad@gmail.com',
      emailVerifiedAt: new Date(),
      password: await bcrypt.hash("12345",8),
      createdAt: new Date(),
      updatedAt:  new Date()
    },{
      fullName: 'Ali',
      email: 'Ali@gmail.com',
      emailVerifiedAt: new Date(),
      password: await bcrypt.hash("12345",8),
      createdAt: new Date(),
      updatedAt:  new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
