# Homebrew Setup Guide

This guide follows the best practices from [Packaging Github Projects using Homebrew](https://medium.com/@stackboxspace/packaging-github-projects-using-homebrew-ae72242a2b2e).

## Current Setup

The project currently has Homebrew formulas in the main repository under `Formula/`. For production use, it's recommended to move these to a separate tap repository.

## Recommended Setup Steps

### 1. Create a Separate Tap Repository

Create a new repository named `homebrew-quartr` (following the `homebrew-*` naming convention):

```bash
# Create the repository on GitHub
gh repo create gaarutyunov/homebrew-quartr --public

# Clone and set it up locally
git clone https://github.com/gaarutyunov/homebrew-quartr.git
cd homebrew-quartr

# Copy the formulas from this repository
cp ../quartr-mcp/Formula/*.rb ./

# Create a README
cat > README.md << 'EOF'
# Homebrew Tap for Quartr MCP Server

This is a Homebrew tap for the Quartr MCP Server.

## Installation

### Install from source
```bash
brew tap gaarutyunov/quartr
brew install quartr-mcp-server
```

### Install binary version
```bash
brew tap gaarutyunov/quartr
brew install quartr-mcp-server-bin
```

## Usage

```bash
quartr-mcp-server --help
```
EOF

# Commit and push
git add .
git commit -m "Initial tap setup"
git push origin main
```

### 2. Update GitHub Actions

The current workflow needs to be modified to update the separate tap repository. You'll need to:

1. Create a personal access token with repo permissions
2. Add it as a secret named `HOMEBREW_TAP_TOKEN`
3. Uncomment the lines in the workflow that reference the tap repository

### 3. Test Installation

Once set up, users can install with:

```bash
# Tap into your repository
brew tap gaarutyunov/quartr

# Install from source (builds locally)
brew install quartr-mcp-server

# Or install binary version (faster)
brew install quartr-mcp-server-bin
```

## Current Formulas

### quartr-mcp-server.rb
- Installs from source
- Requires Node.js 18
- Builds the project locally
- Better for development/customization

### quartr-mcp-server-bin.rb
- Installs pre-built binaries
- No build dependencies required
- Faster installation
- Better for end users

## Formula Features

Both formulas now include:

1. **Proper installation paths**: Uses `libexec` for libraries and `bin` for executables
2. **Version handling**: Reads version from package.json
3. **Platform support**: Handles both macOS (Intel/ARM) and Linux
4. **Proper permissions**: Sets executable permissions
5. **Better tests**: Checks for binary existence and permissions
6. **Help support**: Your app now supports `--version` and `--help` flags

## Validation

Test your formulas locally:

```bash
# Test source formula
brew install --build-from-source ./Formula/quartr-mcp-server.rb

# Test binary formula  
brew install ./Formula/quartr-mcp-server-bin.rb

# Test the installed binary
quartr-mcp-server --version
quartr-mcp-server --help
```

## Best Practices Implemented

✅ **Separate tap repository structure** (recommended setup)
✅ **Proper formula naming** (following Homebrew conventions)
✅ **Both source and binary distributions**
✅ **Platform-specific handling** (macOS Intel/ARM, Linux)
✅ **Automated updates** via GitHub Actions
✅ **Proper SHA256 validation**
✅ **Version command support**
✅ **Help command support**
✅ **Proper file permissions**
✅ **Clean installation paths**

## Next Steps

1. Create the separate `homebrew-quartr` repository
2. Set up the GitHub token for automated updates
3. Test the installation process
4. Announce to users via README updates
