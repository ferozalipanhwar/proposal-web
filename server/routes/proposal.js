
const express = require('express');
const router = express.Router();
const proposal = require('../controllers/proposalController');
const auth = require('../middleware/auth');
const { body } = require('express-validator');
const validate = require('../middleware/validate');

router.post('/', [body('response').isLength({ min: 1 }).trim().escape()], validate, proposal.submitResponse);
router.get('/', auth, proposal.listResponses);

module.exports = router;
