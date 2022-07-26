const path = require("path");

module.exports = {
    home : (req,res) => res.sendFile(path.join(__dirname, "..", "views", "home.html")),
    about : (req,res) => res.sendFile(path.join(__dirname, "..", "views", "about.html")),
    porfolio : (req,res) => res.sendFile(path.join(__dirname, "..", "views", "porfolio.html"))
};