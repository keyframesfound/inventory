const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket');

// ...existing code...
router.post('/generate', async (req, res) => {
    const { seatNumber, concertInfo } = req.body;
    const ticket = new Ticket({ seatNumber, concertInfo });
    await ticket.save();
    res.json(ticket);
});

router.get('/:id', async (req, res) => {
    const ticket = await Ticket.findById(req.params.id);
    res.json(ticket);
});

module.exports = router;
