const cont=require('../Controller/UserControl')
const express=require('express')
const router=express.Router()

router.post('/signup',cont.signup)
router.post('/login',cont.login)
router.get('/user',cont.verify,cont.getUser)

module.exports=router;
