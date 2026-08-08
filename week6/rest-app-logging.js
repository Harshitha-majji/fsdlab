const express = require('express');
const app = express();
const PORT = 3000;

/*
 * 1. BUILT-IN MIDDLEWARE
 * Allows Express to read JSON data from POST/PUT requests.
 */
app.use(express.json());

/*
 * 2. CUSTOM LOGGING MIDDLEWARE (Global)
 * This middleware runs for EVERY request.
 */
app.use((req, res, next) => {
    const timestamp = new Date().toLocaleString();

    console.log(
        `[${timestamp}] Incoming Request: ${req.method} to ${req.url}`
    );

    // Move to the next middleware/route
    next();
});

/*
 * 3. CUSTOM SECURITY MIDDLEWARE
 * Checks whether the request contains a User-Agent.
 */
app.use((req, res, next) => {
    const userAgent = req.get('User-Agent');

    if (!userAgent) {
        return res.status(400).json({
            error: "Browser identification missing"
        });
    }

    // If everything is fine, proceed to routes
    next();
});

/* -------- MOCK DATABASE -------- */

let tasks = [
    { id: 1, title: "Learn Express" },
    { id: 2, title: "Master REST APIs" }
];

/* -------- ROUTES -------- */

/*
 * GET - Read all tasks
 */
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

/*
 * POST - Create a new task
 * Demonstrates req.body and ID generation.
 */
app.post('/tasks', (req, res) => {

    const newTask = {
        // If user provides an ID, use it.
        // Otherwise generate ID using array length + 1.
        id: req.body.id != null ? req.body.id : tasks.length + 1,
        title: req.body.title
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
});

/*
 * PUT - Update a task
 * Dynamic URL: /tasks/:id
 */
app.put('/tasks/:id', (req, res) => {

    const id = parseInt(req.params.id);

    const task = tasks.find(t => t.id === id);

    if (task) {
        task.title = req.body.title;

        res.json({
            message: "Task updated successfully",
            task: task
        });
    } else {
        res.status(404).json({
            error: "Task not found"
        });
    }
});

/*
 * DELETE - Remove a task
 * Dynamic URL: /tasks/:id
 */
app.delete('/tasks/:id', (req, res) => {

    const id = parseInt(req.params.id);

    tasks = tasks.filter(t => t.id !== id);

    res.json({
        message: `Task ${id} deleted`,
        remainingTasks: tasks
    });
});

/* -------- START SERVER -------- */

app.listen(PORT, () => {

    console.log('======================================');
    console.log(`REST API Server running at http://localhost:${PORT}`);
    console.log('Listening for requests...');
    console.log('======================================');

});