// Update the publisher name of the book
db.books.updateOne(
  { "title": "MongoDB 8.0 in Action" },
  { $set: { "publisher": "Manning Publications Co" } }
)
