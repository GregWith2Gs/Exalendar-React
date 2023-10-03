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

// https://forum.freecodecamp.org/t/nodejs-mysql-prepared-statements/426216 <- method to stop injections
app.post("/", (req, res) => {
    let data = req.body;
    var event_title = data.name;
    var event_type = data.type;
    var event_description = data.description;
    var event_location = data.location;
    var event_start = data.start;
    var event_end = data.end;
    var event_freq = data.freq;
    var event_end_date = data.end_date;
    var event_interval = data.interval;
    var event_byday = data.byday;
    res.send('Data Received: ' + JSON.stringify(data));
    const sql_code = `INSERT INTO events (event_title, event_type, event_description, event_location, 
      event_start, event_end, event_freq, event_end_date, event_interval, event_byday) VALUES (
      ${"'"+event_title+"'"},
      ${"'"+event_type+"'"},
      ${"'"+event_description+"'"},
      ${"'"+event_location+"'"},
      ${"'"+event_start+"'"},
      ${"'"+event_end+"'"},
      ${"'"+event_freq+"'"},
      ${"'"+event_end_date+"'"},
      ${"'"+event_interval+"'"},
      ${"'"+event_byday+"'"}
      )`;

    connection.query(sql_code, function (err, results) {
        if (err) throw err;
        console.log(results);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});