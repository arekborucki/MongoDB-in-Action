#!/bin/bash

# ==========================================
# Script: create_backup.sh
# Description: 
#   Creates an on-demand backup snapshot 
#   for a MongoDB Atlas cluster using the Atlas CLI.
# ==========================================

# Required inputs
CLUSTER_NAME="MongoDB-in-Action-M10"
DESCRIPTION="On-demand backup from script"
PROJECT_ID="your-project-id" # Replace with your actual Atlas Project ID

# Create snapshot
atlas backups snapshots create "$CLUSTER_NAME" \
  --desc "$DESCRIPTION" \
  --projectId "$PROJECT_ID"

# Instructions
echo "📦 Snapshot creation triggered for cluster: $CLUSTER_NAME"
echo "💡 Use the following command to list and verify snapshot status:"
echo "   atlas backups snapshots list \"$CLUSTER_NAME\" --projectId \"$PROJECT_ID\""
