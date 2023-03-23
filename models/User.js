const mongoose=require("mongoose")
const uuid=require('uuid')
const User=new mongoose.Schema({
    id:{
        type: 'string',
			primaryKey: true,
			default: uuid.v4(),
    },
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Country:{
        type:String,
        required:true
    },
    State:{
        type:String,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    Gender:{
        type:String,
        required:true
    },
    DateOfBirth:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("users",User)