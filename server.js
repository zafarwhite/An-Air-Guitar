const express = require('express');
const enableWs = require('express-ws');
let fs = require('fs');
// const URL = https://canvas2dgame.herokuapp.com;
const app = express();
const expressWs = enableWs(app);
app.use(express.static('public'));

const port = process.env.PORT || 3000;


app.listen(port, function () {
    console.log('Server is working now, click http://127.0.0.1:3000');
});