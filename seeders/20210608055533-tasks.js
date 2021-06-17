'use strict';
const random = require('random')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert('Tasks', [{
      userId: 1,
      title: 'Fix gerage setup',
      description: 'Need to update the gass kit and air pump.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Deliver Books',
      description: 'Need to deliver all books to library which are borrowed last month.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userId: 1,
      title: 'Buy new dress',
      description: 'Need to purchase new dress for monday night party.',
      startDate: new Date("2021-06-"+random.int(1,10)),
      dueDate: new Date("2021-06-"+random.int(11,17)),
      status: random.int(0,1) ? true: false,
      completedAt: new Date("2021-07-"+random.int(11,19)),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
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
