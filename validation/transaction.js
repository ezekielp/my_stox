const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateTransactionInput(transactionData) {
  let errors = {};

  transactionData.companyName = validText(transactionData.companyName) ? transactionData.companyName : "";
  transactionData.tickerSymbol = validText(transactionData.tickerSymbol) ? transactionData.tickerSymbol : "";

  if (Validator.isEmpty(transactionData.tickerSymbol)) {
    errors.tickerSymbol = "Ticker symbol is required";
  }

  if (Validator.isEmpty(transactionData.numberOfShares)) {
    errors.numberOfShares = "Must specify how many shares to purchase";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };

};
