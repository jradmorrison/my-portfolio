const { mail } = require('../utils/nodemailer');

module.exports = {
  handleMail: async (req, res) => {
    try {
      const emailPackage = req.body;
      const result = await mail(emailPackage);
      res.json(result);
    } catch (error) {
      console.error(error);
    }
  },
};
