use sample_analytics;
db.customers.aggregate([
  { $match: { _id: ObjectId("5ca4bbcea2dd94ee58162a76") } },
  { $unwind: "$accounts" },
  {
    $project: {
      _id: 0,
      username: 1,
      accounts: 1
    }
  }
]);

db.customers.aggregate([
  { $unwind: "$accounts" },
  {
    $group: {
      _id: "$accounts",
      count: { $sum: 1 }
    }
  },
  { $sort: { count: -1 } }
])
