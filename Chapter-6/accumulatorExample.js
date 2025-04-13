db.customers.aggregate([
  {
    $group: {
      _id: { username: "$username" },
      maxAccountNumber: { $max: "$accounts" }
    }
  }
]);

db.customers.aggregate([
  {
    $group: {
      _id: null,
      averageNumberOfAccounts: { $avg: { $size: "$accounts" } }
    }
  }
])
