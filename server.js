//Dependencies
const express = require('express');
const fs = require('fs');
const htmlRoutes = require('./routes/html-routes.js');
const apiRoutes = require('./routes/api-routes.js');

const PORT = process.env.PORT || 3001;      //Runs from port 3001 or from Heroku
const app = express();  //Calls Express to run

//Adds middleware to the app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//express.static serves static files, the root param describes the root directory from which 
//to serve static assets, it returns an object
app.use(express.static("public"));

//Required paths for routes
//app.use('/', apiRoutes);
app.use('/', htmlRoutes);


//Server will begin to listen at this port
app.listen(PORT, () =>
    console.log(`App is listening at http://localhost:${PORT}`)
);
