var express = require('express');
var router = express.Router();
const postsController = require('../controllers/PostsController');

/* GET home page. */
router.get('/', postsController.index);

module.exports = router;
