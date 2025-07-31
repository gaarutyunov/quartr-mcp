#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import { QuartrAPIClient } from './quartr-api.js';
import { quartrTools } from './tools.js';
import {
  CompaniesListArgsSchema,
  CompanyByIdArgsSchema,
  EventsListArgsSchema,
  EventByIdArgsSchema,
  EventSummaryArgsSchema,
  EventTypesListArgsSchema,
  EventTypeByIdArgsSchema,
  DocumentsListArgsSchema,
  DocumentByIdArgsSchema,
  DocumentSummaryArgsSchema,
  DocumentPagesArgsSchema,
  DocumentTypesListArgsSchema,
  DocumentTypeByIdArgsSchema,
  TranscriptChaptersArgsSchema,
  AudioListArgsSchema,
  AudioByIdArgsSchema,
  LiveEventsListArgsSchema,
  LiveEventByIdArgsSchema,
  DocumentFileSizeArgsSchema,
  DocumentFileSizeByIdArgsSchema,
  SlidesListArgsSchema,
  SlideByIdArgsSchema,
  SlideSummaryArgsSchema,
  SlidePagesArgsSchema,
} from './tools.js';

class QuartrMCPServer {
  private server: Server;
  private quartrClient: QuartrAPIClient;

  constructor() {
    this.server = new Server(
      {
        name: 'quartr-mcp-server',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    // Get API key from environment variable
    const apiKey = process.env.QUARTR_API_KEY;
    if (!apiKey) {
      throw new Error('QUARTR_API_KEY environment variable is required');
    }

    this.quartrClient = new QuartrAPIClient(apiKey);
    this.setupToolHandlers();
  }

  private setupToolHandlers() {
    // List available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: quartrTools,
      };
    });

