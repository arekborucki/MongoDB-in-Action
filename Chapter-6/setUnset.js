// Modifies documents using $set and $unset instead of $project
db.routes.aggregate([
  { $unset: ["codeshare", "stops"] }
]);

db.routes.aggregate([
  {
    $set: {
      isDirect: { $eq: ["$stops", 0] },
      codeshare: "$$REMOVE"
    }
  }
])
