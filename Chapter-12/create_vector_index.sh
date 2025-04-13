#!/bin/bash

# Create a temporary file for the vector search index definition
cat <<EOF > tmp-vector-index.json
{
  "name": "MongoDB-in-Action-VectorSearchIndex",
  "type": "vectorSearch",
  "database": "sample_mflix",
  "collectionName": "embedded_movies",
  "fields": [
    {
      "type": "vector",
      "path": "plot_embedding",
      "numDimensions": 1536,
      "similarity": "cosine"
    },
    {
      "type": "filter",
      "path": "genres"
    },
    {
      "type": "filter",
      "path": "languages"
    },
    {
      "type": "filter",
      "path": "year"
    }
  ]
}
EOF

# Create the Atlas Vector Search index
atlas clusters search indexes create \
  --clusterName MongoDB-in-Action \
  --file tmp-vector-index.json \
  --output json
