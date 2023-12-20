const router = require('express').Router();
const { handleMail } = require('../../controllers/mail-controller');

// /api/contact-me
router.route('/contact-me').post(handleMail);

module.exports = router;
