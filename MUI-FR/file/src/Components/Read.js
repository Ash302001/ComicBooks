import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {Box,TextField,Select,MenuItem,Button, AppBar, Toolbar, Card,CardMedia, Typography, FormControl, InputLabel} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ShopIcon from '@mui/icons-material/Shop';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';


const Read = () => {
    const [authorize, setAuthorize] = useState(false)
    const [val, setVal] = useState([])
    const [sear, setSear] = useState("")

    const GetData=async()=>{
        const dummy=await axios.get('http://localhost:4000/user')
        setVal(dummy.data.data)
    }
    useEffect(()=>{
        if(localStorage.getItem('auth')==="authorized"){
            setAuthorize(true)
        }
        else{
            setAuthorize(false)
        }
        GetData()
        console.log(val)
    },[])

    const Setcat=()=>{
        const fil=val.filter((data)=>{
            if(data.CATEGORIES1==sear){
                return data;
            }
            else if(data.CATEGORIES2==sear){
                return data;
            }
            else if(data.CATEGORIES3==sear){
                return data;
            }
            
        })
        console.log(sear)
        setVal(fil)
       
    }

    
  return (
    <div className='read'>
        <div>
            <AppBar position='static' sx={{height:'80px',backgroundColor:'black'}}>
                <Box sx={{display:'flex'}}>
                        <ShopIcon sx={{fontSize:'80px',mb:'auto'}}/>
                        <Typography variant='h2' sx={{position:'relative',top:'15px',left:'10px'}}>
                            COM-BOOKS
                        </Typography>
                        <FormControl size='small'
                        sx={{mt:'5px',mr:'10px',display:'flex',
                        ml:'auto',
                        position:'relative',
                        top:'20px'}}>

<Button onClick={GetData} sx={{position:"absolute",right:"300px",top:"10px"}}><ReplyAllIcon sx={{fontSize:'huge',ml:'50px'}}/></Button>
       <InputLabel>search</InputLabel>                     
 <Select  value={sear}
onChange={event=>setSear(event.target.value)}
placeholder='SEARCH'
fullWidth

sx={{backgroundColor:'greenyellow',mt:'20px',ml:'auto',width:'200px',position:"absolute",top:"-15px",right:"80px"}} >
    <MenuItem value='hentai'>HENTAI</MenuItem>
    <MenuItem value='thriller'>THRILLER</MenuItem>
    <MenuItem value='adventure'>ADVENTURE</MenuItem>
    <MenuItem value='traveller'>TRAVELLER</MenuItem>
    <MenuItem value='zombie'>ZOMBIE</MenuItem>
    <MenuItem value='sentiment'>SENTIMENT</MenuItem>
    <MenuItem value='comedy'>COMEDY</MenuItem>
    <MenuItem value='romantic'>ROMANTIC</MenuItem>
    
    </Select>
    <Button onClick={Setcat} variant='text' sx={{color:'blue',width:'50px',position:'absolute',right:'0px',
top:'7px'}}><TravelExploreIcon  sx={{backgroundColor:'greenyellow',color:'blue',}}/></Button>                    
</FormControl>
</Box>
</AppBar>


            
        </div>
       
        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-around',flexWrap:'wrap',
        backgroundImage:`url(image/background.jpg)`,backgroundRepeat:'no-repeat',backgroundPosition:'center',
        padding:'30px',backgroundSize:"cover"}}> 

        {val.map((props)=>(

            <Card sx={{width:"auto",height:'auto',mb:'20px',border:'3px solid greenyellow'}}>
                <CardMedia component='img'
                
                key={props._id}
                sx={{height:'400px',width:"100%"}}
                src={`${props.IMAGE}`}>

                </CardMedia>

                <Typography variant='h5'
                sx={{fontWeight:'bold',
                fontFamily:'sans-serif',
                fontSize:'25px'}}>
                    <b>NAME :</b>{props.BOOKNAME}
                </Typography>


                <Typography variant='h5'
                sx={{padding:'4px',fontWeight:'bold'}}>
                    <b>AUTHOR :</b>{props.AUTHOR}
                </Typography>

                <Typography variant='h4'
                sx={{fontWeight:'bold',
                padding:'4px',
               }}>
                   {authorize?(
                   <>
                       <Button variant='contained' sx={{width:'100%',
                backgroundColor:"orange",
                color:'black',fontSize:'20px'}} LinkComponent={Link} to='/sign'>
                    <CurrencyRupeeIcon sx={{backgroundColor:'blue'}} />

              
                    {props.PRICE}  </Button>
                   </>
                   ):
                   (
                    <> 
 <Button variant='contained' sx={{width:'100%',
                backgroundColor:"orange",
                color:'black',fontSize:'20px'}} LinkComponent={Link} to='/login'>
                    Login </Button>
                    </>
                   )}

                </Typography>
            </Card>
        
        ))}
        </Box>

        {/* <Card.Group>
            {val.map((prompts)=>(
                <Card key={prompts._id} wrapped  ui='false'>
                    
                    <img src={prompts.IMAGE} height='350'width='290'/>
                  <Card.Header as='h2'><b>NAME</b>:{prompts.BOOKNAME}</Card.Header>
                  <Card.Header as='h2'><b>AUTHOR</b>:{prompts.AUTHOR}</Card.Header>
                  <Card.Header as='h2'><b>PRICE</b>:{prompts.PRICE}</Card.Header>
                  </Card>
            ))}
            
        </Card.Group> */}

    </div>
  )
}

export default Read