// server.js
const express = require("express");
const path = require("path");
const app = express();
const booksRoutes = require("./routes/books.routes");

app.use(express.json());

app.use("/api", booksRoutes);


app.use(express.static(path.join(__dirname, "public")));


app.get("/books", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
