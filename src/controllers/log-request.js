const fs = require("fs")

make = (req,res,next) => {

    let ip = req.ip == "::1" ? "localhost": req.ip

    let logData = "Url: " + req.originalUrl + "\n"
    logData += "IP: " + ip + "\n"
    logData += "Response Status Code: " + res.statusCode + "\n"
    logData += "Request Body: " + req.body + "\n"
    logData += "Response Body: " + res.outputData + "\n"
    logData += "At: " + new Date() + "\n\n\n"

    let today = new Date().toISOString().split('T')[0]
    let filename =  './src/logs/'+today+'.txt'
    
    fs.appendFile(filename, logData, function (err) {
        if (err) throw err;
    });
    
    next()
}


module.exports = {
    make
}