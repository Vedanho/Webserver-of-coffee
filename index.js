const express = require("express");

const mongoose = require("mongoose");

const app = express();

const port = 3000;

app.use(express.json())
app.use(require('./routs/coffee.routs'))

mongoose.connect(
    "mongodb+srv://Amir:intocode@cluster0.gzzxb.mongodb.net/coffee?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединии с сервером MongoDB"));
app.listen(port, () => {
  console.log("Server is working");
});
