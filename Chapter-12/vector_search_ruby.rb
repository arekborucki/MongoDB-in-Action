# vector_search_ruby.rb
# Ruby script using the mongo gem to run a vector search with optional filters.

require 'mongo'

def run_vector_search
  uri = "your_mongodb_connection_string"
  client = Mongo::Client.new(uri)
  collection = client.database[:embedded_movies]

  query = [
    {
      "$vectorSearch" => {
        "index" => "MongoDB-in-Action-VectorSearchIndex",
        "path" => "plot_embedding",
        "queryVector" => [/* your embedding vector here */],
        "numCandidates" => 150,
        "exact" => false,
        "limit" => 5,
        "filter" => {
          "$or" => [
            { "genres" => "Action" },
            { "runtime" => { "$lt" => 120 } }
          ]
        }
      }
    },
    {
      "$project" => {
        "_id" => 0,
        "title" => 1,
        "plot" => 1,
        "score" => { "$meta" => "vectorSearchScore" }
      }
    }
  ]

  results = collection.aggregate(query).to_a
  results.each { |doc| puts doc }
ensure
  client.close
end

run_vector_search
