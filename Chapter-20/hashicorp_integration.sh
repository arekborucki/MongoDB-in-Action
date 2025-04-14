#!/bin/bash

# ------------------------------------------------------------------------------
# MongoDB Atlas + HashiCorp Vault Integration Script
# ------------------------------------------------------------------------------
# This script configures Vault to dynamically generate MongoDB Atlas credentials.
# It assumes Vault is already initialized, unsealed, and the database secrets
# engine is enabled.
#
# ✅ Prerequisites:
# - MongoDB Atlas account and API keys with project-level access
# - Atlas CLI or Console used to pre-create database users and roles
# - HashiCorp Vault (v1.10+ recommended)
# ------------------------------------------------------------------------------

# 🔐 Set environment variables (replace with your values)
export ATLAS_PROJECT_ID="<YourAtlasProjectID>"
export ATLAS_PUBLIC_KEY="<YourPublicAPIKey>"
export ATLAS_PRIVATE_KEY="<YourPrivateAPIKey>"

# Step 1: Enable Vault database secrets engine (if not already enabled)
vault secrets enable database

# Step 2: Register MongoDB Atlas as a Vault DB plugin
vault write database/config/mongodbatlas \
  plugin_name=mongodb-atlas-database-plugin \
  allowed_roles="readonly-role,readwrite-role" \
  project_id="$ATLAS_PROJECT_ID" \
  public_key="$ATLAS_PUBLIC_KEY" \
  private_key="$ATLAS_PRIVATE_KEY"

# Step 3: Create a Vault role mapped to MongoDB Atlas read-only database role
vault write database/roles/readonly-role \
  db_name=mongodbatlas \
  creation_statements='{
    "db": "sample_analytics",
    "roles": [{"roleName": "read", "databaseName": "sample_analytics"}]
  }' \
  default_ttl="1h" \
  max_ttl="24h"

# Step 4: Create a second role with read/write permissions
vault write database/roles/readwrite-role \
  db_name=mongodbatlas \
  creation_statements='{
    "db": "sample_analytics",
    "roles": [{"roleName": "readWrite", "databaseName": "sample_analytics"}]
  }' \
  default_ttl="1h" \
  max_ttl="24h"

# Step 5: Generate dynamic credentials (read-only example)
vault read database/creds/readonly-role

# Example Output:
# Key                Value
# ---                -----
# lease_id           database/creds/readonly-role/XxYyZz...
# lease_duration     1h
# username           v-token-readonly-xyz123
# password           abcD3FgHiJkL
# ttl                1h

# 📌 Notes:
# - These credentials auto-expire after TTL and are deleted by Vault.
# - You can define more fine-grained MongoDB Atlas roles using the Atlas CLI.
# - Use these dynamic creds in your application to avoid hardcoded secrets.

# 🔗 References:
# - https://www.mongodb.com/products/integrations/hashicorp-vault
# - https://developer.hashicorp.com/vault/docs/secrets/databases/mongodbatlas
