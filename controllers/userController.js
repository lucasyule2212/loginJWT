const User = require("../models/User"); //import do modelo: user
const bcrypt = require("bcrypt"); //import do modulo bcrypt (criptografa strings)
const jwt = require("jsonwebtoken"); //import do modulo jwt (gera tokens que valida a sessao do usuário logado)
const { loginValidate, registerValidate } = require("./validate"); //import das funçoes do modulo joi para validaçao de dados no register e no login
const userController = {
  //definindo os métodos de cada rota


  register: async function (req, res) {
    const {error} = registerValidate(req.body);
    if (error) {
      return res.status(400).send(error.message);
    }
    const selectedUser = await User.findOne({ email: req.body.email });

    if (selectedUser) {
      return res.status(400).send("Email já cadastrado!");
    }
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(14)), //metodo hashSync cria a criptografia da string enquanto o genSaltSync gera o salt do crypt
    });
    try {
      const savedUser = await user.save();
      res.send(savedUser);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  login: async function (req, res) {
    const {error} = loginValidate(req.body);
    if (error) {
      return res.status(400).send(error.message);
    }
    const selectedUser = await User.findOne({ email: req.body.email });
    if (!selectedUser) {
      return res.status(400).send("Email ou Senha incorretos!");
    }

    const passwordAndUserMatch = bcrypt.compareSync(
      req.body.password,
      selectedUser.password
    ); //metodo compareSync: compara a senha nao criptografada com a criptografada
    if (!passwordAndUserMatch) {
      return res.status(400).send("Email ou Senha incorretos!");
    }

    const token = jwt.sign(
      { _id: selectedUser.id, admin: selectedUser.admin },
      process.env.TOKEN_SECRET
    ); //metodo sign: gera o token de sessao do usuário,
    //definindo qual info estará disponivel(id) e pedindo o secret
    res.header("authorization-token", token);

    res.send("Usuario logado!");
  },
};

module.exports = userController; //exportando os metodos de cada rota como objeto
