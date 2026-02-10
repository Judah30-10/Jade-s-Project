const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const multer = require("multer");

const app = express();
const PORT = process.env.PORT || 3000;

// Multer setup (for form data)
const upload = multer();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Handle form submission
app.post('/submit', upload.none(), (req, res) => {
    const { name, email, message } = req.body;

    // Validate
    if (!name || !email || !message) {
        return res.status(400).send('All fields are required!');
    }

    const data = Name: ${name}, Email: ${email}, Message: ${message}\n;
    const filePath = path.join(__dirname, 'messages.txt');

    fs.appendFile(filePath, data, { flag: 'a+' }, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error saving message.');
        }
        res.send('Message sent successfully!');
    });
});

// Start server
app.listen(PORT, () => {
console.log(`Server running at http://localhost:${PORT}`);
});
