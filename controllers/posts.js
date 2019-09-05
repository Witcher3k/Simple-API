const Post = require('../models/Post');


exports.postController = (req, res) => {
    const { title, description, tags } = req.body;
    const post = new Post({
        title: title,
        description: description,
        tags: tags
    })
    post.save()
        .then(data => {
            res.send("Post Added :)");
        })
        .catch(err => console.log(err))
}

exports.showPostController = (req, res) => {
    Post.find()
        .then(data => {
            console.log(data)
        })
        .catch(err => console.log(err));
    res.send("look in the console");
}

exports.showSpecyficPostController = (req, res, next) => {
    if (req.query.q) {
        const q = req.query.q;
        Post.find({ $text: { $search: q } })
            .then(data => {
                //if full words cannot be matched
                if (!data.length) {
                    //In case of spaces
                    const newReg = q.split(' ').join('|');
                    console.log("Using regex or tags");
                    Post.find({
                        $or: [
                            { title: { $regex: newReg, $options: 'gi' } },
                            { description: { $regex: newReg, $options: 'gi' } },
                            { tags: q }
                        ]
                    })
                        .then(data => {
                            if (!data.length) {
                                res.send("No data found")
                            } else {
                                res.send(data);
                            }
                        })
                        .catch(err => console.log(err))
                }
                else {
                    res.send(data);
                }
            })
            .catch(err => console.log(err))
    } else {
        next();
    }
}