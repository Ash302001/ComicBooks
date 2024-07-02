const mongoose=require('mongoose')
const schema=mongoose.Schema

const userScheman=new schema({
    BOOKNAME:{
        type:String,
        required:true,
    },
    AUTHOR:{
        type:String,
        required:true,
    },
    PRICE:{
        type:Number,
        required:true,
    },
    CATEGORIES1:{
        type:String,
        required:true,
    },
    CATEGORIES2:{
        type:String,
        required:true,
    },
    CATEGORIES3:{
        type:String,
        required:true,
    },
    IMAGE:{
        type:String,
        required:true,
    }
    
})

module.exports=mongoose.model('FILES',userScheman)


