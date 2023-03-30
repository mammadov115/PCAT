const express = require('express');
const path = require('path');

const app = express();

const myLogger = (req, res, next) => {
  console.log('Middleware log 1');
  next();
};

//MIDDLEWARES
app.use(express.static('public'));
app.use(myLogger)

app.get('/',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'temp/index.html'))
})


const port = 8080;

app.listen(port, () => {
  console.log(`Server ${port}-portunda basladildi`);
});