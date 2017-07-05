const express = require('express');

var admin = express();

admin.get("/", (req,res) => {
    res.json(req.query);
})

module.exports = () => {
    return admin;
}