const express = require('express');

// /d:/Test_Deployment/app.js

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

app.get('/health', (req, res) => {
    res.json({ status: 'ok', message : "Health is good" });
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

