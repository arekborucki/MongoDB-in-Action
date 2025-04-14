#!/bin/bash

# MongoDB Atlas – Create Custom Roles via Atlas CLI
# This script demonstrates how to define custom roles with scoped privileges.

# ✅ REQUIREMENTS:
# - Atlas CLI installed: https://www.mongodb.com/docs/atlas/cli/
# - Logged in via: atlas auth login
# - Replace <YourProjectID> with your actual MongoDB Atlas project ID

# 🎯 Example 1 – Create a custom role with specific field-level privileges
atlas customDbRoles create customReadUpdateRole \
  --projectId <YourProjectID> \
  --privilege 'UPDATE@sample_training.routes' \
  --privilege 'FIND@sample_supplies.sales'

# 🎯 Example 2 – Create a role that inherits an existing one
atlas customDbRoles create readWriteAnalyticsRole \
  --projectId <YourProjectID> \
  --privilege 'INSERT@sample_analytics' \
  --inheritedRole 'read@sample_analytics'

# 🔎 Example 3 – List all custom roles in the project
atlas customDbRoles list --projectId <YourProjectID>

# 💡 TIP:
# Use 'atlas projects list' to find your Project ID
# Use custom roles to enforce the Principle of Least Privilege
