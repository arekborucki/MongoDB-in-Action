# Chapter 10 – Delving into Database as a Service

This directory contains examples and code samples from **Chapter 10** of _MongoDB 8.0 in Action_.  
It explores MongoDB **Atlas**, MongoDB’s fully-managed Database-as-a-Service (DBaaS), focusing on cluster types, scaling strategies, global deployments, and workload isolation.

---

## 🌐 What You'll Learn

- How to use **MongoDB Atlas** to simplify deployment and database administration
- Differences between **M0 (Free)**, **Flex**, and **M10+ dedicated** clusters
- How to configure **auto-scaling** for cluster tier and storage
- How to deploy **global and multi-cloud clusters** for high availability and data locality
- How to isolate workloads using **read-only** and **analytics** nodes
- How to use **replica set tags** and **custom write concerns** for advanced querying and replication control

---

## 📁 Files Included

| File name                    | Description |
|------------------------------|-------------|
| `create_m0_flex_cluster.js`  | Script to create and configure an M0 or Flex Atlas cluster using the Atlas CLI. |
| `create_m10_cluster.js`      | Script for deploying a dedicated M10+ Atlas cluster with custom settings. |
| `enable_autoscaling.json`    | JSON payload used to enable auto-scaling of tier and storage for a cluster. |
| `global_cluster_config.json` | Example configuration for deploying a multi-region global cluster. |
| `analytics_read_query.js`    | Sample connection using `readPreferenceTags` to route queries to analytics nodes. |
| `multi_region_write.js`      | Example write operation using a custom write concern (e.g., `threeRegions`). |

---

## ✅ Requirements

- **MongoDB Atlas Account**
- Atlas CLI (`mongocli`) or access to Atlas API
- Atlas project and organization set up
- Node.js for sample scripts (`npm install mongodb`)
- Basic understanding of MongoDB replica sets and sharded clusters

---

## ⚠️ Notes

- **M0 and Flex** clusters are ideal for testing and learning, but come with strict limitations.
- **M10+ dedicated clusters** unlock full access to Atlas features including backups, VPC peering, and sharding.
- Atlas allows both **vertical and storage auto-scaling**, with downtime-free transitions.
- **Global clusters** enhance performance and compliance via geographic data partitioning.
- **Replica set tags** let you route reads by node type, region, or cloud provider.
