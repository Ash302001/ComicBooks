import React from 'react'
import {Box,Button,FormLabel,Form,TextField,Typography,} from '@mui/material'
import {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Signup = () => {
    const navigate=useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

   const handleRegister =async(e)=>{
    e.preventDefault()
    try{
        const res=await axios.post('http://localhost:4000/jwt/signup',{
            name:String(name),
            email:String(email),
            password:String(password)
        
        })
        if(res.status===200){
            navigate('/login')
        }
    }catch(error){
        console.log('an error',error);
    }
   }
    return(
    <div>
    <Box sx={{height:'100vh',width:'100%',backgroundColor:'yellow',justifyContent:'center',
        alignItems:'center',display:'flex',flexDirection:'column',backgroundImage:`url(image/peak.jpg)`,backgroundRepeat:'no-repeat',backgroundSize:'cover',}}>
    <form onSubmit={handleRegister}>
        <Box sx={{width:'700px',ml:'auto',mr:'auto',mb:'150px',display:'flex',flexDirection:'column',justifyContent:'center',
        alignItems:'center',backgroundColor:"ButtonText",padding:'20px',backgroundColor:'transparent',position:'relative',right:'35px'
        
        }}>
        
            <Typography variant='h4'sx={{padding:'10px',backgroundColor:'blue',color:'white'}}>PLEASE SIGNUP</Typography>
                <FormLabel  sx={{fontSize:'40px',fontWeight:'bold',mr:'auto',color:'red'}}><b1>NAME</b1></FormLabel>
                <TextField value={name} onChange={(e)=>setName(e.target.value)} sx={{backgroundColor:"whitesmoke",color:'white',padding:'10px'}} type='text' placeholder='ENTER YOUR NAME' fullWidth/>

                
                <FormLabel  sx={{fontSize:'40px',fontWeight:'bold',mr:'auto',color:'red'}}><b1>E-MAIL</b1></FormLabel>
                <TextField value={email} onChange={(e)=>setEmail(e.target.value)} sx={{backgroundColor:"whitesmoke",color:'white',padding:'10px'}} type='text' placeholder='ENTER YOUR EMAIL CORRECTLY' fullWidth/>


                
                <FormLabel  sx={{fontSize:'40px',fontWeight:'bold',mr:'auto',color:'red'}}><b1>PASSWORD</b1></FormLabel>
                <TextField sx={{backgroundColor:"whitesmoke",color:'white',padding:'10px'}} type='password' placeholder='ENTER STRONG PASSWORD'  fullWidth value={password} onChange={e=>setPassword(e.target.value)}/>

                    <Button type='submit' sx={{padding:'10px',margin:'20px',color:'red',width:'120px',backgroundColor:'blue'
                    ,fontWeight:'bolder',fontSize:'20px'}} variant='contained'>SUBMIT</Button> 
        </Box>
    </form>
    </Box>
    


</div>
)
    }

export default Signup