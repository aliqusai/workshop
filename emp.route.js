module.exports = app => {
    const tutorials = require("../controllers/emp.controller.js");
    
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", tutorials.insert);
  
    app.use('/api/emp', router);
  };