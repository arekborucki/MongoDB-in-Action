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

| File name                     | Description |
|-------------------------------|-------------|
| `create_m0_flex_cluster.sh`   | Atlas CLI script to create an M0 (Free Tier) or Flex cluster. |
| `create_m10_cluster.sh`       | Atlas CLI script to create a dedicated M10 cluster with auto-scaling and backups. |
| `enable_autoscaling.sh`       | Shell script that creates a JSON config and enables auto-scaling via the Atlas CLI. |
| `global_cluster_config.sh`    | Shell script that writes a multi-region global cluster spec and deploys it. |
| `analytics_read_query.js`     | Sample Node.js script using `readPreferenceTags` to route reads to analytics nodes. |
| `multi_region_write.js`       | Node.js example demonstrating a write operation with a custom multi-region write concern. |

---

## ✅ Requirements

- **MongoDB Atlas Account**
- Atlas CLI (`atlas`) installed and authenticated
- Atlas project ID (`<PROJECT_ID>`) ready
- Node.js environment for JavaScript examples (`npm install mongodb`)
- Basic knowledge of replica sets, sharding, and MongoDB deployment options

---

## ⚠️ Notes

- **M0 and Flex** clusters are limited in features and performance — ideal for testing only.
- **M10+ dedicated clusters** support backups, monitoring, sharding, and VPC peering.
- **Auto-scaling** can be enabled for both compute tier and disk storage, helping manage costs.
- **Global clusters** support region-specific data residency and low-latency access.
- Use **replica set tags** and **custom write concerns** to fine-tune query routing and data consistency across regions.
