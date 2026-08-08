const express = require('express');

const app = express();
const PORT = 3000;

// 1. ROUTE PARAMETERS
// :id is a route parameter.
// Express stores its value inside req.params.id

app.get('/user/:id', (req, res) => {
    const userid = req.params.id;

    res.send(
        `<h1>User Profile</h1>
         <p>You are viewing the profile for User ID:
         <strong>${userid}</strong></p>`
    );
});

// 2. MULTIPLE ROUTE PARAMETERS
// Example URL:
// http://localhost:3000/flights/BOM/DEL
// :from and :to are route parameters.

app.get('/flights/:from/:to', (req, res) => {
    // Destructuring multiple parameters
    const { from, to } = req.params;
    res.send(
        `Searching for flights departing from
         <b>${from}</b>
         and arriving at
         <b>${to}</b>`
    );
});


// 3. QUERY PARAMETERS
// Query parameters are accessed using req.query.
// They are NOT written in the route path.

app.get('/search', (req, res) => {

    const category = req.query.category;
    const sort = req.query.sort;

    res.json({
        message: 'Search Results',
        filteringBy: category || 'None',
        sortingBy: sort || 'Default'
    });
});


app.listen(PORT, () => {
    console.log(`Dynamic server running at http://localhost:${PORT}`);
});