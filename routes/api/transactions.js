const express = require("express");
const router = express.Router();
const passport = require('passport');
// const axios = require('axios');

const Transaction = require('../../models/Transaction');
const validateTransactionInput = require('../../validation/transaction');

const _normalized = transactions => {
  const normalizedObj = {};
  transactions.forEach(transaction => {
    normalizedObj[transaction._id] = transaction;
  });
  return normalizedObj;
}

// Index of user transactions
router.get(
  "/:user_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Transaction.find({ user: req.params.user_id })
      .then(transactions => res.json(_normalized(transactions)))
      .catch(err =>
        res
          .status(404)
          .json({ noTransactionsFound: "No transactions found for this user" })
      );
  }
);

// Create a transaction
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateTransactionInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const { user, companyName, tickerSymbol, numberOfShares, shareValueAtTimeOfPurchase } = req.body;

    const newTransaction = new Transaction({
      user: user.id,
      companyName, tickerSymbol, numberOfShares, shareValueAtTimeOfPurchase
    })

    // const purchasePrice = numberOfShares * shareValueAtTimeOfPurchase;
    // const newUserBalance = parseFloat(user.accountBalance.$numberDecimal) - purchasePrice;
    // let updatedUser = user;
    // updatedUser.accountBalance = newUserBalance;

    // User.findByIdAndUpdate(user.id, updatedUser, (err) => {
    //   if (err) res.status(400).send(err);
    // });

    newTransaction.save().then(transaction => res.json(transaction));
  }
);

module.exports = router;