const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.json({ message: 'API Routes' });
});

router.get('/health', (req, res) => {
  res.json({ status: 'ok', message: "API is running!"})
});

module.exports = router;
