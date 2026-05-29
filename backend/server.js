const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createPool({
  host: "localhost",
  user: "studentadmin",
  password: "VPr@7475",
  database: "student_portal",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
db.getConnection((err, connection) => {
  if (err) {
    console.log("Database Connection Failed:", err.message);
  } else {
    console.log("Database Connected Successfully");
    connection.release();
  }
});
app.get("/", (req, res) => {
  res.send("Student Portal Backend Running");
});
app.post("/register", (req, res) => {
  const { name, email, department, password } = req.body;
  if (!name || !email || !department || !password) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }
  const sql = "INSERT INTO students (name, email, department, password) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, email, department, password], (err, result) => {
    if (err) {
      console.log("Register Error:", err.message);
      return res.status(500).json({ success: false, message: "Registration Failed" });
    }
    return res.status(201).json({ success: true, message: "Student Registered Successfully" });
  });
});
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email and password are required" });
  }
  const sql = "SELECT * FROM students WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      return res.status(500).json({ success: false, message: "Server Error" });
    }
    if (result.length > 0) {
      const student = result[0];
      return res.status(200).json({ success: true, message: "Login Success", student: { id: student.id, name: student.name, email: student.email, department: student.department } });
    } else {
      return res.status(401).json({ success: false, message: "Invalid Email or Password" });
    }
  });
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
