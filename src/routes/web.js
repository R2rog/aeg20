import { getWebhook, postWebhook } from "../controllers/chatbotController.js";
/*const chatbotController = require("../controllers/chatbotController");
express = require("express");*/
import express from 'express';

let router = express.Router();

let initWebRoutes = (app)=>{
    /*router.get("/",(req,res)=>{
        res.sendFile("../public/index.html");
    });*/
    router.get("/webhook", getWebhook);

    router.post("/webhook", postWebhook);

    return app.use("/",router);
};

export default initWebRoutes;

