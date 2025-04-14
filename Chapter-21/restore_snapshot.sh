#!/bin/bash

# ==========================================
# Script: restore_snapshot.sh
# Description:
#   Restores a MongoDB Atlas cluster from a snapshot using the Atlas CLI.
#   Can target the same cluster or a different one.
#   The "automated" restore type uses full snapshot restore – it wipes the target cluster and replaces it.
# ==========================================

# Required variables
SOURCE_CLUSTER="MongoDB-in-Action-M10"         # Cluster where the snapshot was taken
TARGET_CLUSTER="MongoDB-in-Action-M10"         # Cluster to restore to (can be same or different)
SNAPSHOT_ID="your-snapshot-id"                 # Get with: atlas backups snapshots list <cluster>
PROJECT_ID="your-project-id"                   # Replace with your actual Atlas Project ID

# Start restore process
atlas backups restores start automated \
  --clusterName "$SOURCE_CLUSTER" \
  --snapshotId "$SNAPSHOT_ID" \
  --targetClusterName "$TARGET_CLUSTER" \
  --targetProjectId "$PROJECT_ID"

# What is "automated"?
# The "automated" restore method tells Atlas to:
# - Wipe all existing data in the target cluster
# - Replace it entirely with the data from the specified snapshot
# - Perform the operation automatically (no manual steps or download needed)

# Instructions
echo "🔄 Restore initiated from snapshot $SNAPSHOT_ID to cluster: $TARGET_CLUSTER"
echo "📡 To monitor the restore status, run:"
echo "    atlas backups restores watch <restore-job-id> --clusterName \"$TARGET_CLUSTER\""
