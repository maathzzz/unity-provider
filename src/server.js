const app = require('./app');
const path =  require('path');
const express = require('express');
const { PORT } = require('./config/env/environment');

const buildDirectory = path.join(__dirname, '../src/games');
app.use(express.static(buildDirectory));

app.get('*', (req, res) => {
    res.sendFile(path.join(buildDirectory, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server Running 🚀 on port ${PORT}`)
})
