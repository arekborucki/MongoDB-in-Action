# Chapter 2 – Getting Started with Atlas and MongoDB Data

This folder contains example scripts and commands for **Chapter 2** of *MongoDB 8.0 in Action*.  
It walks you through setting up your first MongoDB Atlas cluster, loading sample data, connecting with `mongosh`, and managing data with collections and documents.

## 🔍 What you'll learn

- Installing and using the Atlas CLI
- Creating an organization, project, and free-tier Atlas cluster
- Loading sample data into the cluster
- Connecting to MongoDB Atlas using `mongosh`
- Creating users and managing IP access
- Working with time series, capped collections, and views

## 📁 Files included

| File                     | Description |
|--------------------------|-------------|
| `connect.sh`             | Connect to Atlas cluster using `mongosh`. Replace placeholders with your actual connection string and username. |
| `createUser.sh`          | Creates a database user with the `atlasAdmin` role via the Atlas CLI. |
| `loadSampleData.sh`      | Loads sample datasets into your "MongoDB-in-Action" cluster. |
| `sampleQuery.js`         | Runs a simple query on the sample_mflix database to verify connection and data. |
| `createTimeSeries.js`    | Creates a time series collection and inserts a sample document. |
| `createCappedCollection.js` | Creates a capped collection and inserts a log message. |
| `createView.js`          | Creates a view (`aerocondorRoutesView`) on sample_training.routes filtered by airline ID. |
