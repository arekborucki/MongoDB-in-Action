// Create a time series collection for storing weather data

db.createCollection("weather_data", {
  timeseries: {
    timeField: "timestamp",
    metaField: "sensor"
  }
})

// Insert a sample document
db.weather_data.insertOne({
  sensor: { id: "sensor1", location: "NYC" },
  timestamp: ISODate("2025-04-13T12:00:00Z"),
  temperature: 22.3,
  humidity: 60
})
