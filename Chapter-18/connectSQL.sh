#!/bin/bash

# Connect to Atlas SQL Interface using mongosh
# Replace <your-connection-string> and <your-username> accordingly

mongosh "mongodb://<your-sql-endpoint>.a.query.mongodb.net/" \
  --tls \
  --authenticationDatabase admin \
  --username <your-username>
