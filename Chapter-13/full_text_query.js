// full_text_query.js
//
// Executes a full-text search query with fuzzy matching and category filter
// using the Atlas Search $search stage in an aggregation pipeline.

db.inspections.aggregate([
  {
    $search: {
      index: 'LocalSearchIndex',
      text: {
        query: 'No Violation Issued',
        path: ['result', 'business_name'],
        fuzzy: {
          maxEdits: 2
        }
      }
    }
  },
  {
    $match: {
      sector: 'Cigarette Retail Dealer - 127',
      'address.city': 'RIDGEWOOD'
    }
  },
  {
    $addFields: {
      score: { $meta: "searchScore" }
    }
  },
  {
    $sort: { score: -1 }
  },
  {
    $limit: 3
  },
  {
    $project: {
      _id: 0,
      business_name: 1,
      certificate_number: 1,
      date: 1,
      result: 1,
      'address.street': 1,
      'address.number': 1,
      'address.zip': 1,
      score: 1
    }
  }
])
