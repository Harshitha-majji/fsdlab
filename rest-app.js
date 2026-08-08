const express = require('express');

const app = express();

const PORT = 3000;

// ==========================================
// MIDDLEWARE
// ==========================================

// Allows Express to read JSON data sent
// in the body of POST and PUT requests.
app.use(express.json());

// ==========================================
// MOCK DATABASE
// ==========================================

// A simple array of objects
let tasks = [
    {
        id: 1,
        title: "Learn Express"
    },
    {
        id: 2,
        title: "Master REST APIs"
    }
];

// ==========================================
// 1. GET - Read all tasks
// ==========================================

// URL:
// http://localhost:3000/tasks

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// ==========================================
// 2. POST - Create a new task
// ==========================================

// URL:
// http://localhost:3000/tasks
//
// Example JSON body:
// {
//     "title": "New Task"
// }
//
// OR
//
// {
//     "id": 3,
//     "title": "New Task"
// }

app.post('/tasks', (req, res) => {

    const newTask = {
        id: req.body.id != null ? req.body.id : tasks.length + 1,
        title: req.body.title
    };

    tasks.push(newTask);

    // 201 = Created Successfully
    res.status(201).json(newTask);
});

// ==========================================
// 3. PUT - Update an existing task
// ==========================================

// URL Example:
// http://localhost:3000/tasks/1

app.put('/tasks/:id', (req, res) => {

    // Get ID from the URL
    const id = parseInt(req.params.id);

    // Find the task with this ID
    const task = tasks.find(t => t.id === id);

    if (task) {

        // Update the title
        task.title = req.body.title;

        res.json({
            message: "Task updated successfully",
            task: task
        });

    } else {

        // 404 = Resource not found
        res.status(404).json({
            error: "Task not found"
        });
    }
});

// ==========================================
// 4. DELETE - Remove a task
// ==========================================

// URL Example:
// http://localhost:3000/tasks/2

app.delete('/tasks/:id', (req, res) => {

    // Get ID from the URL
    const id = parseInt(req.params.id);

    // Remove the task with the given ID
    tasks = tasks.filter(t => t.id !== id);

    res.json({
        message: `Task ${id} deleted`,
        remainingTasks: tasks
    });
});

// ==========================================
// START SERVER
// ==========================================

app.listen(PORT, () => {
    console.log(`REST API Server running at http://localhost:${PORT}`);
});