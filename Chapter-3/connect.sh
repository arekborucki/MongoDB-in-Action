#!/bin/bash

# Connect to MongoDB Atlas cluster using mongosh
# Replace the following placeholders before running:
# YOUR_CLUSTER       - your Atlas cluster name (e.g. cluster0)
# YOUR_HASH          - the cluster hash (e.g. abcde.mongodb.net)
# YOUR_USERNAME      - your database username
# YOUR_PASSWORD      - your database password

mongosh "mongodb+srv://YOUR_CLUSTER.YOUR_HASH.mongodb.net/" \
  --username YOUR_USERNAME \
  --password YOUR_PASSWORD
