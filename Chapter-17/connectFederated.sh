#!/bin/bash

# Connect to the Federated Database instance (read-only access to both live and archived data)
# Replace placeholders with your actual federated connection string and credentials

mongosh "mongodb://<federated-connection-string>/" \
  --tls --authenticationDatabase admin \
  --username <your-username>
