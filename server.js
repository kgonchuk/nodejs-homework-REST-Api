const mongoose = require("mongoose");
const app = require("./app");

const { DB_URL, PORT } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("database connect succsses");
    app.listen(PORT);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
