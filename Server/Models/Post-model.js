const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    desc: {
        type: String,
        max: 500,
        required: true
    },
    image: {
        type: String,
        default: ""
    },
    likes: {
        type: Array,
        default: []

    },
    comments: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            comments: {
                type: String,
            }
        }
    ]

}, { timestamps: true });


module.exports = mongoose.model('Post', PostSchema);