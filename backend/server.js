const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());

/* =========================
   DATABASE CONNECTION
========================= */

const db = mysql.createConnection({

  host: "localhost",
  user: "studentadmin",
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

/* =========================
   HOME ROUTE
========================= */

app.get("/", (req, res) => {

  res.send(`

  <html>

    <head>

      <title>Student Portal Backend</title>

      <style>

        body{

          margin: 0;
          padding: 0;
          background: linear-gradient(to right, #141e30, #243b55);
          font-family: Arial, sans-serif;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;

        }

        .container{

          background: rgba(255,255,255,0.1);
          padding: 50px;
          border-radius: 25px;
          text-align: center;
          width: 700px;
          box-shadow: 0 0 20px rgba(0,0,0,0.4);

        }

        h1{

          font-size: 42px;
          color: #00ffd5;

        }

        p{

          font-size: 20px;
          margin-top: 20px;

        }

      </style>

    </head>

    <body>

      <div class="container">

        <h1>🚀 Student Portal Backend</h1>

        <p>Server Running Successfully</p>

        <p>AWS EC2 + Node.js + MySQL</p>

      </div>

    </body>

  </html>

  `);

});

/* =========================
   REGISTER API
========================= */

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

/* =========================
   LOGIN API
========================= */

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

/* =========================
   SERVER PORT
========================= */

app.listen(5000, () => {

  console.log("Server running on port 5000");

});
