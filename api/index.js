const express = require('express');
const app = express();
const port = process.env.PORT || 3000 ;
const cors = require('cors')
const cepRoute = require('./routes/cep')


app.use(cors())

app.use('/cep', cepRoute)

app.listen(port, () => {
  console.log(`API listening... ${port} `);
});

module.exports = app;

