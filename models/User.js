const mongoose = require("mongoose"); //import do mongoose

const userSchema = mongoose.Schema({ //criaçao do modelo: user
  name: { type: String, required: true, minlength: 3, maxlength: 50 },
  email: { type: String, required: true, minlength: 5, maxlength: 100 },
  admin: {type:Boolean, default:false},
  password: { type: String, required: true, minlength: 8, maxlength: 200 },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User',userSchema); //export do modelo: user no arquivo 'User'
