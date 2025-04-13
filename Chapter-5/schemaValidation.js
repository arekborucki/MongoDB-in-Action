// Add JSON schema validation to the routes collection
db.runCommand({
  collMod: "routes",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["flight_id", "airline", "src_airport", "dst_airport"],
      properties: {
        flight_id: {
          bsonType: "string",
          pattern: "^FL\\d+$",
          description: "must start with 'FL' followed by digits"
        },
        airline: {
          bsonType: "object",
          properties: {
            id: {
              bsonType: "int",
              minimum: 1,
              description: "airline.id must be a positive integer"
            }
          }
        },
        src_airport: {
          bsonType: "object",
          properties: {
            code: {
              bsonType: "string",
              description: "must be a valid airport code"
            }
          }
        },
        dst_airport: {
          bsonType: "object",
          properties: {
            code: {
              bsonType: "string",
              description: "must be a valid airport code"
            }
          }
        }
      }
    }
  },
  validationLevel: "moderate",
  validationAction: "error"
})
