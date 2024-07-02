import React from 'react'
import {Box,Button,FormLabel,MenuItem,Select,TextField,Typography} from '@mui/material'
import NextPlanIcon from '@mui/icons-material/NextPlan';
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';



const Ebooks = () => {
    const navigate=useNavigate()
    const [BOOKNAME, setBOOKNAME] = useState("")
    const [AUTHOR, setAUTHOR] = useState("")
    const [PRICE, setPRICE] = useState("")
    const [CATEGORY1, setCATEGORY1] = useState("")
    const [CATEGORY2, setCATEGORY2] = useState("")
    const [CATEGORY3, setCATEGORY3] = useState("")
    const [IMAGE, setIMAGE] = useState("")
    

    const postData=async()=>{
        await axios.post('http://localhost:4000/user',{
            BOOKNAME:String(BOOKNAME),
            AUTHOR:String(AUTHOR),
            PRICE:Number(PRICE),
            CATEGORIES1:String(CATEGORY1),
            CATEGORIES2:String(CATEGORY2),
            CATEGORIES3:String(CATEGORY3),
            IMAGE:String(IMAGE)
        })
        navigate('/read')

        console.log(BOOKNAME,AUTHOR,PRICE,CATEGORY1,CATEGORY2,CATEGORY3,IMAGE)
    }
  return (
    
          <Box sx={{backgroundImage:`url(image/anime.jpg)`,
          height:'auto',
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',
          backgroundPosition:'center',
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          alignItems:'center',
          padding:'40px'
          }}>


            <form>
                <Box
                width='700px'
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                marginLeft='auto'
                marginRight='auto'
                fontWeight='bold'
                fontSize='20px'
                border='1px'

                sx={{backgroundColor:'transparent',padding:'40px',backdropFilter:'blur(7px)',color:"#2200CF"}}>

                    <Typography
                    variant='h3'
                    sx={{color:'red',
                    fontWeight:'bolder',
                    letterSpacing:'2px',
                    marginBottom:'15px',
                    fontFamily:'sans-serif'}}>

                        REGISTRATION

                    </Typography>

                    <FormLabel sx={{mr:'auto', fontWeight:'bold',color:'white',backgroundColor:'blue',padding:'8px'}}>BOOK NAME</FormLabel>

                    <TextField
                    variant='outlined'
                    type='text'
                    placeholder='ENTER THE BOOK NAME'
                    fullWidth
                    value={BOOKNAME}
                    onChange={event=>setBOOKNAME(event.target.value)}
                    sx={{margin:'25px',border:'2px solid white',backgroundColor:"white",}}/>

                    <FormLabel sx={{mr:'auto', fontWeight:'bold',color:'white',backgroundColor:'blue',padding:'8px'}}>AUTHOR</FormLabel>

                    <TextField
                    variant='outlined'
                    type='text'
                    placeholder='ENTER AUTHOR NAME'
                    fullWidth
                    value={AUTHOR}
                    onChange={event=>setAUTHOR(event.target.value)}
                    sx={{margin:'25px',border:'2px solid white',backgroundColor:"white",}}/>

              <FormLabel sx={{mr:'auto', fontWeight:'bold',color:'white',backgroundColor:'blue',padding:'8px'}}>PRICE</FormLabel>

            <TextField
                 variant='outlined'
                type='number'
                 placeholder='PRICE'
                fullWidth
                value={PRICE}
                onChange={event=>setPRICE(event.target.value)}
                sx={{margin:'25px',border:'2px solid white',backgroundColor:"white",}}/>


<FormLabel sx={{mr:'auto', fontWeight:'bold',color:'white',backgroundColor:'blue',padding:'8px'}}>IMAGE</FormLabel>

            <TextField
                 variant='outlined'
                type='text'
                 placeholder='ENTER THE IMAGE LINK'
                fullWidth
                value={IMAGE}
                onChange={event=>setIMAGE(event.target.value)}
                sx={{margin:'25px',border:'2px solid white',backgroundColor:"white",}}/>


<FormLabel sx={{mr:'auto', fontWeight:'bold',color:'white',backgroundColor:'blue',padding:'8px'}}>CATEGORY1</FormLabel>

<Select value={CATEGORY1}
onChange={event=>setCATEGORY1(event.target.value)}
label='CATEGORY1'
fullWidth

sx={{backgroundColor:'white',mt:'20px'}}>
    
    <MenuItem value='thriller'>THRILLER</MenuItem>
    <MenuItem value='adventure'>ADVENTURE</MenuItem>
    <MenuItem value='traveller'>TRAVELLER</MenuItem>
    <MenuItem value='zombie'>ZOMBIE</MenuItem>
    <MenuItem value='sentiment'>SENTIMENT</MenuItem>
    <MenuItem value='comedy'>COMEDY</MenuItem>
    <MenuItem value='hentai'>HENTAI</MenuItem>
    <MenuItem value='romantic'>ROMANTIC</MenuItem>
    <MenuItem value='action '>ACTION</MenuItem>
    <MenuItem value='love'>LOVE</MenuItem>
    <MenuItem value='education'>EDUCATION</MenuItem>
</Select>



<FormLabel sx={{mr:'auto', fontWeight:'bold',color:'white',backgroundColor:'blue',padding:'8px',mt:'20px'}}>CATEGORY2</FormLabel>

<Select 
label='CATEGORY2'
fullWidth
value={CATEGORY2}
onChange={event=>setCATEGORY2(event.target.value)}

sx={{backgroundColor:'white',mt:'20px'}}>
    <MenuItem value='hentai'>HENTAI</MenuItem>
    <MenuItem value='thriller'>THRILLER</MenuItem>
    <MenuItem value='adventure'>ADVENTURE</MenuItem>
    <MenuItem value='traveller'>TRAVELLER</MenuItem>
    <MenuItem value='zombie'>ZOMBIE</MenuItem>
    <MenuItem value='sentiment'>SENTIMENT</MenuItem>
    <MenuItem value='comedy'>COMEDY</MenuItem>
    <MenuItem value='hentai'>HENTAI</MenuItem>
    <MenuItem value='romantic'>ROMANTIC</MenuItem>
    <MenuItem value='action '>ACTION</MenuItem>
    <MenuItem value='love'>LOVE</MenuItem>
    <MenuItem value='education'>EDUCATION</MenuItem>
</Select>


<FormLabel sx={{mr:'auto', fontWeight:'bold',color:'white',backgroundColor:'blue',padding:'8px',mt:'20px'}}>CATEGORY3</FormLabel>

<Select 
label='CATEGORY3'
fullWidth
value={CATEGORY3}
onChange={event=>setCATEGORY3(event.target.value)}

sx={{backgroundColor:'white',mt:'20px'}}>
    
    <MenuItem value='thriller'>THRILLER</MenuItem>
    <MenuItem value='adventure'>ADVENTURE</MenuItem>
    <MenuItem value='traveller'>TRAVELLER</MenuItem>
    <MenuItem value='zombie'>ZOMBIE</MenuItem>
    <MenuItem value='sentiment'>SENTIMENT</MenuItem>
    <MenuItem value='comedy'>COMEDY</MenuItem>
    <MenuItem value='romantic'>ROMANTIC</MenuItem>
    <MenuItem value='hentai'>HENTAI</MenuItem>
    <MenuItem value='darker'>DARKER</MenuItem>
    <MenuItem value='action '>ACTION</MenuItem>
    <MenuItem value='love'>LOVE</MenuItem>
    <MenuItem value='education'>EDUCATION</MenuItem>
</Select><br/>

    <Button sx={{mt:'10px'}}onClick={postData} variant='contained'   endIcon={<NextPlanIcon/>}>SUBMIT</Button>

      </Box>
            </form>

          </Box>

    
  )
}

export default Ebooks