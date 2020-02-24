const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    companyName: {
      type: String,
      required: true
    },
    tickerSymbol: {
      type: String,
      required: true
    },
    numberOfShares: {
      type: Number,
      required: true
    },
    shareValueAtTimeOfPurchase: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = Transaction = mongoose.model("Transaction", TransactionSchema);