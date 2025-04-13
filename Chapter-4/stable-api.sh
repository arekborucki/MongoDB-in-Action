#!/bin/bash

# Use Stable API version when connecting to MongoDB Atlas (MongoDB 5.0+ / 8.0+)

# Replace the following placeholders before running:
# YOUR_CLUSTER       - your Atlas cluster name (e.g. cluster0)
# YOUR_HASH          - the cluster hash (e.g. abcde.mongodb.net)
# YOUR_USERNAME      - your database username
# YOUR_PASSWORD      - your database password

mongosh "mongodb+srv://YOUR_CLUSTER.YOUR_HASH.mongodb.net/" \
  --apiVersion 1 \
  --username YOUR_USERNAME \
  --password YOUR_PASSWORD
