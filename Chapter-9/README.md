# Chapter 9 – Using Replication and Sharding

This directory contains examples and code samples from **Chapter 9** of _MongoDB 8.0 in Action_.  
It focuses on how MongoDB uses **replication** for high availability and **sharding** for horizontal scalability, with detailed explanations of cluster internals, election protocols, the oplog, change streams, and sharded cluster management in both self-managed and Atlas-hosted environments.

---

## 🧠 What You'll Learn

- The architecture and **role of replica set members**
- Understanding the **oplog** and how replication is achieved
- Monitoring replication lag and election behavior
- Using **change streams** for real-time change tracking in collections
- Creating and managing **sharded clusters** with Atlas CLI
- **Choosing an effective shard key** using query sampling and the `analyzeShardKey` tool
- Detecting and resolving **chunk imbalances**, **jumbo chunks**, and managing **resharding**
- Using **AutoMerger**, **pre-splitting**, and **manual chunk moves**
- Scaling clusters using **embedded config servers** and **moving unsharded collections**
- Managing **read/write concerns** and **read preference** for consistency and availability

---

## 📁 Files Included

| File name                    | Description |
|-----------------------------|-------------|
| `replicaSetStatus.js`       | Outputs member roles using `replSetGetStatus()` in `mongosh` with helpful field mapping. |
| `replicaSetConfig.js`       | Displays replica set configuration using `replSetGetConfig()`, showing member roles and voting priorities. |
| `oplogDeleteExample.js`     | Shows a delete operation recorded in the oplog (`op: 'd'`). |
| `oplogInsertExample.js`     | Shows an insert operation recorded in the oplog (`op: 'i'`). |
| `replicationInfo.js`        | Uses `db.getReplicationInfo()` to display oplog metrics like size and retention window. |
| `printReplicationLag.js`    | Uses `db.printSecondaryReplicationInfo()` to report replication lag across secondaries. |
| `changeStreamWatch.js`      | A `mongosh` script that listens for change events in a collection using `watch()` and `tryNext()`. |
| `changeStreamNode.js`       | Node.js script that uses MongoDB Change Streams to monitor a collection and log changes. |
| `changeStreamPipeline.js`   | Node.js script that sets up a change stream with an aggregation pipeline to filter and augment events. |
| `atlasCreateShardedCluster.sh` | Atlas CLI command to create a 2-shard cluster using `--type SHARDED`. |
| `atlasShardKeyAnalyzer.js`  | Script to enable query sampling and evaluate the effectiveness of a proposed shard key. |
| `preSplitChunks.js`         | A `mongosh` script to manually split and distribute chunks across shards for an empty collection. |
| `manualChunkMove.js`        | Manually moves chunks to specific shards using `moveChunk`. |
| `reshardCollection.js`      | Initiates resharding of a collection using a new shard key. |
| `mergeChunks.js`            | Merges eligible chunks on a specified shard using `mergeAllChunksOnShard`. |
| `unshardCollection.js`      | Moves a sharded collection to a single shard using `unshardCollection`. |
| `moveUnshardedCollection.js`| Moves an unsharded collection to another shard in MongoDB 8.0+. |
| `writeConcernExample.js`    | Demonstrates write concern configuration with options like `w`, `j`, and `wtimeout`. |
| `readConcernExample.js`     | Demonstrates read concern levels such as `majority` and `snapshot`. |
| `readPreferenceExample.js`  | Shows how to use read preferences like `secondaryPreferred` for offloading reads. |

---

## ✅ Requirements

- **MongoDB 8.0+**
- Atlas project with billing enabled (for sharded clusters)
- Sample data set loaded in cluster: `sample_training`, `sample_mflix`
- Tools:
  - `mongosh`
  - Atlas CLI (`atlas`)
  - Node.js + `mongodb` driver
  - Admin privileges on cluster for configuration commands

---

## ⚠️ Notes

- **Query sampling** is mandatory for analyzing proposed shard keys.
- **Resharding** in MongoDB 8.0 is significantly faster and supports resharding to the same key.
- **AutoMerger** reduces chunk fragmentation without manual intervention.
- For performance tuning, **pre-splitting** and **balancer scheduling** can help prevent hot shards.
- Always test your **write concern** and **read preference** settings under real workloads to ensure desired consistency and performance.

---

## 🔗 References

- MongoDB Replication: https://www.mongodb.com/docs/manual/replication/
- MongoDB Sharding: https://www.mongodb.com/docs/manual/sharding/
- Change Streams: https://www.mongodb.com/docs/manual/changeStreams/
