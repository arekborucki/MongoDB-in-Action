# Chapter 19 – Creating Atlas Charts, Database Triggers, and Functions

This directory contains scripts, code samples, and configuration notes from **Chapter 19** of _MongoDB 8.0 in Action_.  
It demonstrates how to visualize MongoDB data with **Atlas Charts**, and how to build **event-driven applications** using **Atlas Triggers** and **Atlas Functions**.

---

## 🔍 What You'll Learn

- How to visualize your data using **MongoDB Atlas Charts**
- Using **Natural Language Mode** to generate charts from English queries
- Creating **billing dashboards** to monitor and optimize Atlas costs
- Responding to database changes with **Atlas Database Triggers**
- Automating logic with **Atlas Scheduled** and **Authentication Triggers**
- Writing serverless **Atlas Functions** using JavaScript and external APIs

---

## 📁 Files Included

| File name                 | Description |
|---------------------------|-------------|
| `chartsSetup.md`          | Instructions for connecting Atlas Charts to a MongoDB collection and creating dashboards. |
| `naturalLanguageQuery.md` | Example of using Natural Language Mode in Atlas Charts to generate a Top 10 cuisines chart. |
| `billingDashboard.md`     | Walkthrough of building a billing dashboard using Atlas Charts. |
| `createTriggerFunction.md`| JavaScript function used in an Atlas Database Trigger to log data changes. |
| `scheduledTrigger.md`     | Example configuration and CRON expression for a Scheduled Trigger. |
| `authenticationTrigger.md`| Guide to creating triggers based on user authentication events. |
| `customFunction.md`       | Atlas Function example using async/await and external HTTP APIs. |
| `README.md`               | Overview of the chapter’s content and associated examples. |

---

## ✅ Requirements

- **MongoDB Atlas** account with access to:
  - **Atlas Charts**
  - **Atlas App Services** (Triggers and Functions)
- A **sample dataset**, e.g. `sample_restaurants` or `sample_analytics`
- Atlas UI access (some features not available via CLI)
- Basic understanding of JavaScript

---

## 📊 Highlights

- **Charts**: Visualize data using column, bar, line, heatmaps, maps, gauges, and more
- **Natural Language**: Describe your chart with English and let Atlas build it
- **Billing Dashboard**: Visual overview of Atlas usage and cost across projects
- **Database Triggers**: Execute logic on insert, update, delete, or replace events
- **Scheduled Triggers**: Run logic at set intervals (e.g., every minute)
- **Authentication Triggers**: Fire logic on user login, creation, or deletion
- **Atlas Functions**: Write backend logic in JavaScript using built-in MongoDB context

---

## 🔗 Additional Resources

- 📘 [MongoDB Atlas Charts Documentation](https://www.mongodb.com/docs/charts/)
- 📘 [Database Triggers Documentation](https://www.mongodb.com/docs/atlas/app-services/triggers/database-triggers/)
- 📘 [Atlas Functions Documentation](https://www.mongodb.com/docs/atlas/app-services/functions/)
- 📘 [Atlas Application Services Overview](https://www.mongodb.com/docs/atlas/app-services/)

---

> 💡 **Tip:** Combine Atlas Triggers and Functions with Charts to build powerful real-time, event-driven visual applications without server infrastructure.
