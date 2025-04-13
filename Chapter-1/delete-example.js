// Delete all books that are marked as 'out of print'
db.books.deleteMany({ "status": "out of print" })
