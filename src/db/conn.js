const mongoose = require('mongoose');
require("dotenv").config({path : "./password.env"});
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology : true,
    // useCreateIndex : true
}).then(()=>{
    console.log("DataBase Connected Successfully!!");
}).catch((e)=>{
    console.log(e);
    console.log(`no connection `)
})

require('../models/schema');
require('../models/image');