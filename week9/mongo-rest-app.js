
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Middleware: Allows the server to understand JSON data
app.use(express.json());

// STEP 1 & 2: MongoDB Atlas Configuration & Connection

// Replace with your actual MongoDB Atlas connection string
const dbURI =
  "mongodb+srv://admin:password123@cluster0.mongodb.net/LabDB?retryWrites=true&w=majority";

// Connect to MongoDB Atlas
mongoose.connect(dbURI)
  .then(() => console.log("Connected to MongoDB Atlas successfully!"))
  .catch(err => console.error("Database connection error:", err));

// STEP 3: Create Schema and Model

// Schema defines what a Student object looks like
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rollNumber: {
    type: Number,
    required: true,
    unique: true
  },
  course: String,
  isActive: {
    type: Boolean,
    default: true
  }
});

// Model used to perform CRUD operations
const Student = mongoose.model('Student', studentSchema);

// STEP 4 & 5: CRUD Operations & RESTful Services

// CREATE: Add a new student (POST)
app.post('/students', async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    const savedStudent = await newStudent.save();

    res.status(201).json(savedStudent);
  } catch (error) {
    res.status(400).json({
      message: "Error saving student",
      error: error.message
    });
  }
});

// READ: Get all students (GET)
app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching students",
      error: error.message
    });
  }
});

// UPDATE: Modify student by ID (PUT)
app.put('/students/:id', async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(400).json({
      message: "Error updating student",
      error: error.message
    });
  }
});

// DELETE: Remove student by ID (DELETE)
app.delete('/students/:id', async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(
      req.params.id
    );

    if (!deletedStudent) {
      return res.status(404).json({
        message: "Student not found"
      });
    }

    res.status(200).json({
      message: "Student record deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting student",
      error: error.message
    });
  }
});

// Start the Express Server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  console.log("Ready for CRUD operations testing.");
});
