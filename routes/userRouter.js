const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController"); //import dos metodos de cada rota

router.post("/register", userController.register); //setando as rotas post
router.post("/login", userController.login);



module.exports = router;
