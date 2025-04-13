require 'mongo'

uri = "< connection string uri >"
client = Mongo::Client.new(uri)

begin
  database = client.use("sample_training")
  routes = database[:routes]
  query = { 'src_airport' => 'JFK' }
  route = routes.find(query).first
  puts route
rescue => error
  puts error.message
ensure
  client.close
end
