const mongoose = require("mongoose");
const app = require("./app");

mongoose.set("strictQuery", true);
const { DB_URL, PORT } = process.env;
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
