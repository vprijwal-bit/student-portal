const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "VPr@7475",
  database: "student_portal"
});

db.connect((err) => {

  if(err){
    console.log("Database Connection Failed");
  }

  else{
    console.log("Database Connected");
  }

});

app.get("/", (req, res) => {
  res.send("Student Portal Backend Running");
});

app.post("/register", (req, res) => {

  const { name, email, department, password } = req.body;

  const sql =
    "INSERT INTO students (name, email, department, password) VALUES (?, ?, ?, ?)";

  db.query(
    sql,
    [name, email, department, password],
    (err, result) => {

      if(err){
        res.send("Registration Failed");
      }

      else{
        res.send("Student Registered Successfully");
      }

    }
  );

});

app.post("/login", (req, res) => {

  const { email, password } = req.body;

  const sql =
    "SELECT * FROM students WHERE email = ? AND password = ?";

  db.query(
    sql,
    [email, password],
    (err, result) => {

      if(err){
        res.send("Login Failed");
      }

      else{

        if(result.length > 0){
          res.send("Login Success");
        }

        else{
          res.send("Invalid Email or Password");
        }

      }

    }
  );

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});