    // Handle tool calls
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case 'quartr_list_companies': {
            const validatedArgs = CompaniesListArgsSchema.parse(args || {});
            const result = await this.quartrClient.getCompanies(validatedArgs);
            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(result, null, 2),
                },
              ],
            };
          }

          case 'quartr_get_company': {
            const validatedArgs = CompanyByIdArgsSchema.parse(args);
            const result = await this.quartrClient.getCompanyById(validatedArgs.id);
            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(result, null, 2),
                },
              ],
            };
          }

          case 'quartr_list_events': {
            const validatedArgs = EventsListArgsSchema.parse(args || {});
            const result = await this.quartrClient.getEvents(validatedArgs);
            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(result, null, 2),
                },
              ],
            };
          }

          case 'quartr_get_event': {
            const validatedArgs = EventByIdArgsSchema.parse(args);
            const result = await this.quartrClient.getEventById(validatedArgs.id);
            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(result, null, 2),
                },
              ],
            };
          }

          case 'quartr_get_event_summary': {
            const validatedArgs = EventSummaryArgsSchema.parse(args);
            const result = await this.quartrClient.getEventSummary(validatedArgs.id, {
              length: validatedArgs.length,
              plain: validatedArgs.plain,
            });
            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(result, null, 2),
                },
              ],
            };
          }

          case 'quartr_list_event_types': {
            const validatedArgs = EventTypesListArgsSchema.parse(args || {});
            const result = await this.quartrClient.getEventTypes(validatedArgs);
            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(result, null, 2),
                },
              ],
            };
          }

          case 'quartr_get_event_type': {
            const validatedArgs = EventTypeByIdArgsSchema.parse(args);
            const result = await this.quartrClient.getEventTypeById(validatedArgs.id);
            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(result, null, 2),
                },
              ],
            };
          }

          case 'quartr_list_documents': {
            const validatedArgs = DocumentsListArgsSchema.parse(args || {});
            const result = await this.quartrClient.getDocuments(validatedArgs);
            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(result, null, 2),
                },
              ],
            };
          }

          case 'quartr_get_document': {
            const validatedArgs = DocumentByIdArgsSchema.parse(args);
            const result = await this.quartrClient.getDocumentById(validatedArgs.id);
            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(result, null, 2),
                },
              ],
            };
          }

          case 'quartr_list_reports': {
            const validatedArgs = DocumentsListArgsSchema.parse(args || {});
            const result = await this.quartrClient.getReports(validatedArgs);
            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(result, null, 2),
                },
              ],
            };
          }

          case 'quartr_get_report': {
            const validatedArgs = DocumentByIdArgsSchema.parse(args);
            const result = await this.quartrClient.getReportById(validatedArgs.id);
            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(result, null, 2),
                },
              ],
            };
          }

          case 'quartr_get_report_summary': {
            const validatedArgs = DocumentSummaryArgsSchema.parse(args);
            const result = await this.quartrClient.getReportSummary(validatedArgs.id, {
              length: validatedArgs.length,
              plain: validatedArgs.plain,
            });
            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(result, null, 2),
                },
              ],
            };
          }

          case 'quartr_list_transcripts': {
            const validatedArgs = DocumentsListArgsSchema.parse(args || {});
            const result = await this.quartrClient.getTranscripts(validatedArgs);
            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(result, null, 2),
                },
              ],
            };
          }

          case 'quartr_get_transcript': {
            const validatedArgs = DocumentByIdArgsSchema.parse(args);
            const result = await this.quartrClient.getTranscriptById(validatedArgs.id);
            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(result, null, 2),
                },
              ],
            };
          }

          case 'quartr_get_transcript_summary': {
            const validatedArgs = DocumentSummaryArgsSchema.parse(args);
            const result = await this.quartrClient.getTranscriptSummary(validatedArgs.id, {
              length: validatedArgs.length,
              plain: validatedArgs.plain,
            });
            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(result, null, 2),
                },
              ],
            };
          }

          case 'quartr_get_transcript_chapters': {
            const validatedArgs = TranscriptChaptersArgsSchema.parse(args);
            const result = await this.quartrClient.getTranscriptChapters(validatedArgs.id, {
              limit: validatedArgs.limit,
              cursor: validatedArgs.cursor,
              direction: validatedArgs.direction,
            });
            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(result, null, 2),
                },
              ],
            };
          }

          case 'quartr_list_slides': {
            const validatedArgs = SlidesListArgsSchema.parse(args || {});
            const result = await this.quartrClient.getSlides(validatedArgs);
            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(result, null, 2),
                },
              ],
            };
          }

          case 'quartr_get_slide': {
            const validatedArgs = SlideByIdArgsSchema.parse(args);
            const result = await this.quartrClient.getSlideById(validatedArgs.id);
            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(result, null, 2),
                },
              ],
            };
          }

          case 'quartr_get_slide_summary': {
            const validatedArgs = SlideSummaryArgsSchema.parse(args);
            const result = await this.quartrClient.getSlideSummary(validatedArgs.id, {
              length: validatedArgs.length,
              plain: validatedArgs.plain,
            });
            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(result, null, 2),
                },
              ],
            };
          }

          case 'quartr_get_slide_pages': {
            const validatedArgs = SlidePagesArgsSchema.parse(args);
            const result = await this.quartrClient.getSlidePages(validatedArgs.id, {
              limit: validatedArgs.limit,
              cursor: validatedArgs.cursor,
              direction: validatedArgs.direction,
            });
            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(result, null, 2),
                },
              ],
            };
          }

          case 'quartr_list_document_types': {
            const validatedArgs = DocumentTypesListArgsSchema.parse(args || {});
            const result = await this.quartrClient.getDocumentTypes(validatedArgs);
            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(result, null, 2),
                },
              ],
            };
          }

          case 'quartr_get_document_type': {
            const validatedArgs = DocumentTypeByIdArgsSchema.parse(args);
            const result = await this.quartrClient.getDocumentTypeById(validatedArgs.id);
            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(result, null, 2),
                },
              ],
            };
          }

          case 'quartr_list_live_events': {
            const validatedArgs = LiveEventsListArgsSchema.parse(args || {});
            const result = await this.quartrClient.getLiveEvents(validatedArgs);
            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(result, null, 2),
                },
              ],
            };
          }

          case 'quartr_get_live_event': {
            const validatedArgs = LiveEventByIdArgsSchema.parse(args);
            const result = await this.quartrClient.getLiveEventById(validatedArgs.id);
            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(result, null, 2),
                },
              ],
            };
          }

          case 'quartr_get_document_file_size': {
            const validatedArgs = DocumentFileSizeArgsSchema.parse(args);
            const result = await this.quartrClient.getDocumentFileSize(validatedArgs.url);
            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(result, null, 2),
                },
              ],
            };
          }

          case 'quartr_get_document_file_size_by_id': {
            const validatedArgs = DocumentFileSizeByIdArgsSchema.parse(args);
            const result = await this.quartrClient.getDocumentFileSizeById(validatedArgs.id);
            return {
              content: [
                {
                  type: 'text',
                  text: JSON.stringify(result, null, 2),
                },
              ],
            };
          }

          default:
            throw new Error(`Unknown tool: ${name}`);
        }
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    });
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Quartr MCP server running on stdio');
  }
}

// Run the server
if (require.main === module) {
  const server = new QuartrMCPServer();
  server.run().catch((error) => {
    console.error('Failed to run server:', error);
    process.exit(1);
  });
}
