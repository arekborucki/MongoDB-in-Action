#!/bin/bash
# 💡 This script creates an M0 (Free Tier) or Flex cluster using the Atlas CLI.
# 💡 To switch from M0 to Flex, change --tier M0 to --tier FLEX.
# 👉 Replace <PROJECT_ID> with your actual Atlas project ID.

atlas clusters create demo-shared-cluster \
  --projectId <PROJECT_ID> \
  --provider AWS \
  --region US_EAST_1 \
  --tier M0 \
  --mdbVersion 8.0
