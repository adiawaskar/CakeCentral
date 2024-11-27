const mongoose = require('mongoose');

// Define the Enrollment schema
const enrollmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  contactNo: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  }
}, { timestamps: true });

// Create the Enrollment model
const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

module.exports = Enrollment;
