const express = require('express');

const rootController = require('../controllers');
const dashboardController = require('../controllers/dashboard');

const router = express.Router();

router.get('/', rootController.testAPI);
router.get('/generate', rootController.generateController);
router.get('/complete', rootController.completeController)
router.get('/prompts', dashboardController.getPrompt);
router.get('/items', dashboardController.getItems);
router.get('/labeled_items', dashboardController.getLabeledItems);

module.exports = router;
