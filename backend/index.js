const express = require("express");
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');

const sendEmailHandler = require("./ses/sendEmailHandler");
const sendEmailToAllHandler = require("./ses/sendEmailToAllHandler");

const PORT = 3001;
const app = express();

// enable CORS
app.use(cors());
  
// parse JSON request bodies
app.use(bodyParser.json());  

app.use('/api/sendEmail', sendEmailHandler)
app.use('/api/sendEmailToAll', sendEmailToAllHandler)

app.listen(PORT, () => {
    console.log("our app running on port ", PORT);
})