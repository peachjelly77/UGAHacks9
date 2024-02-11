const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 4000;
const mongoose = require('mongoose')
const config = require('./config/key');
app.use(express.json());

mongoose.set('strictQuery',false);
mongoose.connect(config.mongoURI).then(()=>console.log('MongoDB connected'))
.catch(err => console.log(err))
app.listen(port,()=>
console.log(`Server is running ${port}`))