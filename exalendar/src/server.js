const express = require("express");
const app = express();
const port = 4000;
const cors = require('cors');
app.use(cors())

var mysql = require("mysql");
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "exalendar",
  port: 3306,
  charset: "utf8mb4"
});

connection.connect(err => {
  if (!err) {
    console.log("DB Connection Succeeded");
  } else {
    console.log("DB Connection Failed");
  }
});

app.get("/", (req, res) => {
    const sql_code = "SELECT * FROM events";
    connection.query(sql_code, function (err, results) {
        if (err) throw err;
        res.json({results});
    });
});

app.post("/", (req, res) => {
    let data = req.body;
    var event_title = data.name;
    var event_type = data.type;
    var event_description = data.event_description;
    var event_date_start = data.event_date_start;
    var event_date_end = data.event_date_end;
    res.send('Data Received: ' + JSON.stringify(data));
    const sql_code = `INSERT INTO events (event_type, event_title, event_description, event_date_start, event_date_end) VALUES (
      ${"'"+event_type+"'"},
      ${"'"+event_title+"'"},
      ${"'"+event_description+"'"},
      ${"'"+event_date_start+"'"},
      ${"'"+event_date_end+"'"}
      )`;

    connection.query(sql_code, function (err, results) {
        if (err) throw err;
        console.log(results);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});