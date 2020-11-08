const express = require('express');
const path = require('path');
// const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors')
const session = require('express-session');
const db = require('./db/db.js');
// const mongoose = require('mongoose');
// require('dotenv').config();

// const next = require('next');
// const dev = process.env.PORT !== '80' ? true : false;
// const nextApp = next({ dev });
// const handle = nextApp.getRequestHandler(); //part of next config

const port = 80;
console.log(process.env)
//Configure Mongoose
// if (port == "3022") {
//     console.log("dev server running")
//     mongoose.connect(process.env.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true });
//     mongoose.set('debug', true);
// } else {
//     mongoose.connect(process.env.MONGODB_PROD, { useNewUrlParser: true, useUnifiedTopology: true });
// }


const app = express()
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, './build'))); // Point static path to build
app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

require('./models');
require('./config/passport');
app.use(require('./routes'));

// app.get('*', (req, res) => {
//     console.log("test");
//     return handle(req, res) // for all the react stuff
// })
app.listen(port, err => {
    if (err) throw err;
    console.log(`ready at http://localhost:${port}`)
})
