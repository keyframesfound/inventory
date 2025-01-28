const express = require('express');
const router = express.Router();
const InventoryItem = require('../models/InventoryItem');

// ...existing code...
router.post('/add', async (req, res) => {
    const { itemName, department, quantity } = req.body;
    const item = new InventoryItem({ itemName, department, quantity });
    await item.save();
    res.json(item);
});

router.get('/:id', async (req, res) => {
    const item = await InventoryItem.findById(req.params.id);
    res.json(item);
});

module.exports = router;
