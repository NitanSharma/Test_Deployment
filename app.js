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

// 404
app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
});

// error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
});

const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

