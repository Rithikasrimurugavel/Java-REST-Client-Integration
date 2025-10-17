const express = require('express');
const demoController = require('./demoController');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/client', demoController);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
