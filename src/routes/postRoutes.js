const { Router } = require('express'); 
const postController = require('../controllers/postController');
const  verifyToken = require('../middlewares/verifyToken'); 
const multer = require("multer");

const fileUpload = multer({ dest: "./temp" }).single("profilepicture");
const { upload } = require("../middlewares/fileUpload");
const router = Router();

//router.get('/posts', postController.getAllRides);
//router.get('/posts/:rideId', postController.getSingleRide);
//router.get('/searchposts', postController.searchPosts)
//router.get('/myposts', verifyToken, postController.myPosts);
//router.get('/myposts/:rideId', verifyToken, postController.mySinglePosts);
router.post('/posts', [verifyToken, fileUpload, upload], postController.createPost);
 
module.exports = router; 