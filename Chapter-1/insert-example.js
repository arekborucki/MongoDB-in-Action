// Insert a sample book document with arrays and embedded documents
db.books.insertOne({
  "_id": 1,
  "title": "MongoDB 8.0 in Action",
  "publisher": "Manning Publications",
  "status": "Available",
  "focusAreas": [
    "MongoDB Database System",
    "Atlas Platform"
  ],
  "publicationYear": 2025,
  "additionalDetails": {
    "embeddedDocument": {
      "description": "A comprehensive guide to mastering MongoDB 8.0, including working with the Atlas Platform and learning the latest features"
    }
  }
})
