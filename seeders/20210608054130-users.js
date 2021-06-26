'use strict';
const bcrypt = require('bcryptjs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example: 
     */
    for(let user of [1,2]){

      await queryInterface.bulkInsert('Users', [{
        fullName: 'Muhammad Adeel',
        email: 'Adeel'+user+'@gmail.com',
        emailVerifiedAt: new Date(),
        password: await bcrypt.hash("12345",8),
        createdAt: new Date(),
        updatedAt:  new Date()
      }], {});
    }
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
