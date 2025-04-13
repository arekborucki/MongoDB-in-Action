#!/bin/bash

# Connect to the archive-only instance (read-only access to just the archived data)
# Replace placeholders with your actual archive-only connection string and credentials

mongosh "mongodb://<archive-only-connection-string>/" \
  --tls --authenticationDatabase admin \
  --username <your-username>
