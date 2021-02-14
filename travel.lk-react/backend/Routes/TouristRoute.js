
express = require('express');
const router = express.Router();
let User = require('../model/touristModel');
let jwt = require('jsonwebtoken');



router.route('/Register').post(async(req,res)=>{

    const {name,email,password,code,mobile,city} = req.body
try{
    
    if(!name  || !password ){


        res.status(404).json({msg:'no data'})
    }

    const  user = new User({

        name,
        email,
        password,
        code,
        mobile,
        city
    })


    const saveUser = await user.save();
    res.json(saveUser)
    console.log(saveUser)
}
catch(err){


    res.status(500).json({msg:'err'})
}


})



router.route('/login').post(async(req,res)=>{

    const {name,email,password,code,mobile,city} = req.body

  try{

    if(!name || !password){

        res.status(404).json({msg:'no data'})
        
    }

    const user = await User.findOne({name:name});
   
    

    if(!user){

        res.status(400).json({msg:'no account  exit'})
    }

    
   
    const token = jwt.sign({id:user._id},process.env.JWT_SCREAT);

    res.json({
        token,
        user:{
            id:user.id
        }
    })

  }

  catch(err){

    res.status(500).json({msg:'err'})
  }
})

module.exports = router;