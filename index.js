const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

//MidlleWare
app.use(express.json()); //used to enable body parsing (Like when you use POST Json)

//import routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/private_routes");


//Connect To DB
mongoose.connect(
    process.env.DB_CONNECTION,  //<---This DB_CONNECTION IS DEFINED IN .env file. It's used to hide the user and password data
    { useNewUrlParser: true }, 
    ()=> console.log("connected to DB!")
);



//route middlewares
app.use('/api/user',authRoute);
app.use('/api/posts',postRoute);

app.listen(3000,()=>{console.log("Up and running");});