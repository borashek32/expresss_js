"use strict";
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    const helloMesage = 'Hello Incubator!!!!!!';
    res.send(helloMesage);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
