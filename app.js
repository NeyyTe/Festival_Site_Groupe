
const express=require('express');
const app = express()
const bodyParse=require ('body-parser')
const ejs = require ('ejs')

app.set("view engine", "ejs");
app.use(bodyParse.urlencoded({ extended: false}))
app.use(express.static("public"));

app.get ('/', function (req,res){
  res.render('main.ejs')
    
});

app.get ('/', function (req,res){
  res.render('header.ejs')
    
});



app.listen(8080,()=>{
    console.log('Serveur lancé')
})