const modu=require('../Model/UserMod')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const jwt_secret='ASWIN'

const signup=async(req,res)=>{
    const{name,email,password}=req.body
    let existing;

    try{
       existing =await modu.findOne({email:email})
    }
    catch(err){
        console.log(err);
    }
    if(existing){
        return res.status(404).json({message:'USER ALREADY EXIST'})
    }
    else{
        let post;
        const hashpass=bcrypt.hashSync(password);
        try{
            post =new modu({
                name,email,password:hashpass
            })
            await post.save()
        }
        catch(err){
            console.log(err)
        }
        if(!post){
            return res.status(404).json({message:'NO DATA TO SAVE'})
        }
        else{
             return res.status(200).json({post})           
        }
    }
}

const login=async(req,res)=>{
    const {email,password}=req.body;
    let exist;
    try{
        exist =await modu.findOne({email:email})
    }
    catch(err){
      console.log(err);
    }
    if(!exist){
        return res.status(404).json({message:'NO USER FOUND'})
    }
    else {
        const correctpass=bcrypt.compareSync(password,exist.password)
      if(!correctpass){
        return res.status(404).json({message:"INCORRECT PASSWORD"})
      }
      else{
        const token=jwt.sign({id:exist._id},jwt_secret)
        return res.status(200).json({token})
      }
    }
}

const verify=async(req,res,next)=>{
    const headers=req.headers['authorization']
    const token=headers.split(" ")[1]

    jwt.verify(String(token),jwt_secret,(err,user)=>{
        if(err){
            console.log(err)
        }
        else{
           
            // let userid=user.id
            // return res.status(200).json(userid)
            req.id=user.id
            next()
        }
    })
}

const getUser=async(req,res)=>{
    const id=req.id
    let user
    try{
        user=await modu.findById(id,"-password")
    }
    catch(err){
        console.log(err)
    }
    if(!user){
        return res.status(404).json({message:"no user found"})
    }
    else{
        return res.status(200).json({user})
    }
}

exports.signup=signup;
exports.login=login;
exports.verify=verify;
exports.getUser=getUser;    


