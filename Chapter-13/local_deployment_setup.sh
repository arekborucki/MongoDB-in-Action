#!/bin/bash

# local_deployment_setup.sh
# This script sets up a local MongoDB Atlas cluster using the Atlas CLI.
# It checks for required tools (Atlas CLI and Docker), starts the deployment,
# and provides the connection string for immediate use.

echo "🚀 Starting local Atlas cluster setup..."

# Check for Atlas CLI
if ! command -v atlas &> /dev/null; then
    echo "❌ Atlas CLI is not installed. Please install it from:"
    echo "   https://www.mongodb.com/docs/atlas/cli/stable/install/"
    exit 1
fi

# Check for Docker
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed or not available in PATH."
    echo "   Install Docker Desktop (macOS/Windows) or Docker Engine (Linux) first."
    exit 1
fi

echo "✅ Atlas CLI and Docker are installed."

# Run Atlas CLI deployment setup
echo "🔧 Running: atlas deployments setup --type local"
atlas deployments setup --type local

echo ""
echo "📡 To connect to your local cluster, run:"
echo "    atlas deployments connect --type LOCAL"

echo ""
echo "📁 To view running containers:"
echo "    docker ps"

echo ""
echo "📊 To load sample data (after downloading sampledata.archive), run:"
echo "    mongorestore --archive=sampledata.archive --uri <your-connection-string>"

echo ""
echo "✅ Done! You can now use mongosh to explore your local Atlas cluster."
