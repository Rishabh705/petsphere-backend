const { format } = require('date-fns')
const { v4: uuid } = require('uuid')

const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

const logEvents = async (message, logFileName) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`

    //try to create a folder and logfile for adding logs
    try {

        //if 'logs' folder doesn't exist then create it 
        if (!fs.existsSync(path.join(__dirname,'..', 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname,'..', 'logs'))
        }

        //add logs to file named 'logFileName'
        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logFileName), logItem)

    } catch (err) {
        console.log(err)
    }
}

//call this function to log events
const logger = (req,res,next)=>{
    logEvents(`${req.method}\t\t${req.headers.origin}\t\t${req.url}`,'reqLog.txt')
    next()
}

module.exports = {logger}
