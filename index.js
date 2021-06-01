require("dotenv").config(); //import do dotenv(variaveis de prod)
const express = require("express"); //import express
const userRouter = require("./routes/userRouter"); //import rotas
const adminRouter=require("./routes/adminRouter");
const mongoose = require("mongoose"); //import mongoose

mongoose.connect(
  //conexao do mongoose com o database Mongo criado
  process.env.MONGO_CONNECTION_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("MongoAtlas conectado com sucesso!");
    }
  }
);

const app = express();

app.use("/user", express.json(), userRouter); //setando as rotas que o express vai usar
app.use("/admin",adminRouter);

app.listen(process.env.PORT, () => {
  //setando a porta que o express vai rodar
  console.log(`server running on port ${process.env.PORT}`);
});
