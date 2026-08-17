const express = require('express');
const router = express.Router();

const poems = require('../controllers/poemsController');
const auth = require('../middleware/auth');
const { body, param } = require('express-validator');
const validate = require('../middleware/validate');

router.get('/', poems.getPoems);
router.get('/:id', [param('id').isMongoId()], validate, poems.getPoem);
router.post('/', [auth, body('title').isLength({ min: 1 }).trim().escape(), body('content').isLength({ min: 1 }).trim()], validate, poems.createPoem);
router.put('/:id', [auth, param('id').isMongoId(), body('title').optional().isString().trim(), body('content').optional().isString().trim()], validate, poems.updatePoem);
router.delete('/:id', [auth, param('id').isMongoId()], validate, poems.deletePoem);

module.exports = router;
