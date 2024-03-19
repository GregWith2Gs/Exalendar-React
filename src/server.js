const express=require('express');
const axios=require('axios');
const app = express();
const port = 4000;
const cors = require('cors');
app.use(cors())

const prompt = require("prompt-sync")({ sigint: true });

var mysql = require("mysql");
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: prompt("DB Password:"),
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
    res.send('Data Received: ' + JSON.stringify(data));
    const sql_code = `INSERT INTO events (class_name, event_title, event_type, event_description, event_location, event_start, event_end, event_freq, event_end_date, event_interval, event_byday) VALUES (?,?,?,?,?,?,?,?,?,?,?)`;

      connection.query(sql_code, [data.className, data.name, data.type, data.description, data.location, data.start, data.end, 
        data.freq, data.end_date, data.interval, data.byday], function (err, results, fields) {
        if (err) throw err;
        console.log(results);
    });
});


app.get('/login',(req,res)=>{
  console.log("login time")
  res.send(`
      <div style="margin: 300px auto;
      max-width: 400px;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: sans-serif;"
      >
          <h3>Welcome to Discord OAuth NodeJS App</h3>
          <p>Click on the below button to get started!</p>
          <a 
              href="https://discord.com/oauth2/authorize?client_id=1217203680294469695&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Fauth%2Fdiscord&scope=identify+email"
              style="outline: none;
              padding: 10px;
              border: none;
              font-size: 20px;
              margin-top: 20px;
              border-radius: 8px;
              background: #6D81CD;
              cursor:pointer;
              text-decoration: none;
              color: white;"
          >
          Login with Discord</a>
      </div>
  `)
})

app.get('/auth/discord',async(req,res)=>{
  const code=req.query.code;
  const params = new URLSearchParams();
  let user;
  params.append('client_id', process.env.CLIENT_ID);
  params.append('client_secret', process.env.CLIENT_SECRET);
  params.append('grant_type', 'authorization_code');
  params.append('code', code);
  params.append('redirect_uri', "http://localhost:4000/auth/discord");
  try{
      const response=await axios.post('https://discord.com/api/oauth2/token',params)
      const { access_token,token_type}=response.data;
      
  }catch(error){
      console.log('Error',error)
      return res.send('Some error occurred! ')
  }
})




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});