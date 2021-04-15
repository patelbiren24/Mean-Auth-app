// Import the necessary libraries
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const config = require("./config/database");
const app = express();
const users = require("./routes/users");
const port = process.env.PORT || 3000;

app.use(cors()); // to launch application in diff port
app.use(bodyParser.json());
app.use("/users", users); // navigate to users.js for all defined user ports
// To use passoport
app.use(passport.initialize());
app.use(passport.session());

require("./config/passport")(passport);

//Connect to mongodb and print to console if successful
mongoose
  .connect(config.database, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((err) => {
    console.log("Connected to DB" + " " + config.database);
  });

//set static folder, this is the client
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log("listening on port " + port);
});

app.get("/", (req, res) => {
  res.send("Biren ");
});
