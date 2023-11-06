const express = require('express');
const mongoose = require('mongoose');
let app = express();
async function connect(){
    let connection =  await mongoose.connect('mongodb://0.0.0.0:27017/Student');
    if (!connection) {
    console.log('DB is not connected')
    } else { console.log('DB is connected')
   }}
connect()
let stuSchema = new mongoose.Schema({
    password : String,
    phone : String,
    name : String,
    age : Number,
    address : String
});
const stuModel = new mongoose.model("Student",stuSchema);
let coursesSchema = new mongoose.Schema({
    name : String,
    ID : Number
});
const coursesModel = new mongoose.model("courses",coursesSchema);
let newStu = new stuModel({
    password : "123*/@",
    phone : "01202956964",
    name : "Fatma Bayomi",
    age : 21,
    address : "Ismailia"
}).save();
let new_1Stu = new stuModel({
    password : "3.669-+$",
    phone : "01098057464",
    name : "Fatma Ahmed",
    age : 20,
    address : "Ismailia"
}).save();
let new_2Stu = new stuModel({
    password : "1287/.*/@",
    name : "Mohamed Bayomi",
    age : 24,
    address : "Ismailia"
}).save();
// endpoint fetch all student from database
app.get('/Student',async(req,res)=>{
    //Student.find()
    let allStu = await stuModel.find();
    res.status(200);
    console.log(allStu.length)
    res.json(allStu)
})
// endpoint fetch all course from database
app.get('/Courses', async (req, res) => {
let allCourses = await coursesModel.find();
res.status(200);
console.log(allCourses.length)
res.json(allCourses)
})
app.get('/' ,(req, res) =>{
res.send("Welcome In Hell")
} )
app.listen(3000, function(){
    console.log('Server Now Is Opend')
})