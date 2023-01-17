const mongoose = require('mongoose');
const validate = require('validator');

const employeeschema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validate.isEmail(value)){
                
            }
        }
    }

});

mongoose.model("EmployeeSchema", employeeschema);
