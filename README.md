# Quartr MCP Server

A Model Context Protocol (MCP) server that provides access to the Quartr API for financial data and company information.

## Overview

This MCP server connects to the Quartr API to provide access to:
- Public company information and profiles
- Corporate events (earnings calls, presentations, etc.)
- Financial documents (reports, transcripts, slide decks)
- Live events and audio streams
- Document summaries powered by AI

## Prerequisites

- Node.js 18.0.0 or higher
- A Quartr API key (obtain from [Quartr API](https://api.quartr.com))

## Installation

### Option 1: Homebrew (macOS/Linux)

Install using Homebrew:
```bash
# Install from source (requires Node.js)
brew install quartr-mcp-server

# Or install binary version (no Node.js required)
brew install quartr-mcp-server-bin
```

### Option 2: Pre-built Binaries

Download the latest release from the [releases page](https://github.com/gaarutyunov/quartr-mcp/releases):

- macOS: `index-macos`
- Linux: `index-linux` 
- Windows: `index-win.exe`

Make the binary executable and move to your PATH:
```bash
# macOS/Linux
chmod +x index-macos
sudo mv index-macos /usr/local/bin/quartr-mcp-server
```

### Option 3: From Source

1. Clone or download this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the project:
   ```bash
   npm run build
   ```
4. Build as a single binary (optional):
   ```bash
   npm run build:binary
   ```

## Configuration

### API Key Setup

Set your Quartr API key as an environment variable:

```bash
export QUARTR_API_KEY="your-api-key-here"
```

### MCP Client Configuration

To use this server with MCP clients like Claude Desktop, you need to add it to your MCP configuration file.

#### Claude Desktop Configuration

Add the following to your Claude Desktop configuration file:

**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows**: `%APPDATA%/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "quartr": {
      "command": "npx",
      "args": ["-y", "quartr-mcp-server"],
      "env": {
        "QUARTR_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

#### Using with Local Installation

If you've installed the server locally, you can configure it to run from your local installation:

```json
{
  "mcpServers": {
    "quartr": {
      "command": "node",
      "args": ["/path/to/quartr-mcp/build/index.js"],
      "env": {
        "QUARTR_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

#### Using with Binary Installation

If you're using the pre-built binary:

```json
{
  "mcpServers": {
    "quartr": {
      "command": "/usr/local/bin/quartr-mcp-server",
      "env": {
        "QUARTR_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

#### Using with Homebrew Installation

If installed via Homebrew:

```json
{
  "mcpServers": {
    "quartr": {
      "command": "quartr-mcp-server",
      "env": {
        "QUARTR_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

**Note**: After updating the configuration, restart Claude Desktop for the changes to take effect.

### Verifying Configuration

To verify that the MCP server is properly configured and connected:

1. **Test the server directly**: Run the server standalone to ensure it starts without errors:
   ```bash
   QUARTR_API_KEY="your-api-key" npm start
   ```

2. **Check Claude Desktop connection**: In Claude Desktop, you should see the Quartr tools available when you start a conversation. You can test by asking: "List some companies using the Quartr API" or "What Quartr tools are available?"

3. **Test API connectivity**: Try a simple query like:
   ```
   Use the Quartr API to find information about Apple (AAPL)
   ```

If the server fails to connect, check:
- Your API key is valid and properly set
- Your internet connection allows access to `https://api.quartr.com`
- The server process has proper permissions to run

## Usage

### Running the Server

Start the MCP server:
```bash
npm start
```

Run the JavaScript bundle:
```bash
npm run start:binary
# or directly:
node build/index.js
```

Run the native executable (macOS example):
```bash
./exe/index-macos
```

For development with automatic rebuild:
```bash
npm run dev
```

### Available Tools

The server provides the following MCP tools:

#### Companies
- `quartr_list_companies` - List companies with filtering options
- `quartr_get_company` - Get detailed company information by ID

#### Events
- `quartr_list_events` - List corporate events with filtering
- `quartr_get_event` - Get detailed event information by ID
- `quartr_get_event_summary` - Get AI-generated event summary
- `quartr_list_event_types` - List available event types
- `quartr_get_event_type` - Get event type details by ID

#### Documents
- `quartr_list_documents` - List all documents with filtering
- `quartr_get_document` - Get document details by ID
- `quartr_list_reports` - List financial reports
- `quartr_get_report` - Get report details by ID
- `quartr_get_report_summary` - Get AI-generated report summary
- `quartr_list_transcripts` - List earnings call transcripts
- `quartr_get_transcript` - Get transcript details by ID
- `quartr_get_transcript_summary` - Get AI-generated transcript summary
- `quartr_get_transcript_chapters` - Get transcript chapters/sections
- `quartr_list_document_types` - List available document types
- `quartr_get_document_type` - Get document type details by ID

#### Live Events
- `quartr_list_live_events` - List live events with filtering
- `quartr_get_live_event` - Get live event details by ID

### Example Usage

Here are some example queries you can make using this MCP server:

1. **Find Apple's company information:**
   ```
   Use quartr_list_companies with tickers="AAPL"
   ```

2. **Get recent events for a company:**
   ```
   Use quartr_list_events with companyIds="4742" and limit=5
   ```

3. **Get an AI summary of an earnings call:**
   ```
   Use quartr_get_event_summary with id=128301 and length="short"
   ```

4. **Find recent financial reports:**
   ```
   Use quartr_list_reports with documentGroupIds="3,4" and limit=10
   ```

## Filtering and Pagination

Most list endpoints support filtering by:
- **countries**: ISO 3166-1 alpha-2 country codes (e.g., "US,CA")
- **exchanges**: Exchange symbols (e.g., "NasdaqCM,NasdaqGS,NYSE")
- **tickers**: Company ticker symbols (e.g., "AAPL,AMZN")
- **startDate/endDate**: ISO 8601 date ranges
- **companyIds**: Specific company IDs
- **eventIds**: Specific event IDs

Pagination is handled with:
- **limit**: Number of results (max varies by endpoint)
- **cursor**: Pagination cursor for next page
- **direction**: Sort direction ("asc" or "desc")

## Document Groups

Documents are categorized into groups:
- **1**: Earnings Release
- **2**: Press Release  
- **3**: Interim Report
- **4**: Annual Report

## Live Event States

Live events can have the following states:
- `notLive` - Event is not live
- `willBeLive` - Event will go live soon
- `live` - Event is currently live
- `liveFailedInterrupted` - Live stream was interrupted
- `liveFailedNoAccess` - Could not access live stream
- `liveFailedNotStarted` - Live stream failed to start
- `processingRecording` - Recording is being processed
- `processingRecordingFailed` - Recording processing failed
- `recordingAvailable` - Recording is available

## Error Handling

The server includes comprehensive error handling:
- API authentication errors
- Rate limiting
- Invalid parameters
- Network connectivity issues

Errors are returned as MCP error responses with descriptive messages.

## Deployment

This project supports multiple deployment options:

### Standard Node.js Deployment
- Requires Node.js 18+ on the target system
- Smallest footprint with `dist/` files (~few KB)
- Use `npm start` to run

### JavaScript Bundle Deployment  
- Requires Node.js 18+ on the target system
- Single file deployment with `build/index.js` (~270KB)
- All dependencies bundled, no `node_modules` needed
- Use `node build/index.js` to run

### Native Executable Deployment
- No Node.js required on target system
- Self-contained executables (~40-53MB)
- Platform-specific binaries in `exe/` directory
- Just run the executable directly

Choose the deployment method that best fits your infrastructure and requirements.

## Development

### Project Structure

```
src/
├── index.ts          # Main MCP server implementation
├── quartr-api.ts     # Quartr API client
├── tools.ts          # MCP tool definitions and schemas
└── types.ts          # TypeScript type definitions
```

### Building

Standard TypeScript build:
```bash
npm run build
```

Build as a single JavaScript bundle (~270KB):
```bash
npm run build:binary
```

Build as native executables for multiple platforms:
```bash
npm run build:exe
```

This creates standalone executables in the `exe/` directory:
- `index-macos` - macOS executable (~53MB)
- `index-linux` - Linux executable (~48MB) 
- `index-win.exe` - Windows executable (~40MB)

The JavaScript bundle (`build/index.js`) requires Node.js to run but is much smaller. The native executables are self-contained and don't require Node.js installation.

### Cleaning

```bash
npm run clean
```

## API Reference

This server is based on the Quartr Public API v3. For detailed API documentation, visit:
https://api.quartr.com/public/v3/openapi.json

## License

MIT

## Support

For issues related to this MCP server, please create an issue in the repository.
For Quartr API questions, consult the official Quartr API documentation.
