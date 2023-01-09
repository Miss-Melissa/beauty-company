const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const controller = require('../controller/productController');
const userController = require('../controller/userController')


const storage = multer.diskStorage({
    destination: './src/image/',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({
    storage: storage
});



//product api
router.get('/showProducts', controller.showProducts);
router.post('/createProduct', upload.single('image'), controller.createProduct);
router.delete('/deleteProduct/:id', controller.deleteProduct);
router.put('/updateProduct/:id', upload.single('image'), controller.updateProdcut);
router.get('/showProduct/:id', controller.showProduct);

// user 
router.post('/registerUser', userController.registerUser);
router.post('/loginUser', userController.loginUser);
router.get('/loginStatus', userController.loginStatus);

module.exports = router;