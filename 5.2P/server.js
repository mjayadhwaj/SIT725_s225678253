// basic express server setup with MVC routing
const express = require("express");
const path = require("path");
const app = express();
const booksRoutes = require("./routes/books.routes");

app.use(express.json());

// api routes
app.use("/api", booksRoutes);

// serve public folder
app.use(express.static(path.join(__dirname, "public")));

// main client page
app.get("/books", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
