const express = require("express");
const router = express.Router();
const passport = require('passport');
const axios = require('axios');

router.get(
  "/:ticker_symbol",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const tickerSymbol = req.params.ticker_symbol;
    const apiKey = process.env.IEX_API_KEY;

    const url = `https://cloud.iexapis.com/stable/stock/${tickerSymbol}/quote?token=${apiKey}`;

    axios.get(url).then(stockData => {
      res.send(stockData.data);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
  }
);

router.get(
  "/batch/:ticker_symbols",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const tickerSymbols = req.params.ticker_symbols;
    const apiKey = process.env.IEX_API_KEY;

    const url = `https://cloud.iexapis.com/stable/stock/market/batch?symbols=${tickerSymbols}&types=quote&token=${apiKey}`;

    // console.log("I'm in the proxy call!");

    axios.get(url).then(stockData => {
      // console.log("I made the API call!");
      res.send(stockData.data);
    })
    .catch(err => console.log(err));
  }
);

module.exports = router;