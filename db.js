const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://user:user@cluster0.9os6j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const mongooseConnection = () => {
  mongoose.connect(
    MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log(`mongo server runiing at ${MONGO_URI}`);
    }
  );
};

module.exports = mongooseConnection;
