import React, { useEffect } from 'react'
import { Box, Typography,Button, AppBar, Toolbar, Tabs, Tab, CardMedia,Card, CardContent, Avatar } from '@mui/material'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { useNavigate } from 'react-router-dom';
import SettingsPowerIcon from '@mui/icons-material/SettingsPower';




const Welcome = () => {
    const navigate=useNavigate()

    const Arr=[
        '/slider/10.jpg',
        '/slider/11.jpg',
        '/slider/12.webp',
        '/slider/13.webp',
        '/slider/15.jpg',
        'slider/17.jpg',
        'slider/18.jpg',

        
        
    
    
    
    ]
    const [ind, setInd] = useState(0)

    const Nextimg=()=>{
        if(ind<Arr.length-1){
            setInd(ind+1)
        }
        else{
            setInd(0)
        }
    }

    const previousimage=()=>{
        if(ind>0){
            setInd(ind-1)
        }
        else{
            setInd(Arr.length-1)
        }
    }

    useEffect(()=>{
        setTimeout(()=>{
            Nextimg()
        },10000)
    },[])

    const logout=()=>{
        localStorage.setItem('auth',"not authorized")
        navigate('/read')
    }

  return (
    <div>
        <AppBar position='sticky' sx={{backgroundColor:"steelblue"}}>
            
                <Toolbar>
                <Avatar src='/image/ash1.jpg'></Avatar>
                <Typography variant='h3' sx={{padding:'10px',mt:'30px',color:"white",mr:'875px',
                position:"relative",bottom:"15px"}}>
                COM
                                     <AutoStoriesIcon />
                                          BOOKS</Typography>
                    <Tabs sx={{ml:"auto"}}>
                        <Tab label='LOGIN' sx={{backgroundColor:'ButtonText',color:'white'}} LinkComponent={Link} to='/login' />
                        <Tab label='SIGNUP' sx={{backgroundColor:'white',color:'ButtonText'}} LinkComponent={Link} to='/sign' />
                        <Button onClick={logout}><SettingsPowerIcon sx={{backgroundColor:'black',width:'50px',height:'50px'}}/></Button>
                    </Tabs>
                </Toolbar>
         </AppBar>
    <Box  sx={{height:'80%',width:'100%',position:'absolute',display:"flex",flexDirection:"column",
    backgroundImage:`url(image/bat.webp)`,justifyContent:"center",
    alignItems:"center",backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
        
        <Box sx={{width:'1000px',position:'relative',top:'400px'}}>
            <Typography variant='h2' sx={{mr:'200px'}}>
                BUY COMIC-BOOKS HERE...
            </Typography><br/>

            <Typography variant='h4' sx={{mr:'200px',fontSize:'20px',color:"ButtonText",backgroundColor:"WindowFrame"}}>
               <Diversity3Icon/> "THERE IS NO FRIENDS AS LOYAL AS BOOK"
            </Typography>

            

            <Typography variant='h5' sx={{fontWeight:'bold',width:'70%',mt:'30px',ml:'auto',mr:'auto',mb:'180px',textAlign:'left',color:"white"}}>
                <ArrowCircleRightIcon/>
                Browse books,magazines and comics<br/>
                Sign in with your account to access your books<br/>
                and other content on any device....!
                
            </Typography>
            <Button LinkComponent={Link} to ='/read' variant='outlined' sx={{position:"relative",left:"40%",
            backgroundColor:"skyblue",color:'black',bottom:"150px"}}>
            <Typography>
                GET STARTED
            </Typography>
            
            </Button>
             

            <Box sx={{height:'700px',width:'1200px',ml:'auto',mr:'auto',backgroundImage:`url(${Arr[ind]})`,position:'relative',
            top:'150px',right:'80px',backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>

                <Button onClick={previousimage} sx={{mt:'30px',width:'100px',height:'0px',color:'ButtonText'}}><ArrowCircleLeftIcon sx={{fontSize:'100px',
                mb:'auto',mt:'70px',color:"ButtonShadow",borderRadius:'20px'}}/></Button>

                <Button onClick={Nextimg} sx={{mt:'280px',width:'0px',ml:'1000px',color:"ButtonText"}}><ArrowCircleRightIcon sx={{
                    fontSize:"100px",color:"ButtonShadow",borderRadius:'20px'}}/>
                </Button>

            
            </Box>
        </Box>

        
    </Box>

    

    <Box sx={{backgroundColor:'white',position:'absolute',top:'1600px',width:'100%'}}>
        <Typography variant='h3' sx={{ml:'350px',mb:'20px',fontWeight:'bold'}}>
            EXPLORE WHAT COM_BOOKS CAN DO
        </Typography>

        <Box sx={{width:'100%',height:'auto',display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>

            <Card sx={{width:'300px'}}>
                <CardMedia component="img" height="auto" image='/image/comi2.png' />
                    <CardContent>
                        <Typography variant='body4' color='black'>“welcome to the team”, “we're so glad you're here”, 
                        and “we can't wait to get to know you”</Typography>
                    </CardContent>
                    </Card>

                    
            <Card sx={{width:'300px'}}>
                <CardMedia component="img" height="300px" image='/image/nigga.png'  />
                    <CardContent sx={{mt:'40px'}}>
                        <Typography variant='body4' color='black' sx={{fontSize:'20px'}}>“With great power comes great responsibility.” <br/>
                                                   ― Stan Lee </Typography>
                    </CardContent>
                    </Card>

                    
            <Card sx={{width:'350px'}}>
                <CardMedia component="img" height="auto" image='/image/ash.jpg' width="350px"/>
                    <CardContent>
                        <Typography variant='body4'sx={{letterSpacing:'3px',fontSize:'15px'}} color='black'>Hey   There <b>    I'm Aswin</b> <br/><br/>
                        <Typography variant='body4' sx={{backgroundColor:'black',color:'white'}}>A FULLSTACK WEB DEVELOPER
                        </Typography><br/><br/><Typography>Please Click The </Typography><br/><br/> <strong>Button</strong>
                         Below To Signup & Login<br/></Typography><br/><br/><br/>
                         
                    </CardContent>
                    </Card>
        </Box>


    </Box >


    <Box sx={{backgroundColor:"black",position:'relative',top:'2200px',width:'100%',padding:'20px'}}>

        <Typography variant='h4' sx={{ml:'450px',padding:'20px',textAlign:'center',backgroundColor:"steelblue",mr:'392px'}}>GET STARTED WITH COM-BOOKS</Typography><br/>

        <Button LinkComponent={Link} to='/sign' variant='outlined' sx={{ml:'500px',mr:'20px',backgroundColor:'white',color:'black'}}>Create an COM-BOOK Account</Button>
        
        <Button LinkComponent={Link} to='/login' variant='outlined' sx={{backgroundColor:'black',color:'white'}}>LOGIN an COM-BOOK Account</Button>
               
    </Box>
    </div>
  )
}

export default Welcome