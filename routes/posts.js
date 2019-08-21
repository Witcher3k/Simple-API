const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send("POSTS");
})
router.post('/', (req, res) => {
    const { title, description } = req.body;
    const post = new Post({
        title: title,
        description: description
    })
    post.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => console.log(err));
})


module.exports = router;