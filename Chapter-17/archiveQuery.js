// Query to find documents that should be archived (older than 5 days from now)
const fiveDaysAgo = new Date(Date.now() - 1000 * 3600 * 24 * 5);

db.sales.find({
  saleDate: { $lte: fiveDaysAgo }
}).sort({ saleDate: 1 })
