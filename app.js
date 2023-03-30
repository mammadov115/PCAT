const express = require('express');
const ejs = require('ejs');

const path = require('path');

const app = express();

// Template Engine
app.set('view engine', 'ejs');

// const myLogger = (req, res, next) => {
//   console.log('Middleware log 1');
//   next();
// };

//MIDDLEWARES
app.use(express.static('public'));
// app.use(myLogger);

// Routes

// Index
app.get('/', (req, res) => {
  // res.sendFile(path.resolve(__dirname, 'views/index.html'));
  res.render('index')
});

// About
app.get('/about', (req, res) => {
  res.render('about')
});

app.get('/add', (req, res) => {
  res.render('add')
});

app.get('/video-page', (req, res) => {
  res.render('video-page')
});


const port = 8080;

app.listen(port, () => {
  console.log(`Server ${port}-portunda basladildi`);
});
