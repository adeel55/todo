const { User , Task,  Sequelize,Sequelize:{ Op } } = require('../../../models')




const user1 = {
    fullName: "Muhammad Adeel",
    email: "Adeel5@gmail.com",
    emailVerifiedAt: new Date(),
    password: "12345", // "await bcrypt.hash("12345",8),
    token: "asdjchsiudcnosidcismhdodhcisduhciosdhc",
}
const user2 = {
    fullName: "Muhammad Adeel",
    email: "Adeel6@gmail.com",
    emailVerifiedAt: new Date(),
    password: "12345", // "await bcrypt.hash("12345",8),
    token: "asdjchsiudcnosidcismhdodhcisduhciosdhc",
}

var task = {}

beforFun = async () => {

    await User.destroy({ where:{
        fullName: {
            [Op.ne]: "null"
        }
    }})
    // await User.create(user1)
}

module.exports = {
    user1,
    user2,
    task,
    beforFun
}