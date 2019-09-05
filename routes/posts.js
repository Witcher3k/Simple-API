const express = require('express');
const router = express.Router();
const { postController, showPostController, showSpecyficPostController } = require('../controllers/posts');


//get a specyfic post
router.get('/', showSpecyficPostController)
//Get all posts
router.get('/', showPostController);

//submit a post
router.post('/', postController);




module.exports = router;