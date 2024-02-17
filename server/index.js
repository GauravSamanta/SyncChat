//Imports
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');







const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



app.get('/', (req, res) => {

    res.send('Hello World');

});


function startServer() {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}


startServer();