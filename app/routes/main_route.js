const router = require('express').Router();
const MainController = require('../controllers/main_controller');

router.post('/crawl', MainController.crawl);
router.post('/scrap', MainController.scrap);

module.exports = router;
