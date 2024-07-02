import React from 'react'
import {Box,Button, FormLabel, TextField, Typography} from '@mui/material'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navi=useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [token, setToken] = useState("")
  const [users, setUsers] = useState("")
  const [authorize, setAuthorize] = useState("")


  const handleLogin=async(e)=>{
    e.preventDefault()
    try{
      const loginuser=await axios.post('http://localhost:4000/jwt/login',{
        email:String(email),
        password:String(password)
      })
      if(loginuser.status===200){
        console.log(loginuser.data)
        try{
          const getuser=await axios.get('http://localhost:4000/jwt/user',{
            headers:{
              'Content-Type' : 'application/json',
              Authorization:`Bearer ${loginuser.data.token}`
            }
          })
          if(getuser.status===200){
            console.log(getuser.data)
            
            localStorage.setItem('auth',"authorized")
            navi('/')
          
          }
          else if(getuser===400){
            console.log('Error')
          }

        }
        catch(err){
          console.log(err)
        }
      }
      else if(loginuser===404){
        console.log("ENTER THE CORRECT PASSWORD")
      }
    }
    catch(err){
      console.log(err);
    }

  }

  return (
    <div>
        <Box sx={{height:'100vh',width:'100%',backgroundColor:'yellow',justifyContent:'center',
            alignItems:'center',display:'flex',flexDirection:'column',backgroundImage:`url(image/batsu.jpg)`,backgroundRepeat:'no-repeat',backgroundSize:'cover',}}>
        <form onSubmit={handleLogin}>
            <Box sx={{width:'700px',ml:'auto',mr:'auto',mb:'0px',display:'flex',flexDirection:'column'
            ,justifyContent:'center',
            alignItems:'center',backgroundColor:"ButtonText",padding:'80px',
            backgroundColor:'transparent',position:'relative',right:'35px'
            
            }}>
            
                
                    
                    <FormLabel  sx={{fontSize:'40px',fontWeight:'bold',mr:'auto'}}><b1>E-MAIL</b1></FormLabel>
                    <TextField sx={{backgroundColor:"whitesmoke",color:'white',padding:'20px'}} type='text' placeholder='ENTER YOUR EMAIL CORRECTLY' fullWidth 
                    value={email} onChange={e=>setEmail(e.target.value)}/>


                    
                    <FormLabel  sx={{fontSize:'40px',fontWeight:'bold',mr:'auto'}}><b1>PASSWORD</b1></FormLabel>
                    <TextField value={password} onChange={e=>setPassword(e.target.value)} sx={{backgroundColor:"whitesmoke",color:'white',padding:'20px'}} type='password' placeholder='ENTER STRONG PASSWORD' fullWidth/>
 
                        <Button type='submit' sx={{padding:'10px',margin:'70px',color:'white',width:'120px',backgroundColor:'red'
                        ,fontWeight:'bolder',fontSize:'20px'}} variant='contained'>VS</Button> 
            </Box>
        </form>
        </Box>
        


    </div>
  )
}

export default Login