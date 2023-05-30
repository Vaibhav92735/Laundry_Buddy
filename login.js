const express = require("express");
const mongoose = require('mongoose');
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");
const login = express();
const VIEWS = path.join(__dirname, 'static');
const port = 80;

mongoose.connect('mongodb://127.0.0.1/register',{useNewUrlParser:true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error'))
db.once('open',()=>{
  console.log("We are connected")
})

login.use('/static', express.static('static'));
login.use(express.urlencoded());
login.use(express.static(__dirname + '/index'));

login.set('view engine', 'html');
login.set('views',path.join(__dirname,'static'));

const laundrySchema = new mongoose.Schema({
  Mobile_Number : String,
  Laundry_Number: String,
  Username : String,
  Password: String
});

const register = mongoose.model('register', laundrySchema);

