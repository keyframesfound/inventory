const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/inventory', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const ticketRoutes = require('./routes/tickets');
const inventoryRoutes = require('./routes/inventory');
const borrowingRoutes = require('./routes/borrowing');

app.use('/api/tickets', ticketRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/borrowing', borrowingRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
