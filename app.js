const express=require("express");
const bodyParser=require("body-parser");

const app=express();

var items=["lunch","go to gym","sleep"];

app.use(bodyParser.json(),bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/",function(req,res){
    var today = new Date();
    var option ={
        weekday:"long",
        day:"numeric",
        year:"numeric",
        month:"long"
    };
    var dateForm=today.toLocaleDateString("en-GB",option);
    res.render("list",{kindOfDay: dateForm ,newItems: items});
});

app.post("/",function(req,res){
    var item=req.body.input;
    items.push(item);
    res.redirect("/");
});

app.listen(3000,function(){
    console.log("server working");
});