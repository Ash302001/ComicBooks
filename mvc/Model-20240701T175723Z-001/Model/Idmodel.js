const mongoose=require('mongoose')

const schema=mongoose.Schema;


const Newschema= new schema({
    Adminid:{
        type:String,
        required:true,
    },
})

module.exports=mongoose.model('id',Newschema)
