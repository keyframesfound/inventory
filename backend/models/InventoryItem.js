const mongoose = require('mongoose');

const inventoryItemSchema = new mongoose.Schema({
    itemName: String,
    department: String,
    quantity: Number,
});

module.exports = mongoose.model('InventoryItem', inventoryItemSchema);
