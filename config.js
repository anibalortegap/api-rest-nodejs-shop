module.exports = {
    port: process.env.PORT || 3000,
    db: process.env.MONGODB || 'mongodb://localhost:27017/shop',
    dbOpts: {
        useNewUrlParser:true,
        poolSize: 10,
        connectTimeoutMS: 5000	
    }
}