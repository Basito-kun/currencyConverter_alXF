// BACK END: For Node.js server-side

const express = require('express');
const axios = require('axios');
const app = express();

// Middleware to serve static files (like index.html)
app.use(express.static(__dirname));

// Input your API key if necessary
const API_KEY = '0aebd546ae294e6202c0c6ae';
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/`;

// Endpoint to get conversion rates
app.get('/convert', async (req, res) => {
    const { from, to, amount } = req.query;

    if (!from || !to || !amount) {
        return res.status(400).json({ error: 'Please provide from, to, and amount parameters.' });
    }

    try {
        // Fetching exchange rates for the "from" currency
        const response = await axios.get(`${BASE_URL}${from.toUpperCase()}`);
        const rates = response.data.conversion_rates;

        if (!rates[to.toUpperCase()]) {
            return res.status(400).json({ error: 'Invalid currency code.' });
        }

        const convertedAmount = rates[to.toUpperCase()] * amount;
        res.json({ from, to, amount, convertedAmount });    
    } catch (error) {
        console.error('Error fetching conversion rate:', error);
        res.status(500).json({ error: 'Error fetching conversion rate.' });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
