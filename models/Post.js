const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    artist: {
        type: String,
        required: true
    },
    songName: {
        type: String,
        required: true
    },
    lyric: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: false
    },
    spotifyLink: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Posts', PostSchema);

