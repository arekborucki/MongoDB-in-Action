// Example of using the $sql stage in an aggregation pipeline
// This runs an SQL SELECT query inside a collection

db.customers.aggregate([
  {
    $sql: {
      statement: `
        SELECT *
        FROM customers
        WHERE username = 'valenciajennifer'
          AND email = 'cooperalexis@hotmail.com'
      `,
      format: "jdbc",
      dialect: "mongosql"
    }
  }
])
