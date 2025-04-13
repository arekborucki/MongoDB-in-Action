#!/bin/bash

# Connect to MongoDB Atlas cluster using mongosh
# Replace <your-cluster-url> and <your-username> with actual values

mongosh "mongodb+srv://<your-cluster-url>.mongodb.net" \
  --apiVersion 1 \
  --username "<your-username>"


