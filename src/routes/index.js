const express = require('express'); 
const userRoutes = require('./userRoutes'); 
const router = express.Router();  

router.get("/", (req, res) => res.send("Welcome to clean-bankAPP.")); 

// User Routes
router.use(userRoutes)
 

module.exports = router;
