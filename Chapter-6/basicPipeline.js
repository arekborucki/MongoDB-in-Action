// Aggregation pipeline: filter routes by airplane, group by source airport,
// count the number of routes, sort by count, and limit to top 5.

db.routes.aggregate([
  {
    $match: { airplane: "CR2" } // Filter documents where airplane is "CR2"
  },
  {
    $group: {
      _id: "$src_airport",        // Group by source airport
      totalRoutes: { $sum: 1 }    // Count the number of routes from each airport
    }
  },
  {
    $sort: { totalRoutes: -1 }    // Sort in descending order by totalRoutes
  },
  {
    $limit: 5                     // Limit output to top 5 results
  }
])
