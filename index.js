/*require("dotenv").config();
express = require('express');
bodyParser = require('body-parser');
viewEngine = require('./config/viewEngine');
initWebRoutes = require('./routes/web');

const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
import { join } from 'path';
let app = express();

//config the view engine
viewEngine(app);

//config body-parser
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Creating an static folder
app.use(express.static(join(__dirname,'public')));
//int web Routes
initWebRoutes(app);

//Settingt the listening port
let port = process.env.PORT || 8080;

app.listen(port,() =>{
    console.log("App is running at port: "+port);
});*/

import express from 'express';
import { join } from 'path';
import path from 'path';
import dotenv from "dotenv"
import { fileURLToPath } from 'url';
import bodyParser from "body-parser"
import initWebRoutes from "./src/routes/web.js"

dotenv.config()

const app = express();
const port =  8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

initWebRoutes(app);

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(join(__dirname,'public')));

app.get('/', (req, res) =>{
    res.status(200).send("All good to go!")
})
app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})