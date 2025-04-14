#!/bin/bash

# ==========================================
# Script: watch_alerts.sh
# Description:
#   Displays all currently OPEN alerts in the specified Atlas project.
#   Useful for ongoing monitoring of cluster health.
# ==========================================

# Replace with your actual project ID
PROJECT_ID="your-project-id"

# Fetch and filter open alerts
echo "📢 Checking OPEN alerts for project ID: $PROJECT_ID..."
atlas alerts list --projectId "$PROJECT_ID" --output json | jq -r '
  .[] | select(.status=="OPEN") | {
    ID: .id,
    TYPE: .eventTypeName,
    CREATED: .created,
    CLUSTER: .groupId,
    MESSAGE: .alertConfig.eventTypeName
  }
'

# 🧠 Notes:
# - Requires `atlascli` and `jq`
# - Shows only OPEN alerts
# - You can add logic to send notifications if output is non-empty
