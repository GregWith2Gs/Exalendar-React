const express = require('express');
const router = express.Router();

// Define routes
router.get('/submitEvent', (req, res) => {
  console.log('testing');
});

module.exports = router;