// Aggregation pipeline example using $match, $group, $sort, and $limit

db.routes.aggregate([
  {
    $match: { airplane: "CR2" } // Filter documents where airplane is "CR2"
  },
  {
    $group: {
      _id: "$src_airport",          // Group by source airport
      totalRoutes: { $sum: 1 }      // Count routes from each airport
    }
  },
  {
    $sort: { totalRoutes: -1 }      // Sort by total routes descending
  },
  {
    $limit: 5                       // Limit result to top 5
  }
])
