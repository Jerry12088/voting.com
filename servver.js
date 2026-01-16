const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const voteRoutes = require("./routes/voteRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/votingDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use("/api/votes", voteRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
