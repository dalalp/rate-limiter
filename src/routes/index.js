const express = require('express');
const rateLimiter = require('../middlewares/rateLimiter');

const router = express.Router();

router.get('/', rateLimiter, (req, res) => {
    res.send('Welcome to the rate-limited API!');
});

module.exports = router;
