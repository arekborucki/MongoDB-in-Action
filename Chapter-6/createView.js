use sample_analytics;
db.createView("enriched_transactions", "transactions", [
  {
    $lookup: {
      from: "customers",
      localField: "account_id",
      foreignField: "accounts",
      as: "customer_details"
    }
  },
  {
    $set: {
      "Customer Name": { $arrayElemAt: ["$customer_details.name", 0] },
      "Customer Email": { $arrayElemAt: ["$customer_details.email", 0] },
      "Customer Address": { $arrayElemAt: ["$customer_details.address", 0] },
      "Customer Tier and Benefits": { $arrayElemAt: ["$customer_details.tier_and_details", 0] }
    }
  },
  { $unset: "customer_details" }
])
