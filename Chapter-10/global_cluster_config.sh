#!/bin/bash
# 💡 This script creates a global sharded cluster with 2 zones using a JSON spec.
# 👉 Replace <PROJECT_ID> with your actual Atlas project ID.

cat <<EOF > global_cluster_config.json
{
  "clusterType": "SHARDED",
  "providerSettings": {
    "providerName": "AWS",
    "instanceSizeName": "M30",
    "regionName": "US_EAST_1"
  },
  "replicationSpecs": [
    {
      "numShards": 1,
      "zones": [
        {
          "name": "Zone1",
          "regionConfigs": [
            {
              "regionName": "US_EAST_1",
              "electableSpecs": { "instanceSize": "M30", "nodeCount": 3 },
              "analyticsSpecs": { "nodeCount": 1 },
              "readOnlySpecs": { "nodeCount": 1 }
            }
          ]
        },
        {
          "name": "Zone2",
          "regionConfigs": [
            {
              "regionName": "EU_WEST_1",
              "electableSpecs": { "instanceSize": "M30", "nodeCount": 3 }
            }
          ]
        }
      ]
    }
  ]
}
EOF

atlas clusters create global-cluster --projectId <PROJECT_ID> --file global_cluster_config.json
