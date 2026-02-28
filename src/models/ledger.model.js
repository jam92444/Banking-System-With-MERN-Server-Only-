const mongoose = require("mongoose");

const ledgerSchema = new mongoose.Schema(
  {
    account: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "account",
      required: [true, "Ledger must be associated with an account"],
      index: true,
      immutable: true,
    },
    amount: {
      type: Number,
      required: [true, "Amount is required for creating a ledger entry"],
      immutable: true,
    },
    transaction: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "transaction",
      required: [true, "Ledger must be associated with an account"],
      index: true,
      immutable: true,
    },

    type: {
      type: String,
      enum: {
        values: ["CREDIT", "DEBIT"],
        message: "Type can be either Credit or Debit",
      },
      required: true,
      immutable: true,
    },
  },
  {
    timestamps: true,
  },
);

function preventLedgerModificaion() {
  throw new Error("Ledger entries cannot be modified or deleted.");
}

ledgerSchema.pre("findOneAndUpdate", preventLedgerModificaion);
ledgerSchema.pre("deleteOne", preventLedgerModificaion);
ledgerSchema.pre("updateOne", preventLedgerModificaion);
ledgerSchema.pre("remove", preventLedgerModificaion);
ledgerSchema.pre("deleteMany", preventLedgerModificaion);
ledgerSchema.pre("updateMany", preventLedgerModificaion);
ledgerSchema.pre("findOneAndDelete", preventLedgerModificaion);
ledgerSchema.pre("findOneAndReplace", preventLedgerModificaion);

const ledgerModel = mongoose.model("ledger", ledgerSchema);

module.export = ledgerModel;
