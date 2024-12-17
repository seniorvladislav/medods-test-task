const express = require('express');
const {
  generateTokens,
  refreshTokens,
} = require('../controllers/auth.controller');
const { protectedRoute } = require('../middleware/privateRoute');
// const { checkBlackList } = require("../middleware/checkBlackList");

const router = express.Router();

router.post('/token', generateTokens);
router.post('/refresh', refreshTokens);
router.post('/verify', protectedRoute, async (req, res) => {
  res.json({
    message: 'Access granted to protected route',
  });
});

module.exports = router;
