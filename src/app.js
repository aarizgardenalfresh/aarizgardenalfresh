const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname ,"../public")));
app.set("view engine","hbs");
app.set("views" , path.join(__dirname ,"../templates/views"));
hbs.registerPartials(path.join(__dirname,"../templates/partials"));


require("./db/conn");
const Data = require("./models/model01");

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get("/",(req,res)=>{
    res.render("index");
});


app.get("/who-are-we",(req,res)=>{
    res.render("who-are-we");
});
app.get("/gallery",(req,res)=>{
    res.render("gallery");
});
app.get("/our-facility",(req,res)=>{
    res.render("our-facility");
});
app.get("/our-network",(req,res)=>{
    res.render("our-network");
});
app.get("/our-fruits",(req,res)=>{
    res.render("our-fruits");
});

app.get("/contact",(req,res)=>{
    res.render("contact");
});
app.get("/terms-conditions",(req,res)=>{
    res.render("terms-conditions");
});
app.get("/privacy-policy",(req,res)=>{
    res.render("privacy-policy");
});










app.post("/contact-form",async (req,res)=>{
    try {
        
        const userData = new Data({
            name:req.body.name,
            email:req.body.email,
            amount:req.body.subject,
            message:req.body.message
        });

        const savedData = await userData.save();
        res.status(201).render("index");

    } catch (error) {
        res.status(404).send("Something went wrong please go back and try again by doing refresh...!");
    }
});







app.get("*",(req,res)=>{
    res.render("404");
});

app.listen(port,()=>{
    console.log(`Server is listening on port no. ${port}`);
})
