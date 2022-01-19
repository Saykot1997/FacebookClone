const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    sureName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    email: {
        type: String,
        default: "",
        unique: false
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    mobileNumber: {
        type: String,
        default: "",
        unique: false
    },
    birthDay: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        default: ""
    },
    coverPicture: {
        type: String,
        default: ""
    },
    flowers: {
        type: Array,
        default: []
    },
    flowings: {
        type: Array,
        default: []
    },
    timelinePost: [
        post = {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post'
        }
    ],
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    desc: {
        type: String,
        max: 50
    },
    city: {
        type: String,
        max: 50
    },
    from: {
        type: String,
        max: 50
    },
    relationship: {
        type: Number,
        enum: [1, 2]
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);