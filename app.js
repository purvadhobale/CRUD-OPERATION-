const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyparser = require('body-parser');
const port = process.env.PORT || 3080;
require("dotenv").config({path : "./password.env"});
require('./src/db/conn');
const exphbs = require("express-handlebars");
const path = require('path');
const controller = require('./src/controllers/employeeController');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const Handlebars = require('handlebars');
// const multer = require('multer');
// const Storage = multer.diskStorage({
//     destination: 'uploads',
//     filename: (req,file,cb)=>{
//         cb(null,Date.now()+file.originalname);
//     }
// });
// const upload= multer({
//     storage: Storage
// });


app.use(bodyparser.urlencoded({
    extended: true
}));


app.use(bodyparser.json());
//path
app.set('views', path.join(__dirname, '/views/'));
app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: "index", layoutsDir: __dirname + '/views/layouts/', handlebars: allowInsecurePrototypeAccess(Handlebars)}));
app.set('view engine', 'hbs');

app.use('/employee',controller);

app.listen(port,()=>{
    console.log(`listening to port number ${port}`);
});