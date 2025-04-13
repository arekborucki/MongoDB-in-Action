-- Using FLATTEN to expand nested documents into columns
-- Example: flattening airline details in the routes collection

SELECT *
FROM FLATTEN(routes)
WHERE src_airport = 'KZN' AND dst_airport = 'ASF'
