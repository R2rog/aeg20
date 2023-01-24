//express = require('express');
import { express } from "express";

let configViewEngine = (app) =>{
    app.use(express.static("./src/public"));
    app.set("view engine", "hanldebars");
    app.set("views", "./src/views");
};

export default configViewEngine;
