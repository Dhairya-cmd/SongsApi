var express = require('express');
var router = express.Router();
var Song = require('./Models/Song')

router.get('/songs',async(req,res)=>{
   
    const isong = await Song.find()
    res.send(isong)

})

router.post('/songs', async(req,res) => {
    
    const isong = new Song({
        name: req.body.name,
        singer: req.body.singer
    })

    await isong.save((err,msg)=>{

        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "message":msg
            })
        }
    })
})

router.patch('/songs/:id', async(req,res) => {
    console.log("dsdfs")
    
    const isong = await Song.findOne({_id:req.params.id})
    isong.name = req.body.name
    isong.singer = req.body.singer

    await isong.save((err,msg) => {
        
        if(err){
            res.status(500).json({
                "error":err
            })
        }

        else{
            res.status(200).json({
                "message":msg
            })
        }
    })
})

router.delete("/songs/:id",async(req,res)=>{
    
    const _id = req.params.id;
    
    const isong = await Song.findByIdAndDelete(_id);
    
    res.send(isong);

  });




module.exports = router