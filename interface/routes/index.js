const express = require('express');

const router = express.Router();

const { celebrate, Segments } = require('celebrate')
const validation = require('../validation')

router.get('/', (req, res) => {
  res.status(200).send({
    success: 'true',    
    version: '1.0.0',
  });
});

module.exports = router;