const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRoutes = require('./routes/user.route');
const enrollmentRoutes = require('./routes/enrollment.route');  // Import new enrollment routes
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'  // Allow the frontend to access this server
}));

// MongoDB Connection
mongoose.connect(`${process.env.MONGO_URI}/cake-central`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

// Routes
app.use('/api', userRoutes);
app.use('/api', enrollmentRoutes);  // Use the enrollment routes

// Start the server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
