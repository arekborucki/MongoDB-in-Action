#!/bin/bash

# Create an Online Archive in Atlas using Atlas CLI
# Replace <your-cluster-name> with your Atlas cluster name
# Requires prior login via `atlas auth login`

atlas clusters onlineArchive create \
  --clusterName MongoDB-in-Action-M10 \
  --db sample_supplies \
  --collection sales \
  --dateField saleDate \
  --archiveAfter 5 \
  --partition saleDate,customer \
  --output json
