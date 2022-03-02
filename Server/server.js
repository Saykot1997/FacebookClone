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
const friendsRoutes = require("./Routes/Friends-router");
const PasswordResetRoutes = require("./Routes/PasswordReset-router");
const path = require('path');
const Authgurd = require("./Authgurd/Authgurd");

// dotenv config
env.config();

//frontend config
app.use(cors())

// body parser
app.use(express.json());

app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, "uploads")))
// app.use(express.static('uploads'));


// databess conection
mongoose.connect('mongodb://localhost:27017/socal-app', { useNewUrlParser: true, useUnifiedTopology: true }, () => { console.log("databess has been conected !") });

//get route
app.get('/', Authgurd, async (req, res) => {
    res.send('hello world');
});

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/post', postRoutes);
app.use('/api/friend', friendsRoutes);
app.use('/api/password', PasswordResetRoutes);


// server listen
app.listen(port, () => {
    console.log('Server is running on port: ' + port);
});