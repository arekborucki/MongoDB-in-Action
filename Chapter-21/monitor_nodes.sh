#!/bin/bash

# ==========================================
# Script: monitor_nodes.sh
# Description:
#   Monitors MongoDB Atlas replica set and shard nodes:
#   - Lists all running nodes (processes)
#   - Shows replication lag and roles
# ==========================================

# List all Atlas nodes (processes)
echo "🖥️ Listing all MongoDB Atlas nodes..."
atlas processes list

echo -e "\n📡 Fetching replication info from connected cluster (requires mongosh access)..."

# Print replication info
echo -e "\n📦 Replica set info:"
mongosh --eval "rs.printReplicationInfo(); rs.printSecondaryReplicationInfo()"

# Print global lock queue (can indicate contention)
echo -e "\n⏳ Global lock queues (read/write waits):"
mongosh --eval "db.serverStatus().globalLock.currentQueue"
