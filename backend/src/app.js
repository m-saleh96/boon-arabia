const express = require("express");

const sequelize = require('./util/database');

const error = require('./middlewares/error');

const bodyParser = require("body-parser");

const cors = require('cors');

const infoRoute = require("./routes/info");

const notfoundRoute = require("./routes/notFound");

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(error);

app.use(infoRoute); 

app.use(notfoundRoute); 


sequelize.sync().then(()=>{
    console.log("DB Connected");
    app.listen(8080 , ()=>{
        console.log('Server is running on port 8080');
    });
}).catch((err)=> console.log("DB Connection Error." + err));
