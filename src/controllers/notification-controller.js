const nodemailer = require("nodemailer")
const hbs = require("nodemailer-express-handlebars")
const path = require("path")

email = async (to,subject,template,context) => {

     // initialize transport object
     var transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_HOST,
        port: process.env.MAILTRAP_PORT,
        auth: {
          user: process.env.MAILTRAP_USER,
          pass: process.env.MAILTRAP_PASSWORD
        }
    });

    transporter.use('compile', hbs({
        // viewEngine: 'express-handlebars',
        viewEngine: {
            extName: ".hbs",
            partialsDir: path.resolve(__dirname, "../views/template/email"),
            defaultLayout: false,
          },
        viewPath: path.resolve(__dirname, "../views/template/email"),
        extName: ".hbs",
    }))


    const mailOptions = {
        from: '"Todo list" <todo@todo.com>', // sender address
        to,
        subject,
        template,
        context
    }
    
    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);
    return info

}

module.exports = {
    email
}