const mongoose = require("mongoose");
const app = require("./app");

const DB_URL =
  "mongodb+srv://gonchuk:1EDah4vhAoUqa0ax@cluster0.1zdkjik.mongodb.net/Cluster0?retryWrites=true&w=majority";

// const { DB_URL, PORT } = process.env;
mongoose.set("strictQuery", true);

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("database connect succsses");
    app.listen(300);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
