'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attachment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Attachment , Task }) {
      // define association here
      Attachment.belongsTo(Task)
    }
  };
  Attachment.init({
    taskId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: "task id is required" },
      },
    },
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Attachment',
  });
  return Attachment;
};