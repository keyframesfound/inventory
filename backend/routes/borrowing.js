const express = require('express');
const router = express.Router();
const BorrowedItem = require('../models/BorrowedItem');

// ...existing code...
router.post('/borrow', async (req, res) => {
    const { itemName, borrowerName, returnDate } = req.body;
    const borrowedItem = new BorrowedItem({ itemName, borrowerName, returnDate });
    await borrowedItem.save();
    res.json(borrowedItem);
});

router.get('/:id', async (req, res) => {
    const borrowedItem = await BorrowedItem.findById(req.params.id);
    res.json(borrowedItem);
});

module.exports = router;
