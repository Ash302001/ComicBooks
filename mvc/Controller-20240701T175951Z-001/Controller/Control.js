const mod=require('../Model/Model')

const GetData=async(req,res)=>{
    let data;
    try{
        data=await mod.find()
    }
    catch(err){
        console.log(err)
    }
    if(!data){
        return res.status(404).json({message:'NO DATA FOUND'})
    }
    else{
        return res.status(200).json({data})
    }
}

const postData=async(req,res)=>{
    const{BOOKNAME,AUTHOR,PRICE,CATEGORIES1,CATEGORIES2,CATEGORIES3,IMAGE}=req.body
    let post;
    try{
        post=new mod({
            BOOKNAME,AUTHOR,PRICE,CATEGORIES1,CATEGORIES2,CATEGORIES3,IMAGE
  
        })
        await post.save()
    }
    catch(err){
        console.log(err)
    }
    if(!post){
        return res.status(404).json({message:"no data found"})
    }
    else{
        return res.status(200).json({post})
    }
}


const Deldata=async(req,res)=>{
    const id=req.params.id
    let del;
    try{
        del=await mod.findByIdAndDelete(id)
    }
    catch(err){
        console.log(err)
    }
    if(!del){
        return res.status(404).json({message:'no data found'})
    }
    else{
        return res.status(200).json("Data Deleted Sucessfully")
    }

}

const GetByID=async(req,res)=>{
    const id=req.params.id
    let getby;
    try{
        getby=await mod.findById(id)
    }
    catch(err){
        console.log(err)
    }
    if(!getby){
        return res.status(404).json({message:'no data found'})
    }
    else{
        return res.status(200).json({getby})
    }
}


const Update=async(req,res)=>{
    const id=req.params.id
    let update;
    const{BOOKNAME,AUTHOR,PRICE,CATEGORIES1,CATEGORIES2,CATEGORIES3,IMAGE}=req.body
    try{
        update=await mod.findByIdAndUpdate(id,{
            BOOKNAME,AUTHOR,PRICE,CATEGORIES1,CATEGORIES2,CATEGORIES3,IMAGE
        })
        update=await update.save()
    }
    catch(err){
        console.log(err)
    }
    if(!update){
        return res.status(404).json({message:'no data found'})
    }
    else{
        return res.status(200).json({update})
    }


}



exports.GetData=GetData;
exports.postData=postData;
exports.Deldata=Deldata;
exports.GetByID=GetByID;
exports.Update=Update;




