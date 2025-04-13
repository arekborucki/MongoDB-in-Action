// Create an index on the saleDate field to support the Online Archive rule
// Also helps optimize the archiving job's performance

db.sales.createIndex({ saleDate: 1 })
