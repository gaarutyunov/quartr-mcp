# Development and Release Guide

## Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/gaarutyunov/quartr-mcp.git
   cd quartr-mcp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment:
   ```bash
   export QUARTR_API_KEY="your-api-key-here"
   ```

4. Run in development mode:
   ```bash
   npm run dev
   ```

## Building

### Build TypeScript to JavaScript
```bash
npm run build
```

### Build Single Binary (with dependencies)
```bash
npm run build:binary
```

### Build Platform-Specific Executables
```bash
npm run build:exe
```

This creates executables for:
- macOS: `exe/index-macos`
- Linux: `exe/index-linux`
- Windows: `exe/index-win.exe`

## Testing

Run the test suite:
```bash
npm test
```

Test the demo:
```bash
npm run demo
```

## Releasing

### Automatic Release via Git Tags

1. Update version and create git tag:
   ```bash
   # For patch release (1.0.0 -> 1.0.1)
   npm run release:patch
   
   # For minor release (1.0.0 -> 1.1.0)
   npm run release:minor
   
   # For major release (1.0.0 -> 2.0.0)
   npm run release:major
   ```

2. The GitHub Actions pipeline will automatically:
   - Build executables for all platforms
   - Create a GitHub release with assets
   - Update Homebrew formulas with correct checksums

### Manual Release

1. Update version in `package.json`
2. Create and push a git tag:
   ```bash
   git tag v1.0.1
   git push origin v1.0.1
   ```

## GitHub Actions

The project includes two workflows:

### CI Workflow (`.github/workflows/ci.yml`)
- Runs on every push and pull request
- Tests with Node.js 18.x and 20.x
- Builds and runs tests
- Uploads build artifacts

### Release Workflow (`.github/workflows/release.yml`)
- Triggers on git tags starting with 'v'
- Builds executables for all platforms
- Creates GitHub release with binaries
- Automatically updates Homebrew formulas

## Homebrew Installation

Two Homebrew formulas are provided:

### Source-based Formula (`Formula/quartr-mcp-server.rb`)
- Installs from source
- Requires Node.js to be present
- Smaller download size

### Binary Formula (`Formula/quartr-mcp-server-bin.rb`)
- Uses pre-built executables
- No Node.js dependency required
- Larger download but faster installation

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Secrets Required

For full CI/CD functionality, the following GitHub secrets may be needed:

- `QUARTR_API_KEY`: API key for testing (optional)
- `GITHUB_TOKEN`: Automatically provided by GitHub Actions
- `HOMEBREW_TOKEN`: Only needed if using external Homebrew tap
