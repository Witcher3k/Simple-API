const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: String,
    date: {
        type: Date,
        default: Date.now
    },
    tags: [String]
})

const Post = mongoose.model('Posts', PostSchema);

Post.collection.createIndex({ title: 'text', description: 'text' });


module.exports = Post;

