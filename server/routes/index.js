const { Router } = require("express");
const { getProducts } = require("../controller/product");
const middleware = require("../middleware");

const router = Router();

router.get('/getProducts', getProducts);
