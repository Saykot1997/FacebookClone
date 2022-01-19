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
    video: {
        type: String,
        default: ""
    },
    likes: [
        userId = {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    comments: [

        comment = {

            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },

            comentData: String,

            replaies: [

                replay = {

                    user: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "User"
                    },

                    replayData: String,

                    createdAt: {
                        type: Date,
                        default: Date.now
                    }
                }
            ],
            likes: [
                user = {
                    type: mongoose.Schema.Types.ObjectId,
                }
            ],
            createdAt: {
                type: Date,
                default: Date.now
            }

        }
    ]

}, { timestamps: true });


module.exports = mongoose.model('Post', PostSchema);