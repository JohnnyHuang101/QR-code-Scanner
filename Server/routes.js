const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.get('/about', (req, res) => {
    res.send('This is a project created by Johnny out of Express and NodeJS. \
              After creating the project I will attempt to Containerize and plug \
              it on Dockerhub or smth. We will see if we get there. I am currently \
              a CS and Math Junior at WUSTL.');
});

router.post('/generate-qr', controller.generateQR);

//router.get('*', (req, res) => {
    //res.send('Theres nothing here go away.');
//});

module.exports = router;