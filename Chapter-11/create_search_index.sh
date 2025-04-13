#!/bin/bash

# Create a temporary file for index definition
cat <<EOF > tmp-index.json
{
  "name": "MongoDB-in-Action",
  "database": "sample_training",
  "collectionName": "inspections",
  "mappings": {
    "dynamic": false,
    "fields": {
      "business_name": {
        "type": "string",
        "analyzer": "lucene.standard"
      },
      "date": {
        "type": "date"
      },
      "result": {
        "type": "string",
        "analyzer": "lucene.standard"
      },
      "sector": {
        "type": "string",
        "analyzer": "lucene.standard"
      },
      "address": {
        "type": "document",
        "fields": {
          "city": { "type": "string", "analyzer": "lucene.standard" },
          "zip": { "type": "string", "analyzer": "lucene.standard" },
          "street": { "type": "string", "analyzer": "lucene.standard" },
          "number": { "type": "string", "analyzer": "lucene.standard" }
        }
      }
    }
  }
}
EOF

# Create the index in MongoDB Atlas
atlas clusters search indexes create \
  --clusterName MongoDB-in-Action \
  --file tmp-index.json \
  --output json
