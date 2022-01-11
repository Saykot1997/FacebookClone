//initialize the server
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const mongoose = require('mongoose');
const cors = require('cors');
const env = require('dotenv');
const authRoutes = require("./Routes/Auth-router");
const userRoutes = require("./Routes/User-router");
const postRoutes = require("./Routes/Post-router");
const cookieParser = require('cookie-parser');


// databess conection
mongoose.connect('mongodb://localhost:27017/socal-app', { useNewUrlParser: true, useUnifiedTopology: true }, () => { console.log("databess has been conected !") });

// dotenv config
env.config();

app.use(cors())

// cookie parser
app.use(cookieParser());

// express json
app.use(express.json());

//get route
app.get('/', async (req, res) => {
    res.send('hello world');
});

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);


// server listen
app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});