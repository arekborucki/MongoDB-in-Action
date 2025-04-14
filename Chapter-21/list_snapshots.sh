#!/bin/bash

# ==========================================
# Script: list_snapshots.sh
# Description:
#   Lists all backup snapshots for a specified MongoDB Atlas cluster.
#   Displays snapshot ID, type, status, creation and expiration dates.
# ==========================================

# Replace with your cluster name
CLUSTER_NAME="MongoDB-in-Action-M10"

echo "📦 Listing snapshots for cluster: $CLUSTER_NAME..."
atlas backups snapshots list "$CLUSTER_NAME" --output table
