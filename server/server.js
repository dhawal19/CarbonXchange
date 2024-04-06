const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const connectDB = require('./config/connectDB');
const credentials = require('./middleware/credentials');
const corsOptions = require('./config/corsOptions');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

connectDB();
app.use(credentials);
app.use(cors(corsOptions));
// middleware
app.use(bodyParser.json()); // add body parser
app.use(bodyParser.urlencoded({ extended: true })); // add body parser
app.use(cookieParser());

app.use('/login', require('./routes/login'));
app.use('/signup', require('./routes/signup'));
app.use('/logout', require('./routes/logout'));
app.use('/ngo', require('./routes/ngo'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});  