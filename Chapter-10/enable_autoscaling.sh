#!/bin/bash
# 💡 This script writes an autoscaling configuration to a JSON file and applies it to a cluster.
# 👉 Replace <PROJECT_ID> with your actual Atlas project ID.

cat <<EOF > enable_autoscaling.json
{
  "autoScaling": {
    "compute": {
      "enabled": true,
      "scaleDownEnabled": true,
      "maxInstanceSize": "M50",
      "minInstanceSize": "M30"
    },
    "diskGBEnabled": true
  }
}
EOF

atlas clusters update prod-m10-cluster --projectId <PROJECT_ID> --file enable_autoscaling.json
