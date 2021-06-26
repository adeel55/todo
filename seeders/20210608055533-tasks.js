'use strict';
const random = require('random')
const data = require('../src/seeding-data/data')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    for(let user of [1,2]){

      for(let row of data){
  
        let bool = random.int(0,1)
        let startMonth = random.int(1,8)
        let dueMonth = Number(startMonth) + random.int(1,2)
        let completeMonth = Number(startMonth) + random.int(1,2)
  
        await queryInterface.bulkInsert('Tasks', [{
          userId: user,
          title: row.title,
          description: row.description,
          startDate: new Date("2021-"+ startMonth +"-"+random.int(1,28)),
          dueDate: new Date("2021-"+ dueMonth +"-"+random.int(1,28)),
          status:  bool ? true: false,
          completedAt: bool ? new Date("2021-"+ completeMonth +"-"+random.int(14,26)): null,
          createdAt: new Date(),
          updatedAt: new Date()
        }], {});
  
      }
    }
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};
