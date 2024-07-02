const mod=require('../Model/Idmodel')

const POSTData=async(req,res)=>{
    const {Adminid}=req.body
    let admin;
    try{
        admin =new mod({
            Adminid
        }),
         await admin.save()
    }
    catch(err){
        console.log(err);
    }
    if(!admin){
        return res.status(404).json({message:'No Data Found'})
    }
    else{
        return res.status(200).json({admin})
    }
}

exports.POSTData=POSTData