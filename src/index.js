const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

const PORT = process.env.PORT || 3000;

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs'); // Tells express to use hbs
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.json());
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index');
});

app.get('/24reasons', (req, res) => {
  res.render('24reasons');
});

app.get('/lovegallery', (req, res) => {
  res.render('lovelovelove');
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
