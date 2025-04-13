#!/bin/bash
# Creates a dedicated M10 cluster using Atlas CLI with auto-scaling enabled

atlas clusters create prod-m10-cluster \
  --projectId <PROJECT_ID> \
  --provider AWS \
  --region US_EAST_1 \
  --tier M10 \
  --clusterType REPLICASET \
  --diskSizeGB 20 \
  --mdbVersion 8.0 \
  --autoScalingDiskGbEnabled \
  --backup true
