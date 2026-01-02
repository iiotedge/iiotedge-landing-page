#!/bin/bash

# Build script for IIoTEdge Landing Page

set -e

echo "🔨 Building IIoTEdge Landing Page..."

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

# Build the application
echo "🏗️  Building Next.js application..."
pnpm build

echo "✅ Build complete!"
echo ""
echo "Next steps:"
echo "  - For Docker: docker-compose up -d --build"
echo "  - For manual: See DEPLOYMENT.md"


