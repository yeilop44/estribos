const express = require('express');
const router = express.Router();

const Event = require('../models/event');

//getAll
router.get('/', async (req, res) => {        
    const event = await Event.find();   
    res.status(200).json({                
        Items: event
    });
        
});

//post
router.post('/', async (req, res, next) => {
   
    const event = new Event({        
        event: req.body.event,
        category: req.body.category,
        quantity: req.body.quantity,
        weight: req.body.weight,
        date: req.body.date,
        files: req.body.files        
    });
    await event.save()
    res.status(200).json({
        message: "Created",
        event: event
    });        
});




module.exports = router;