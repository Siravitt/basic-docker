const express = require("express")
const app = express.Router()

app.get("/hello", (req,res,next) => {
    res.send("<div>Hello world</div>")
})