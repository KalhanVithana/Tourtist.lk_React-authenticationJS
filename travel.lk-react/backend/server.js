let express = require('express');
let mongoose = require('mongoose');
let cors= require('cors');
let bodyparser = require('body-parser');
let dbconfig = require('./database/db');
require('dotenv').config();


const User = require('./Routes/TouristRoute')


mongoose.Promise= global.Promise;

mongoose.connect(dbconfig.db,{

    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>{

    console.log('database connected')
}).catch(err=>{

    console.log('database not connected'+err)
})


const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(cors());
app.use('/user',User)



const port = process.env.PORT || 4000;
app.listen(port,()=>{

    console.log('connected '+port)
})

app.use((req,res,next)=>{

    next(createError(404));
})

app.use(function(err,req,res,next){


    console.log(err.message);
    if(!err.statusCode)

        err.statusCode= 500;
        res.status(err.statusCode).send(err.message);
    
});