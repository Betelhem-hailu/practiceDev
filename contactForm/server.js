const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Received contact form submission: ${name}, ${email}, ${message}`);

  res.status(200).json({ message: 'Form submission successful' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
