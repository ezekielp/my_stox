const express = require("express");
const router = express.Router();
const passport = require('passport');
// const axios = require('axios');

router.get(
  "/:ticker_symbol",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const tickerSymbol = req.params.ticker_symbol;
    const apiKey = process.env.IEX_API_KEY_FRONTEND;

    const url = `https://cloud.iexapis.com/stable/stock/${tickerSymbol}/quote?token=${apiKey}`;

    axios.get(url).then(stockData => stockData);
  }
);

module.exports = router;