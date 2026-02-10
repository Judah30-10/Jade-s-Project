const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve static files from /public
app.use(express.static(path.join(__dirname, "public")));

// handle form submission
app.post("/submit", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send("All fields are required");
  }

  const text = `
------------------------
Name: ${name}
Email: ${email}
Message: ${message}
Date: ${new Date().toLocaleString()}
------------------------
`;

  fs.appendFile("messages.txt", text, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error saving message");
    }
    res.send("Message saved successfully");
  });
});

// start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
