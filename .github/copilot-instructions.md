# Copilot Instructions for Quartr MCP Server

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This is an MCP (Model Context Protocol) server for the Quartr API that provides financial data and company information.

You can find more info and examples at https://modelcontextprotocol.io/llms-full.txt

## Project Structure
- `src/index.ts` - Main MCP server implementation
- `src/types.ts` - TypeScript type definitions for Quartr API
- `src/quartr-api.ts` - Quartr API client implementation
- `src/tools.ts` - MCP tool definitions

## API Information
- The Quartr API base URL is: https://api.quartr.com
- Authentication is done via API key in the `x-api-key` header
- The API provides endpoints for companies, events, documents, transcripts, and live data
- All endpoints support pagination using cursor-based pagination

## MCP Tools
The server provides tools for:
- Searching and retrieving company information
- Listing and retrieving corporate events
- Accessing financial documents (reports, transcripts, slides)
- Getting event and document summaries
- Listing live events and audio streams

## Development Guidelines
- Use TypeScript with strict typing
- Follow the MCP SDK patterns for tool definitions
- Handle API errors gracefully
- Implement proper input validation using Zod schemas
- Support pagination for list endpoints
- Cache frequently accessed data when appropriate
