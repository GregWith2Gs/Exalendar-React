const express = require("express");
const axios=require('axios');
const app = express();
const port = 4000;
const cors = require('cors');
app.use(cors())

require('dotenv').config();

const prompt = require("prompt-sync")({ sigint: true });

var mysql = require("mysql");
var bodyParser = require('body-parser');

var DiscordStrategy = require('passport-discord').Strategy;
var passport = require('passport');
var session  = require('express-session');
var scopes = ['identify', 'email'];
var ppprompt = 'consent';

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: prompt("DB Password:", {echo: ''}),
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

app.get('/login/discord', passport.authenticate('discord'));

app.get('/auth/discord',async(req,res)=>{
  console.log("served");
  //im not getting here somehow
  //needs to be fixed, something with discord
  const code=req.query.code;
  const params = new URLSearchParams();
  let user;
  params.append('client_id', process.env.CLIENT_ID);
  params.append('client_secret', process.env.CLIENT_SECRET);
  params.append('grant_type', 'authorization_code');
  params.append('code', code);
  params.append('redirect_uri', "http://localhost:3000/auth/discord");
  try{
      const response=await axios.post('https://discord.com/api/oauth2/token',params)
      const { access_token,token_type}=response.data;
      const userDataResponse=await axios.get('https://discord.com/api/users/@me',{
            headers:{
                authorization: `${token_type} ${access_token}`
            }
        })
        console.log('Data: ',userDataResponse.data)
        user={
            username:userDataResponse.data.username,
            email:userDataResponse.data.email,
            avatar:`https://cdn.discordapp.com/avatars/350284820586168321/80a993756f84e94536481f3f3c1eda16.png`

        }
        return res.send(
            `<div 
            style={{margin: '300px auto',
            'max-width': '400px',
            display: 'flex',
            'flex-direction': 'column',
            'align-items': 'center',
            'font-family': 'sans-serif',}}
            >
                <h3>Welcome ${user.username}</h3>
                <span>Email: ${user.email}</span>
                
                <img src="${user.avatar}"/>
            </div>`
        )
      
  }catch(error){
      console.log('Error',error)
      return res.send('Some error occurred! ')
  }
})


//passport stuff-----------

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new DiscordStrategy({
    clientID: process.env['CLIENT_ID'],
    clientSecret: process.env['CLIENT_SECRET'],
    callbackURL: 'http://localhost:3000/auth/discord',
    scope: scopes,
    prompt: ppprompt
}, function(accessToken, refreshToken, profile, done) {
    process.nextTick(function() {
        return done(null, profile);
    });
}));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.get('/', passport.authenticate('discord', { scope: scopes, prompt: prompt }), function(req, res) {});
app.get('/callback',
  passport.authenticate('discord', { failureRedirect: '/' }), function(req, res) { res.redirect('/info') } // auth success
);
app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

//-----------


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  console.log(process.env['TEST_VALUE'])
});