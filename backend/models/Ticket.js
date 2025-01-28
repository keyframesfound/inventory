const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    seatNumber: String,
    concertInfo: String,
});

module.exports = mongoose.model('Ticket', ticketSchema);
