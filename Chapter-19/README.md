# Chapter 19 – Creating Atlas Charts, Database Triggers, and Functions

This directory contains examples and code samples from **Chapter 19** of _MongoDB 8.0 in Action_.  
It explores how to **visualize MongoDB data** using **Atlas Charts**, and how to **automate backend logic** using **Atlas Triggers** and **Atlas Functions**.

---

## 📊 What You'll Learn

- How to build rich, interactive dashboards with **MongoDB Atlas Charts**
- How to generate visualizations using **natural language queries**
- How to create a **custom billing dashboard**
- How to use **Atlas Triggers** for real-time, serverless event handling
- How to write **Atlas Functions** in JavaScript to execute complex logic
- How to build fully reactive and event-driven applications without managing backend infrastructure

---

## 📁 Files Included

| File name                 | Description |
|---------------------------|-------------|
| `natural_language_chart.json` | Example of an aggregation pipeline auto-generated from a natural language query in Atlas Charts. |
| `atlas_trigger_function.js` | Atlas Trigger Function that logs insert, update, and delete operations into a dedicated logging collection. |
| `scheduled_trigger.cron`  | CRON expression example used to run a Scheduled Trigger every minute. |
| `fetch_user_data_function.js` | Example Atlas Function that fetches user data from an external API using `async/await`. |
| `hello_function.js`       | A simple Atlas Function that returns a greeting, used for testing or introductory use cases. |

---

## ✅ Requirements

- **MongoDB Atlas Account**
- **Sample dataset**: `sample_restaurants`
- **Atlas Charts** enabled
- **Atlas App Services** enabled
- Basic understanding of:
  - Change Streams
  - JavaScript (ES6+)
  - CRON expressions for Scheduled Triggers

---

## ⚠️ Notes

- **Natural Language Charts** currently rely on Microsoft Azure OpenAI (subject to change).
- Trigger execution depends on the **ordering setting** – unordered triggers support up to **10,000 concurrent events**.
- Each **Atlas Trigger** is linked to a corresponding **Atlas Function**.
- For scheduled operations, you can define **CRON expressions** for flexible automation.
- Atlas Functions are **serverless** and support full **JavaScript/Node.js** functionality with access to **external APIs** and **npm packages**.

---

## 🔗 References

- [MongoDB Atlas Charts Documentation](https://www.mongodb.com/docs/charts/)
- [Atlas Application Services – Triggers](https://www.mongodb.com/docs/atlas/app-services/triggers/)
- [Atlas Functions Overview](https://www.mongodb.com/docs/atlas/app-services/functions/)
