const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://javedkhan:9422370020@feedback-data.vhgsq06.mongodb.net/test",{
    useNewUrlParser:true
}).then(()=>{
    console.log("Connection successfull");
}).catch((e)=>{
    console.log("No connection" + e);
});

// mongodb+srv://javedkhan:<password>@feedback-data.vhgsq06.mongodb.net/test 