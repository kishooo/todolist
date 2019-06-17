const express=require("express");
const bodyParser=require("body-parser");

const app=express();

var items=[];

app.use(bodyParser.json(),bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get("/",function(req,res){
    var dayName =["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    var today = new Date();
    var option ={
        weekday:"long",
        day:"numeric",
        year:"numeric",
        month:"long"
    };
    var dateForm=today.toLocaleDateString("en-GB",option);
    var selectName = dayName[today.getDay()];
    var day = "";
    res.render("list",{kindOfDay: dateForm ,newItem: items});
    /*if(today.getDay() === 1){
        day="weekend";
        res.render('list', {kindOfDay: day});
    }else{
        day="workday";
        res.render('list', {kindOfDay: day});
    }*/
});

app.post("/",function(req,res){
    var item=req.body.input;
    items.push(item);
    res.redirect("/");
});

app.listen(3000,function(){
    console.log("server working");
});