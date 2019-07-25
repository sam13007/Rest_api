const express =  require('express');
const router = express.Router();
const book = require('../models/book');

router.get('/ninjas',(req,res,next)=>{
    /* book.find().then((ninja)=>{
        res.send(ninja)
    }); */
    book.findOne({name:req.query.name}).then((ninja)=>{
        res.send(ninja)
    })
   /*  book.geoNear(
        {type:'point',coordinates:[parseFloat(req.query.lng),parseFloat(req.query.lt)]},
        {maxDistance:100000,spherical:true}
        ).then((ninja)=>{
            res.send(ninja)
        }) */
})

router.post('/ninjas',(req,res,next)=>{

    book.create(req.body).then((book)=>{
        res.send(book)
    }).catch(next);

})

router.put('/ninjas/:id',(req,res,next)=>{
    //update req
    book.findByIdAndUpdate({_id:req.params.id},req.body).then(()=>{
        book.findOne({_id:req.params.id}).then((ninja)=>{
            res.send(ninja)
        })
    })
    
})

router.delete('/ninjas/:name',(req,res,next)=>{
    //Delete req
    book.findByIdAndRemove({_id:req.params.name}).then((ninja)=>{
        res.send(ninja)
    })
   
})

module.exports = router;