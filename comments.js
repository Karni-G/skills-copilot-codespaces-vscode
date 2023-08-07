// Create web server
const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

// Create comment
// api/comments
router.post('/', 
    auth,
    [
        check('comment', 'Comment is required').not().isEmpty(),
        check('idPost', 'Id post is required').not().isEmpty()
    ],
    commentsController.createComment
);

// Get comments by post
router.get('/',
    auth,
    commentsController.getCommentsByPost
);

// Update comment
router.put('/:id',
    auth,
    commentsController.updateComment
);

// Delete comment
router.delete('/:id',
    auth,
    commentsController.deleteComment
);

module.exports = router;