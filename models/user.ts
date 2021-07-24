'use strict';
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const random = require('random')
// const redis = require('redis')
// const client = redis.createClient({
//   host: process.env.REDIS_HOST,
//   port: process.env.REDIS_PORT,
//   password: process.env.REDIS_PASS
// })


import {
  Model
} from 'sequelize'


interface UserAttributes {
  id: number;
  fullName: string;
  email: string;
  emailVerifiedAt: string;
  emailVerificationCode: string;
  token: string;
  password: string;
}

module.exports = (sequelize:any, DataTypes:any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    id!: number;
    fullName!: string;
    email!: string;
    emailVerifiedAt!: string;
    emailVerificationCode!: string;
    token!: string;
    password!: string;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models: any) {
      models.User.hasMany(models.Task)
    }

    clearCacheReports = () => {
      // for(let i of [1,2,3,4,5]){

      //   client.exists(this.id+':report' + i, (bool:boolean)=>{
      //     if(bool) client.del(this.id+':report' + i)
      //   })
      // }
    }

    generateAuthToken = async () => {
      
      const token = jwt.sign({ email: this.email }, process.env.JWT_SECRET, { expiresIn: '1h' })
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
    // generatePasswordResetToken = async () => {
    //   const token = jwt.sign({ email: this.email }, process.env.JWT_SECRET)
    //   this.passwordResetToken = token
    //   await this.save()
    //   return token
    // }
    generateAndSaveNewPassword = async (password:string) => {
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