const express = require('express');
const router = express.Router();
const { enrollStudent, getEnrolledStudents } = require('../controllers/enrollment.controller');

// POST route for enrolling a student
router.post('/enroll', enrollStudent);
router.get('/enrolled', getEnrolledStudents);

module.exports = router;
