const express = require('express');
const { signup, login, logout } = require('../controllers/user.controller');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', login);

module.exports = router;
