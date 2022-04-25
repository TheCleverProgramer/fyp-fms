const express = require('express')
      router = express.Router();
router
    .get('/login', (req, res)=>res.render('login'))
    .post();

module.exports = router;