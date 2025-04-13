#!/bin/bash

# Create a new MongoDB database user
# Tip: You must be logged in via `atlas login`
# Tip: Set project/org with `atlas config set project_id <id>` and `atlas config set org_id <id>` first

atlas dbusers create \
  --username "<your-username>" \
  --role atlasAdmin
