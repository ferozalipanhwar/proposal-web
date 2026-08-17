const express = require('express');
const router = express.Router();

const memories = require('../controllers/memoriesController');
const auth = require('../middleware/auth');
const { body, param } = require('express-validator');
const validate = require('../middleware/validate');

router.get('/', memories.getMemories);
router.get('/:id', [param('id').isMongoId()], validate, memories.getMemory);
router.post('/', [auth, body('title').isLength({ min: 1 }).trim().escape(), body('description').optional().trim()], validate, memories.createMemory);
router.put('/:id', [auth, param('id').isMongoId(), body('title').optional().isString().trim()], validate, memories.updateMemory);
router.delete('/:id', [auth, param('id').isMongoId()], validate, memories.deleteMemory);

module.exports = router;
