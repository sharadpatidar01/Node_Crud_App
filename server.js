//Http Server
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");

const connectDB = require('./server/database/connection')
//use express
const app = express();                                  

//use dotenv
dotenv.config({path: '.env'})                     
const PORT = process.env.PORT || 8080;

//use morgan
app.use(morgan('tiny'));//log request  

//mongoDB connection
connectDB()

//parse request to body-parser
app.use(bodyParser.urlencoded({extended:true}));       

//set view engine
app.set("view engine","ejs"); 
//app.set("views",path.resolve(__dirname,"views/ejs")); //use it if you use different folder name place of (views).

//load assets
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));

//load router
app.use("/",require('./server/routes/router'))

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});