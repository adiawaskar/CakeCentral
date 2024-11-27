const Enrollment = require('../models/enrollment.model');

// Handle enrollment form submission
const enrollStudent = async (req, res) => {
  const { name, email, contactNo, course } = req.body;

  // Validate the data
  if (!name || !email || !contactNo || !course) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Create a new enrollment
    const newEnrollment = new Enrollment({ name, email, contactNo, course });

    // Save the new enrollment to the database
    await newEnrollment.save();

    res.status(201).json({ message: "Enrollment successful", enrollment: newEnrollment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Fetch all enrolled students
const getEnrolledStudents = async (req, res) => {
  try {
    // Fetch all students from the "enrollment" collection
    const students = await Enrollment.find();
    res.status(200).json(students); // Send the students as a response
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ message: 'Failed to fetch students' });
  }
};

module.exports = {
  enrollStudent,
  getEnrolledStudents
};
