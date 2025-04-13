#!/bin/bash

# Create a new MongoDB database user in the current Atlas project
# You'll be prompted to enter the password manually (secure input)

atlas dbusers create \
  --username "<your-username>" \
  --role atlasAdmin
