const { mail } = require('../utils/nodemailer');

module.exports = {
  handleMail: async (req, res) => {
    try {
      const emailPackage = req.body;
      const result = await mail(emailPackage);
      return res.status(200).json(result);
    } catch (err) {
      return res
        .status(500)
        .json({ error: 'Internal Server Error', details: err });
    }
  },
};
