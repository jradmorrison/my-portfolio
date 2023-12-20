const express = require('express');
const path = require('path');
const routes = require('./routes');

// import mail from './utils/nodemailer';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

app.use(routes);

app.listen(PORT, () => console.log('Server running on port ' + PORT));
