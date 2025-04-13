// Monitors index usage using the $indexStats aggregation stage.
db.movies.aggregate([{ $indexStats: {} }])
