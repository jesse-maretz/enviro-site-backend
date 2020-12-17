const express = require("express")
const cors = require("cors")

const Footprint = require("../models/Footprint")

router = express()
router.use(express.json())
router.use(cors())
router.set('json spaces', 4)

/// GET ///
router.get('/', (req,res) => {
    Footprint.find({})
        .then((data)=> {
            res.json(data);
        })
  })
  
router.get('/:id', (req,res) => {
    Footprint.findById(req.params.id)
        .then((data)=> {
            res.json(data);
        })
    })

/// POSTS ///
router.post('/add', (req,res) => {
    var newFootprint = Footprint(req.body)
    newFootprint.save().then(()=> res.send("complete"))
    })


/// PUTS ///
router.put('/update/:id', (req,res) => {
    console.log(req.params.id)
    Footprint.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(()=> {
        res.send('Updated footprint entry')
        })
    })


/// DELETES ///
router.delete('/delete/:id', (req,res) => {
    console.log(req.params.id)
    Footprint.findByIdAndDelete(req.params.id)
        .then(()=> {
        res.send('Deleted footprint entry')
        })
    })


module.exports = router