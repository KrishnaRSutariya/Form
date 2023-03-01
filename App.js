const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

// Set EJS Engine. ( Extention ) :- 
app.set("view engine","ejs");

// Connect MongoDB. :-
mongoose.connect('mongodb+srv://krishnarsutariyarskd154:krishnarsutariyarskd154@cluster.zyhwqjh.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>{
        console.log("Mongo_DB Is Connected.");
    })
    .catch(()=>{
        console.log("Mongo_DB Is Not Connected.");
    })

// Create MONGODB Schema. :-
const Schema = new mongoose.Schema({
    // name : { type: String, default:"ADMIN" }
    // name : { type: String, default:"USER"},
    // age : { type:Number, default:25 }

    user_name : { type : String },
    user_email : { type : String },
    user_password : { type : String },
    user_age : { type : String },
    user_bio : { type : String },
    user_job : { type : String },
    user_interest : { type : Array }
    
});

// Create MONGODB Model. :-
const model = new mongoose.model("Register",Schema);

// Express Routing. :-
app.get('/',function(req,res){
    // res.render('index');
    res.render('form');
});
app.post('/',function(req,res){

    const data = req.body;
    // console.log(data);
    model.create(data);
    res.redirect('/');
});

app.listen(3000);