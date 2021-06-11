'use strict';
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const random = require('random')



const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Task }) {
      User.hasMany(Task)
    }

    generateAuthToken = async () => {
      
      const token = jwt.sign({ email: this.email }, process.env.JWT_SECRET)
      this.token = token
      await this.save()
      return token

    }
    generateEmailVerificationCode = async () => {
      var code = random.int(111111, 999999)
      this.emailVerificationCode = code
      await this.save()
      return code
    }
    generatePasswordResetToken = async () => {
      const token = jwt.sign({ email: this.email }, process.env.JWT_SECRET)
      this.passwordResetToken = token
      await this.save()
      return token
    }
    generateAndSaveNewPassword = async (password) => {
      this.password = await bcrypt.hash(password,8)
      await this.save()
    }
    signOut = async () => {
      this.token = ""
      await this.save()
    }
  };
  User.init({
    id: {
      type:  DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fullName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    emailVerifiedAt: DataTypes.DATE,
    emailVerificationCode: DataTypes.STRING,
    token: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User'
  });
  return User;
};