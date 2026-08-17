const express = require('express');
const router = express.Router();
const settings = require('../controllers/settingsController');
const auth = require('../middleware/auth');

router.get('/', settings.getSettings);
router.put('/', auth, settings.updateSettings);

module.exports = router;
