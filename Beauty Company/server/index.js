const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const session = require('express-session');
const routes = require('./src/routes/routes');

const app = express();
const router = express.Router();


const corsConfig = {
    origin: true,
    credentials: true,
};

app.use(cors(corsConfig));
app.options('*', cors(corsConfig));


var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'beauty-company',
});


db.connect(function (err) {
    if (err) {
        console.log(err)
        console.log('Error connecting to db')
    } else {
        console.log('Connection established');
    }
});

const port = 8030;

app.listen(port, function (err) {
    if (err) {
        console.log('Server failed to start')
    } else {
        console.log("Server started at port", `http://localhost:${port}/showproducts`);
    }
});

//setting up the enviorment
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cookieparser());

app.use(session({
    key: routes.userId,
    secret: "subscribe",
    resave: true,
    saveUninitialized: true,
    cookie: {
        expires: 60 * 60 * 24,
    }
}))


//making our db accessible to db
app.use(function (req, res, next) {
    req.db = db;
    next();
});

app.use("/", routes);

app.use("/src/image", express.static('./src/image'))

module.exports = router;