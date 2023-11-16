const mongoose = require("mongoose");
const app = require("./app");

mongoose.set("strictQuery", true);
const { DB_URL, PORT = 4000 } = process.env;

mongoose
  .connect(DB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
      console.log("Database connection successful");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
