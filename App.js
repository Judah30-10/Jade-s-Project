const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve all files in 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Contact form route
app.post("/submit", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.send("All fields required");
  }

  const text =
`------------------------
Name: ${name}
Email: ${email}
Message: ${message}
Date: ${new Date().toLocaleString()}
------------------------\n`;

  fs.appendFile("messages.txt", text, (err) => {
    if (err) {
      return res.send("Error saving message");
    }
    res.send("Message saved successfully");
  });
});

app.listen(PORT, () => {
  console.log(const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve all files in 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Contact form route
app.post("/submit", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.send("All fields required");
  }

  const text =
`------------------------
Name: ${name}
Email: ${email}
Message: ${message}
Date: ${new Date().toLocaleString()}
------------------------\n`;

  fs.appendFile("messages.txt", text, (err) => {
    if (err) {
      return res.send("Error saving message");
    }
    res.send("Message saved successfully");
  });
});

app.listen(PORT, () => {
 console.log(`Server running at http://localhost:${PORT}`);
});
