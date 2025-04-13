// Explains when avoiding indexes may be more efficient.
db.logs.find({ server_id: "server123", timestamp: { "$gt": ISODate("2024-03-01T00:00:00Z") } }).explain("executionStats")
