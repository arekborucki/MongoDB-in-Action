#!/bin/bash

# ==========================================
# Script: download_logs.sh
# Description:
#   Downloads MongoDB logs from a specified host in Atlas.
#   Useful for debugging slow queries, errors, or system behavior.
# ==========================================

# 👉 Replace with your hostname from `atlas processes list`
HOST="atlas-xyz-shard-00-00.abcde.mongodb.net"

# Choose one of: mongodb.gz, mongos.gz, mongodb-audit-log.gz, mongos-audit-log.gz
LOG_TYPE="mongodb.gz"

# Optional: Project ID (only if multiple projects configured)
# PROJECT_ID="your-project-id"

echo "📥 Downloading $LOG_TYPE logs from host $HOST..."
atlas logs download "$HOST" "$LOG_TYPE"

# Output will be saved in the current directory
