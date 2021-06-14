'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User , Task, Attachment}) {
      // define association here
      Task.belongsTo(User)
      Task.hasMany(Attachment)
    }
  };
  Task.init({
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    startDate: DataTypes.DATE,
    dueDate: DataTypes.DATE,
    completedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};