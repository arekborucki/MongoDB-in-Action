// Shows how to use .explain() to analyze query plans and planner decisions.

// Simple query explanation with default verbosity (queryPlanner)
db.movies.find({ runtime: 100 }).explain();

// Explain with execution statistics
db.movies.find({ runtime: 100 }).explain("executionStats");

// Explain with all plans execution details
db.movies.find({ runtime: 100 }).explain("allPlansExecution");

// Example with compound query and sort using index
db.movies.find({ year: 1914, "imdb.rating": { $gte: 7 } })
  .sort({ title: 1 })
  .explain("executionStats")
