const mongoose = require('mongoose');
var express = require("express");
var app = express();


app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost:27017/TestUser_DB')
  .then(() => console.log("Connected to MongoDB!"))
  .catch(err => console.log(err));


mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');
});

const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String, 
});

const Project = mongoose.model('Project', ProjectSchema);

const cardList = [
    {
        title: "Book 5",
        image: "images/book1.jpg",
        link: "About Book 5",
        desciption: "This book helps to gain knowledge about strong communication skills"
    },
    {
        title: "Book 6",
        image: "images/book3.jpg",
        link: "About Book 6",
        desciption: "The book is about the most talented skills to be learned in 2026"
    }
];

app.get('/api/projects', async (req, res) => {
    try {
        const projects = await Project.find({});
        res.json({ statusCode: 200, data: projects, message: "Success" });
    } catch (error) {
        res.json({ statusCode: 500, message: "Database Error", error });
    }
});

const sampleProject = new Project({
  title: "Book 7",
  image: "images/book2.jpg",
  link: "About Book 6",
  description: "New book to improve the knowledge"
});

sampleProject.save().then(() => {
  console.log("Sample project saved! successfully!");
});

var port = process.env.port || 3000;
app.listen(port, () => {
    console.log("App listening to: " + port);
});
