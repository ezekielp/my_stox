const express = require("express");
const app = express();
const db = require("./config/keys").mongoURI;
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const passport = require("passport");
const users = require("./routes/api/users");
const transactions = require("./routes/api/transactions");
const stocks = require("./routes/api/stocks");
const passportAuth = require("./config/passport");
require('dotenv').config();
// Now, when writing your API call, you can use 'process.env.IEX_API_KEY'

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

  
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
passportAuth(passport);
  
app.use("/api/users", users);
app.use("/api/transactions", transactions);
app.use("/api/stocks", stocks);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
