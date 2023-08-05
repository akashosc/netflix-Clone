const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");
const path=require('path');


const dotenv=require('dotenv');
dotenv.config();
const PORT=process.env.PORT|| 3000;

const app = express();
const MONGO_URL=process.env.MONGO_CONNECT;


app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,'./netflix-ui/build')));

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

  app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./netflix-ui/build/index.html'));
  })

app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});