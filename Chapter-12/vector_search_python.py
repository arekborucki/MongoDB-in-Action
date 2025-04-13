# vector_search_python.py
# Python script that performs a basic vector search using pymongo.

from pymongo import MongoClient

def run_vector_search():
    uri = "your_mongodb_connection_string"
    client = MongoClient(uri)
    db = client["sample_mflix"]
    collection = db["embedded_movies"]

    try:
        results = list(collection.aggregate([
            {
                "$vectorSearch": {
                    "index": "MongoDB-in-Action-VectorSearchIndex",
                    "path": "plot_embedding",
                    "queryVector": [/* your embedding vector here */],
                    "numCandidates": 150,
                    "exact": False,
                    "limit": 5
                }
            },
            {
                "$project": {
                    "_id": 0,
                    "title": 1,
                    "plot": 1,
                    "score": { "$meta": "vectorSearchScore" }
                }
            }
        ]))

        for result in results:
            print(result)
    finally:
        client.close()

run_vector_search()
