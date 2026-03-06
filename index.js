const express = require('express');
const app = express();

// All config from environment variables
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DATABASE_URL;
const API_KEY = process.env.API_KEY;

app.get('/', (req, res) => res.json({ status: 'ok' }));
app.listen(PORT, () => console.log(`Running on ${PORT}`));
