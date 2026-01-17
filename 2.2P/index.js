// Express usage and the port number allotment
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// GET and calculate the square of the given input number
// Endpoint query
app.get('/square', (req, res) => {

    // Extracting the 'num' query parameter
    const num = parseFloat(req.query.num);

    // Checking for any invalid numbers 
    if (isNaN(num)) {
        return res.send("Error: Please provide a valid number using query parameter 'num'.");
    }

    // Calculating square of the number
    const square = num * num;

    // Print final result after calculation
    res.send(`The square of ${num} is: ${square}`);
});

// start the server and display running server port number
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});