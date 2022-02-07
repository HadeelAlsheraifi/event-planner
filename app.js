const express = require("express");
const app = express();
const bookRouter = require("./routes/book.route");

const connectDB = require("./Data");
const dotenv = require("dotenv");

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", bookRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("the port is listening", PORT);
  connectDB();
});
