'use strict';
import {
  Model
} from "sequelize"


interface AttachmentAttributes {
  taskId: number
  name: string
}


module.exports = (sequelize: any, DataTypes: any) => {
  class Attachment extends Model<AttachmentAttributes> implements AttachmentAttributes {

    taskId!: number;
    name!: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      // define association here
      models.Attachment.belongsTo(models.Task)
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