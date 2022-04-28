const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.t3fgd.mongodb.net/Database?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log("ocorreu um erro ao se conectar ao banco de dados");
      }
      return console.log("conexao ok");
    }
  );
};

module.exports = connectToDatabase;
