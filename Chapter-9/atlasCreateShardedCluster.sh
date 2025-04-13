# Creates a sharded cluster named "MongoDB-in-Action-Sharded" on Atlas using GCP in the CENTRAL_US region.
# Requires Atlas CLI and billing enabled. The cluster uses the M30 tier and MongoDB 8.0.

atlas clusters create "MongoDB-in-Action-Sharded" \
  --provider GCP \
  --region CENTRAL_US \
  --tier M30 \
  --type SHARDED \
  --shards 2 \
  --mdbVersion 8.0
