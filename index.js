const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs')
const user = JSON.parse(fs.readFileSync('./user.json'))

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
--- DONE ---
*/
router.get('/home', (req,res) => {
  res.sendFile('C:/Users/d4tic/OneDrive/Documents/schoolStuff/GBC/Fall2022/Full Stack Dev/week05_lab_execrcise05/home.html');
});

/*
- Return all details from user.json file to client as JSON format
--- DONE ---
*/
router.get('/profile', (req,res) => {
  res.send(user)
});

/*
- Modify /login router to accept username and password as query string parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
    --- DONE ---
*/
router.get('/login', (req,res) => {
  let username = req.query.username
  let password = req.query.password
  if (username === user.username && password === user.password) {
    res.send({status: true, message: "User is valid."})
  } else if (username == user.username) {
    res.send({status: false, message: "Password is invalid."})
  } else {
    res.send({status: false, message: "Username is invalid."})
  }
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
    --- DONE ---
*/
router.get('/logout/:username', (req,res) => {
  const username = req.params.username
  res.send(`<b>${username} successfully logged out.</b>`);
});

app.use('/', router);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));