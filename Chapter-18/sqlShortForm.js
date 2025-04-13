// Short-form syntax to run SQL using db.sql()
// Available inside mongosh connected to Atlas SQL

db.sql(`
  SELECT username, name, address, birthdate
  FROM customers
  WHERE username = 'valenciajennifer'
    AND email = 'cooperalexis@hotmail.com'
`)
