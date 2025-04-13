# Chapter 15 – Building Event-Driven Applications

This directory contains code samples and prototypes from **Chapter 15** of _MongoDB 8.0 in Action_.  
It introduces **MongoDB Atlas Stream Processing**, a powerful tool for building **real-time, event-driven applications** with minimal integration overhead.

---

## 🚀 What You'll Learn

- Core principles of **event-driven architecture** vs traditional request/response systems  
- Key differences between **event time** and **processing time**
- How to use **tumbling** and **hopping time windows** for stream segmentation
- Challenges with integrating external stream processors like Kafka or Flink
- Benefits of using MongoDB Atlas as a unified **stream processor and document store**
- Defining **stream processors** using `$source`, `$validate`, `$lookup`, `$merge`, and `$emit`
- Creating and managing **stream processing instances (SPI)** via `mongosh` and **Atlas CLI**
- Debugging streams using static **document arrays**
- Capturing late, malformed, or invalid data using **Dead Letter Queues (DLQs)**
- Applying **aggregation pipeline stages** in continuous stream pipelines

---

## 📁 Files Included

| File name                  | Description |
|---------------------------|-------------|
| `basicStreamProcessor.js` | A minimal stream processor that connects to a sample source and prints streaming data in real time. |
| `validatedProcessor.js`   | Processor with `$validate` stage that enforces a document schema before merging results to MongoDB. |
| `dlqProcessor.js`         | A stream processor that routes invalid data to a Dead Letter Queue using `validationAction: "dlq"`. |
| `lookupProcessor.js`      | Uses `$lookup` to enrich incoming Kafka messages with data from a MongoDB collection before validation. |
| `iotWindowProcessor.js`   | Applies `$hoppingWindow` to sensor data to calculate rolling average temperature. |
| `documentArrayProcessor.js` | Demonstrates debugging a stream pipeline using a static array of predefined JSON documents. |
| `mongodbInAction.js`      | Full example of a persistent processor that reads sample data, applies windowing and grouping, and stores results in MongoDB. |

---

## ✅ Requirements

- **MongoDB Atlas** account with Stream Processing enabled  
- Sample Atlas project with:
  - Stream Processing Instance (SPI)
  - Connection registry (e.g., Kafka source or Atlas cluster)
- Tools:
  - `mongosh` with Atlas login
  - `MongoDB Atlas CLI` (`atlas streams ...`)

---

## 💡 Notes

- Each **stream processor pipeline** starts with a `$source` stage.
- Only one `$source` and one output stage (`$merge` or `$emit`) allowed per processor.
- **Time windows** are required for grouping and sorting stream data over time.
- You can **sample** the output of any running processor using `sp.<name>.sample()`.
- Dead Letter Queues (DLQs) are essential for catching failed records and ensuring system resilience.
- Use **document array sources** for debugging without requiring live Kafka or change streams.

---

## 🛡 Security

- Atlas Stream Processing supports **fine-grained privileges** per user, project, or instance.
- Use `Project Stream Processing Owner` role or custom roles with actions like:
  - `startStreamProcessor`, `dropStreamProcessor`, `listConnections`, etc.
- External stream sources (e.g., Kafka) require **whitelisting Atlas IPs** or **VPC peering**.

---

## 📚 Further Reading

- [MongoDB Atlas Stream Processing Docs](https://www.mongodb.com/docs/atlas/stream-processing/)
- [Aggregation Pipeline Operators](https://www.mongodb.com/docs/manual/meta/aggregation-quick-reference/)
- [Kafka + MongoDB Integration Guide](https://www.mongodb.com/docs/kafka-connector/current/)
