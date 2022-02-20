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
    allProfilePicture: [
        photo = {
            type: String,
            default: ""
        }
    ],
    AllCoverPhotos: [
        photo = {
            type: String,
            default: ""
        }
    ],
    coverPicture: {
        type: String,
        default: ""
    },
    uploads: [
        photo = {
            type: String,
            default: ""
        }
    ],
    videos: [
        video = {
            type: String,
            default: ""
        }],
    friends: [
        friend = {
            type: String,
            default: ""
        }
    ],
    sendFriendRequests: [
        friend = {
            type: String,
            default: ""
        }
    ],
    recievedFriendRequests: [
        friend = {
            type: String,
            default: ""
        }
    ],
    notifications: {
        type: Array
    },
    flowers: [
        flower = {
            type: String,
            default: ""
        }
    ],
    flowings: [
        flow = {
            type: String,
            default: ""
        }
    ],
    biography: {
        type: String,
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
        default: "",

    },
    cuntry: {
        type: String,
        default: "",

    },
    work: {
        type: String,
        default: "",

    },
    priparySchool: {
        type: String,
        default: "",

    },
    highSchool: {
        type: String,
        default: "",
    },
    college: {
        type: String,
        default: "",
    },
    university: {
        type: String,
        default: "",
    },
    relationshipStatus: {
        type: String,
        default: "",
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);