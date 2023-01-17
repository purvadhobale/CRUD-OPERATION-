const express= require('express');
var router = express.Router();
const mongoose = require('mongoose');
const EmployeeSchema = mongoose.model('EmployeeSchema');
const Image = mongoose.model('Image');
const path = require('path');

router.get('/',(req,res)=>{
    res.render("employee/addoredit",{
        viewtitle: "Insert Employee"
    });
});

router.post('/',(req,res)=>{
    if(req.body._id == ''){
        const employee = new EmployeeSchema();
        employee.fullname = req.body.fullname;
        employee.age = req.body.age;
        employee.email = req.body.email;
        employee.save((err, doc)=>{
            if(!err){
                res.redirect('employee/list');
            }
            else{
                
                console.log(err);
            }
        });
    }
    else{
        EmployeeSchema.findOneAndUpdate({_id: req.body._id}, req.body, {new : true}, (err,doc)=>{
            if(!err){
                res.render('employee/addoredit');
            }
            else{
                console.log(err);
            }
        })
    }
}); 


router.get('/list',(req,res)=>{
    EmployeeSchema.find((err,docs)=>{
        if(!err){
            res.render("employee/list",{
                list: docs
            });
        }
        else{
            console.log("Error");
        }
    })
    
});


router.get('/:id',(req,res)=>{
    EmployeeSchema.findById(req.params.id,(err,doc)=>{
        if(!err){
            res.render("employee/addoredit",{
                viewtitle : 'Update employee',
                employee : doc
            });
        }
        else{
            console.log(err);
            console.log("Error1");
        }
    })
})



router.get('/delete/:id',(req,res)=>{
    EmployeeSchema.findByIdAndRemove(req.params.id, (err, doc)=>{
        if(!err){
            res.render('employee/list');
        }
        else{
            console.log(err);
        }
    })
})



module.exports = router;

