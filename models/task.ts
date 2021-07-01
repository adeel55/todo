'use strict';
import {
  Model
} from "sequelize"

interface TaskAttributes {
  title: string;
  userId: string;
  description: string;
  status: boolean;
  startDate: string;
  dueDate: string;
  completedAt: string;
}

module.exports = (sequelize:any, DataTypes:any) => {
  class Task extends Model<TaskAttributes> implements TaskAttributes {


    title!: string;
    userId!: string;
    description!: string;
    status!: boolean;
    startDate!: string;
    dueDate!: string;
    completedAt!: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models:any) {
      // define association here
      models.Task.belongsTo(models.User)
      models.Task.hasMany(models.Attachment)
    }
  };
  Task.init({
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
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