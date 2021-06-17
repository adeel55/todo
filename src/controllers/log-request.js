const fs = require("fs")
const winston = require("winston")
const DailyRotateFile = require('winston-daily-rotate-file');

make = (req,res,next) => {

    let ip = req.ip == "::1" ? "127.0.0.1": req.ip

    let logData = "Url: " + req.originalUrl + "\n"
    logData += "IP: " + ip + "\n"
    logData += "Response Status Code: " + res.statusCode + "\n"
    logData += "Request Body: " + JSON.stringify(req.body) + "\n"
    logData += "Response Body: " + res.outputData + "\n"
    logData += "At: " + new Date() + "\n\n\n"

    let today = new Date().toISOString().split('T')[0]
    let filename =  './src/logs/'+today+'.log'
    
    // fs.appendFile(filename, logData, function (err) {
    //     if (err) throw err;
    // });


    const logger = winston.createLogger({
        level: 'info',
        format: winston.format.simple(),
        transports: [
        //   new winston.transports.Console(),
          new DailyRotateFile({
            filename: './src/logs/%DATE%.log',
            datePattern: 'YYYY-MM-DD-HH',
            zippedArchive: true,
            maxSize: '10m',
            maxFiles: '14d'
          })
        ]
    });

    logger.info(logData);
    
    next()
}


module.exports = {
    make
}