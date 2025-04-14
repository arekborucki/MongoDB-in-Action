#!/bin/bash

# ==========================================
# Script: restore_point_in_time.sh
# Description:
#   Restores a MongoDB Atlas cluster to a specific point in time 
#   using Continuous Cloud Backup and oplog replay.
#   Creates a new cluster with data from the specified timestamp.
# ==========================================

# Required variables
SOURCE_CLUSTER="MongoDB-in-Action-M10"        # Original cluster with continuous backup enabled
TARGET_CLUSTER="myRestoreDemo"                # New cluster to restore into
PROJECT_ID="your-project-id"                  # Replace with your Atlas project ID
POINT_IN_TIME=1713097200                      # UNIX timestamp in seconds (e.g., 2024-04-14 12:00:00 UTC)

# Start the point-in-time restore
atlas backups restores start pointInTime \
  --clusterName "$SOURCE_CLUSTER" \
  --pointInTimeUTCSeconds "$POINT_IN_TIME" \
  --targetClusterName "$TARGET_CLUSTER" \
  --targetProjectId "$PROJECT_ID"

# ℹ️ Point-in-time explanation:
# This restore method:
# - Uses the most recent snapshot as a base
# - Replays oplog operations up to the given timestamp (to the exact minute)
# - Creates a new cluster with that state (the original stays untouched)

echo "📦 Restore to $POINT_IN_TIME started for cluster: $SOURCE_CLUSTER → $TARGET_CLUSTER"
echo "🕵️ Use this to watch status:"
echo "    atlas backups restores watch <restore-job-id> --clusterName \"$TARGET_CLUSTER\""
