let mongoose = require('mongoose');
const Schema = mongoose.Schema

const User = new Schema({

    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        
    },
    city:{

        type:String,
        require:true,

    },
    mobile:{

        type:String,
        require:true
    },
    gender:{


        type:String,
        require:true


    },

    password:{

        type:String,
        require:true,
    },
    Code:{

        type:String,
        require:true,
    }


},
{

    collection:'User'
})

module.exports = mongoose.model('User',User)