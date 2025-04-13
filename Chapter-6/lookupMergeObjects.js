db.transactions.aggregate([
  {
    $lookup: {
      from: "accounts",
      localField: "account_id",
      foreignField: "account_id",
      as: "account_details"
    }
  },
  { $unwind: "$account_details" },
  {
    $replaceRoot: {
      newRoot: { $mergeObjects: ["$account_details", "$$ROOT"] }
    }
  },
  { $unset: "account_details" }
])
