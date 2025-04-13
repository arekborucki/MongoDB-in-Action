#!/bin/bash
# 💡 This script creates a dedicated M10 cluster with disk auto-scaling and backups enabled.
# 👉 Replace <PROJECT_ID> with your actual Atlas project ID.

atlas clusters create prod-m10-cluster \
  --projectId <PROJECT_ID> \
  --provider AWS \
  --region US_EAST_1 \
  --tier M10 \
  --clusterType REPLICASET \
  --diskSizeGB 20 \
  --mdbVersion 8.0 \
  --autoScalingDiskGbEnabled \
  --backup
