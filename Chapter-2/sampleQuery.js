// Run with: mongosh < sampleQuery.js

use sample_mflix

print("Databases:");
show dbs

print("\nCollections in 'sample_mflix':");
show collections

print("\nFirst document from 'movies':");
db.movies.findOne()
