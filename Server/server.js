//initialize the server
const express = require('express');
const app = express();
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


// mongodb conection
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => { console.log("databess has been conected !") });

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
app.listen(8000, () => {
    console.log('Server is running on port: ' + 8000);
});