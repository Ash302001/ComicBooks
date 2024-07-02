const con=require('../Controller/Control')
const express=require('express')
const router=express.Router();


router.get('/',con.GetData)
router.post('/',con.postData)
router.delete('/:id',con.Deldata)
router.get('/:id',con.GetByID)
router.put('/:id',con.Update)

module.exports=router