// Create a view that filters routes operated by Aerocondor (airline.id = 410)

use sample_training;

db.createView(
  "aerocondorRoutesView",
  "routes",
  [
    { $match: { "airline.id": 410 } }
  ]
)
