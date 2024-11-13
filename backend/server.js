const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware setup
const corsOptions = {
  origin: 'http://localhost:3000', // React frontend URL
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
};
app.use(cors(corsOptions));
app.use(express.json());  // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Define your Dog schema (without image field)
const dogSchema = new mongoose.Schema({
  name: String,
  age: String,
  breed: String,
  color: String,
  size: String,
  markings: String,
  gender: String,
});

const Dog = mongoose.model('Dog', dogSchema);

// POST route to handle dog form submission (without image upload)
app.post('/api/dog', async (req, res) => {
  console.log("Received data:", req.body);  // Log form data

  const { name, age, breed, color, size, markings, gender } = req.body;

  if (!name || !age || !breed || !color || !size || !markings || !gender) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const newDog = new Dog({
      name,
      age,
      breed,
      color,
      size,
      markings,
      gender,
    });

    await newDog.save();
    res.status(201).json({ message: 'Dog information saved!' });
  } catch (err) {
    console.error("Error saving dog info:", err);
    res.status(500).json({ error: 'Error submitting the form' });
  }
});

// Serve the images from the uploads folder (removed since no images are handled anymore)
// app.use('/uploads', express.static('uploads'));  <-- Removed

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
