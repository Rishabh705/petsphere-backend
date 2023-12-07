//list that cors won't prevent from accessing our server
const whitelist = ['https://www.yoursite.com','http://localhost:3000','http://localhost:3500']
const corsOptions = {
    origin:(origin, callback) =>{
        //if domain is in whitelist then let it pass
        if(whitelist.indexOf(origin) != -1 || !origin ){
            callback(null,true)
        }
        else{
            callback(new Error("Not allowed by cors"))
        }
    },
    optionsSuccessStatus:200
}

module.exports = corsOptions