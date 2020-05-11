// app.js
const express = require('express');
const mongoose = require('mongoose');
const dbConfig = require('./config/database.config.js');
const bodyParser = require('body-parser');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express')

// Imports routers
const transaction = require('./routes/transaction.route');
const account = require('./routes/account.route');

// initialize our express app
const app = express();

// using bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// require('./routes/transaction.route.js');

// Available endpoints

app.use('/api', transaction);
app.use('/api', account);

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: "Transfer money API",
        description: "API for transfer money management",
        contact: {
          name: "FranzMG",
          email: "ezequiel.g8401@outlook.com"
        },
        servers: ["http://localhost:3000"]
      }
    },
    // ['app.js']
    apis: ["./routes/*.js"]
  };

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Set up mongoose connection
mongoose.Promise = global.Promise;

// mongoose.connect("mongodb://localhost:27017/transfermoney-app-db", {
mongoose.connect(dbConfig.url, {

  useNewUrlParser: "true",
  useUnifiedTopology: "true"

}).then(() => {
    console.log("Successfully connected to MongoDB");    
}).catch(err => {
    console.log('Could not connect to MongoDB. Exiting now...', err);
    process.exit();
});

// port and express listening
let port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});