const { User , Task,  Sequelize,Sequelize:{ Op } } = require('../../../models')




export const user1 = {
    fullName: "Muhammad Adeel",
    email: "Adeel5@gmail.com",
    emailVerifiedAt: new Date(),
    password: "12345", // "await bcrypt.hash("12345",8),
    token: "asdjchsiudcnosidcismhdodhcisduhciosdhc",
}
export const user2 = {
    fullName: "Muhammad Adeel",
    email: "Adeel6@gmail.com",
    emailVerifiedAt: new Date(),
    password: "12345", // "await bcrypt.hash("12345",8),
    token: "asdjchsiudcnosidcismhdodhcisduhciosdhc",
}

export var task = {}

export async function beforFun() {

    await User.destroy({ where:{
        fullName: {
            [Op.ne]: "null"
        }
    }})
    // await User.create(user1)
}