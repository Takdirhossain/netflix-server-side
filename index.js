const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");
const cors = require("cors")
env.config();
const app = express();
const authreg = require('./routes/auth')
const updateUser = require('./routes/users')
const movie = require('./routes/movies')
const 
const port = process.env.PORT || 5000
//Milldeware
app.use(express.json());
app.use(cors())

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("databse connect");
  });

app.use("/api/auth", authreg);
app.use("/api/user", updateUser);
app.use("/api/movies", movie);

app.use('/', (req, res) => {
  res.send("This is server is runing efesf")
})
app.listen(port, () => {
  console.log(`SErver is runing on  ${port}`);
});
