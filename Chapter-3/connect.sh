#!/bin/bash

# Connect to MongoDB Atlas cluster using mongosh
# Replace the placeholder values with your actual connection string and credentials

mongosh "mongodb+srv://<YOUR_CLUSTER>.<YOUR_HASH>.mongodb.net/" \
  --apiVersion 1 \
  --username <USERNAME> \
  --password <PASSWORD>
