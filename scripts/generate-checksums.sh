#!/bin/bash

# Script to generate SHA256 checksums for Homebrew formulas
# Usage: ./scripts/generate-checksums.sh <version>

VERSION=${1:-"1.0.0"}
GITHUB_REPO="gaarutyunov/quartr-mcp"

echo "Generating checksums for version $VERSION..."

# Download and checksum the source tarball
SOURCE_URL="https://github.com/$GITHUB_REPO/archive/v$VERSION.tar.gz"
SOURCE_SHA=$(curl -sL "$SOURCE_URL" | shasum -a 256 | cut -d' ' -f1)

# Download and checksum the binaries
MACOS_URL="https://github.com/$GITHUB_REPO/releases/download/v$VERSION/index-macos"
LINUX_URL="https://github.com/$GITHUB_REPO/releases/download/v$VERSION/index-linux"

MACOS_SHA=$(curl -sL "$MACOS_URL" | shasum -a 256 | cut -d' ' -f1)
LINUX_SHA=$(curl -sL "$LINUX_URL" | shasum -a 256 | cut -d' ' -f1)

echo ""
echo "Source tarball SHA256: $SOURCE_SHA"
echo "macOS binary SHA256: $MACOS_SHA"
echo "Linux binary SHA256: $LINUX_SHA"
echo ""

# Update the formulas
sed -i '' "s/sha256 \".*\"/sha256 \"$SOURCE_SHA\"/" Formula/quartr-mcp-server.rb

# Update binary formula with platform-specific checksums
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    sed -i '' '/on_macos/,/end/ s/sha256 ".*"/sha256 "'$MACOS_SHA'"/' Formula/quartr-mcp-server-bin.rb
    sed -i '' '/on_linux/,/end/ s/sha256 ".*"/sha256 "'$LINUX_SHA'"/' Formula/quartr-mcp-server-bin.rb
else
    # Linux
    sed -i '/on_macos/,/end/ s/sha256 ".*"/sha256 "'$MACOS_SHA'"/' Formula/quartr-mcp-server-bin.rb
    sed -i '/on_linux/,/end/ s/sha256 ".*"/sha256 "'$LINUX_SHA'"/' Formula/quartr-mcp-server-bin.rb
fi

echo "Updated Formula files with new checksums"
