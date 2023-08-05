const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const dotenv=require('dotenv');
dotenv.config();
const PORT=process.env.PORT|| 3000;

const app = express();
const MONGO_URL=process.env.MONGO_CONNECT;


app.use(cors());
app.use(express.json());

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});