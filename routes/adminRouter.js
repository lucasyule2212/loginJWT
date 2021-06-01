const express = require("express");
const router = express.Router();
const authenticationController = require("../controllers/authenticationController"); //import dos metodos de cada rota

router.get("/",authenticationController.checkTokenAdmin)
router.get("/free",authenticationController.checkTokenFree)
module.exports = router;