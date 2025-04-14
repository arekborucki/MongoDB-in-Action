#!/bin/bash

# ==========================================
# Script: analyze_performance.sh
# Description:
#   Uses Atlas CLI to analyze performance of a specific MongoDB Atlas node:
#   - Lists namespaces (collections) with slow queries
#   - Displays suggested indexes
#   - Shows slow query log entries
# ==========================================

# Required variables
PROCESS_NAME="atlas-abc-shard-00-00.abcde.mongodb.net:27017" # Change to your node name
# Use: atlas processes list – to find correct process name for your cluster

# 🧩 Step 1: List slow namespaces
echo "📊 Listing namespaces with slow queries..."
atlas performanceAdvisor namespaces list \
  --processName "$PROCESS_NAME"

# 🧠 Step 2: Get suggested indexes
echo -e "\n🔎 Getting suggested indexes..."
atlas performanceAdvisor suggestedIndexes list \
  --processName "$PROCESS_NAME"

# 📜 Step 3: View slow query logs
echo -e "\n📝 Showing recent slow query logs..."
atlas performanceAdvisor slowQueryLogs list \
  --processName "$PROCESS_NAME"
