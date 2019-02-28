const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const app = express();
const config = require('./config')
const port = config.port;

// CORS
app.use(function(req, res, next) {
    var allowedOrigins = ['http://127.0.0.1:8010', 'http://localhost:8010', 'http://127.0.0.1:4203', 'http://localhost:4203'];
    var origin = req.headers.origin;
    if(allowedOrigins.indexOf(origin) > -1){
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
});

app.use(bodyParser.json());

// massive({
//     host: config.host
//     , port: config.dbPort
//     , database: config.database
//     , user: config.user
//     , password: config.password
//   }).then(function (db) {
//     app.set('db', db),
//       console.log('connected to database')
//   });
var id = 0;
var workouts = [];

app.get('/api/workouts', (req, res)=> {
    res.status(200).send(workouts);
});

app.get('/api/workout', (req, res) => {
    req.query.id--;
    res.status(200).send(workouts[req.query.id]);
});

app.post('/api/createWorkout', (req, res) => {
    id++;
    req.body.id = id;
    workouts.push(req.body);
    res.status(200).send(workouts);
});

app.put('/api/update', (req, res) => {
    let originalWorkoutIdx = workouts.forEach((e, i)=> {
        if(workouts.indexOf(e.id, req.body.id) > -1){
            return i;
        }
    });
    workouts.splice(originalWorkoutIdx, 1, req.body);
    res.status(200).send(workouts);
});

app.delete('/api/workout', (req, res) => {
    req.query.id--;
    workouts.splice(req.query.id, 1);
    res.status(200).send(workouts);
});

app.listen(port, function(){
    console.log('listening on port: ', port);
    return "0.0.0.0";
});