const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ message: 'I want this to return the json in testing.json thats located at /dataSource folder' });
});

module.exports = router;
