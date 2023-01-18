const mongoose = require("mongoose");

//for local database
 mongoose.connect("mongodb://localhost:27017/jwt_users_db",{

//for mongodb atlas

// mongoose.connect("mongodb+srv://username:password@cluster0.5uojpbz.mongodb.net/jwt_database?retryWrites=true&w=majority",{


    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connection sucessfull");
}).catch((err)=>{
    console.log(err);
})