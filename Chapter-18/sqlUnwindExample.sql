-- Using UNWIND to split array elements into separate rows
-- Works on accounts collection from sample_analytics

SELECT account_id, products AS product
FROM UNWIND(accounts WITH PATH => products)
WHERE account_id = 198100
