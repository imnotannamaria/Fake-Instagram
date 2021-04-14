const express = require('express');
const router = express.Router();
const postsController = require('../controllers/PostsController');

/* GET users listing. */
router.get('/', postsController.index);

router.get('/:usuarios_id', postsController.show);

router.post('/', postsController.create);

router.put('/:id', postsController.update);

router.delete('/:id', postsController.delete);


module.exports = router;