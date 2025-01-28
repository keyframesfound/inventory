const mongoose = require('mongoose');

const borrowedItemSchema = new mongoose.Schema({
    itemName: String,
    borrowerName: String,
    returnDate: Date,
});

module.exports = mongoose.model('BorrowedItem', borrowedItemSchema);
