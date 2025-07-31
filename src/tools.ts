import { z } from 'zod';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

// Zod schemas for input validation
export const CompaniesListArgsSchema = z.object({
  countries: z.string().optional().describe('Comma-separated list of country codes (ISO 3166-1 alpha-2), e.g., "US,CA"'),
  exchanges: z.string().optional().describe('Exchange symbols without blankspace, e.g., "NasdaqCM,NasdaqGS,NYSE"'),
  tickers: z.string().optional().describe('Comma-separated list of company tickers, e.g., "AAPL,AMZN"'),
  limit: z.number().min(1).max(50).optional().default(10).describe('Maximum number of items to return (1-50)'),
  cursor: z.number().min(0).optional().default(0).describe('Cursor for pagination'),
  direction: z.enum(['asc', 'desc']).optional().default('asc').describe('Sort direction'),
  isins: z.string().optional().describe('Comma-separated list of ISINs, e.g., "US0378331005,US0231351067"'),
  updatedBefore: z.string().optional().describe('Query data updated before this date (ISO 8601)'),
  updatedAfter: z.string().optional().describe('Query data updated after this date (ISO 8601)'),
  ids: z.string().optional().describe('Comma-separated list of company IDs, e.g., "4024,5025,6026"'),
});

export const CompanyByIdArgsSchema = z.object({
  id: z.number().positive().describe('Company ID'),
});

export const EventsListArgsSchema = z.object({
  countries: z.string().optional().describe('Comma-separated list of country codes (ISO 3166-1 alpha-2)'),
  exchanges: z.string().optional().describe('Exchange symbols without blankspace'),
  tickers: z.string().optional().describe('Comma-separated list of company tickers'),
  limit: z.number().min(1).max(500).optional().default(10).describe('Maximum number of items to return (1-500)'),
  cursor: z.number().min(0).optional().default(0).describe('Cursor for pagination'),
  direction: z.enum(['asc', 'desc']).optional().default('asc').describe('Sort direction'),
  endDate: z.string().optional().describe('End date (ISO 8601)'),
  startDate: z.string().optional().describe('Start date (ISO 8601)'),
  isins: z.string().optional().describe('Comma-separated list of ISINs'),
  typeIds: z.string().optional().describe('Comma-separated list of event type IDs'),
  companyIds: z.string().optional().describe('Comma-separated list of company IDs'),
  sortBy: z.enum(['id', 'date']).optional().default('id').describe('Field to sort by'),
  updatedBefore: z.string().optional().describe('Query data updated before this date (ISO 8601)'),
  updatedAfter: z.string().optional().describe('Query data updated after this date (ISO 8601)'),
});

export const EventByIdArgsSchema = z.object({
  id: z.number().positive().describe('Event ID'),
});

export const EventSummaryArgsSchema = z.object({
  id: z.number().positive().describe('Event ID'),
  length: z.enum(['line', 'short', 'long']).optional().default('short').describe('Summary length preset'),
  plain: z.boolean().optional().default(false).describe('Plain text summary without document sources embedded'),
});

export const EventTypesListArgsSchema = z.object({
  limit: z.number().min(1).max(50).optional().default(10).describe('Maximum number of items to return (1-50)'),
  cursor: z.number().min(0).optional().default(0).describe('Cursor for pagination'),
  direction: z.enum(['asc', 'desc']).optional().default('asc').describe('Sort direction'),
});

export const EventTypeByIdArgsSchema = z.object({
  id: z.number().positive().describe('Event type ID'),
});

export const DocumentsListArgsSchema = z.object({
  countries: z.string().optional().describe('Comma-separated list of country codes (ISO 3166-1 alpha-2)'),
  exchanges: z.string().optional().describe('Exchange symbols without blankspace'),
  tickers: z.string().optional().describe('Comma-separated list of company tickers'),
  limit: z.number().min(1).max(500).optional().default(10).describe('Maximum number of items to return (1-500)'),
  cursor: z.number().min(0).optional().default(0).describe('Cursor for pagination'),
  direction: z.enum(['asc', 'desc']).optional().default('asc').describe('Sort direction'),
  endDate: z.string().optional().describe('End date (ISO 8601)'),
  startDate: z.string().optional().describe('Start date (ISO 8601)'),
  typeIds: z.string().optional().describe('Comma-separated list of document type IDs'),
  isins: z.string().optional().describe('Comma-separated list of ISINs'),
  companyIds: z.string().optional().describe('Comma-separated list of company IDs'),
  eventIds: z.string().optional().describe('Comma-separated list of event IDs'),
  documentGroupIds: z.string().optional().describe('Document group IDs: 1=Earnings Release, 2=Press Release, 3=Interim Report, 4=Annual Report'),
  updatedBefore: z.string().optional().describe('Query data updated before this date (ISO 8601)'),
  updatedAfter: z.string().optional().describe('Query data updated after this date (ISO 8601)'),
});

export const DocumentByIdArgsSchema = z.object({
  id: z.number().positive().describe('Document ID'),
});

export const DocumentSummaryArgsSchema = z.object({
  id: z.number().positive().describe('Document ID'),
  length: z.enum(['line', 'short', 'long']).optional().default('short').describe('Summary length preset'),
  plain: z.boolean().optional().default(false).describe('Plain text summary without document sources embedded'),
});

export const DocumentPagesArgsSchema = z.object({
  id: z.number().positive().describe('Document ID'),
  limit: z.number().min(1).max(500).optional().default(10).describe('Maximum number of items to return (1-500)'),
  cursor: z.number().min(0).optional().default(0).describe('Cursor for pagination'),
  direction: z.enum(['asc', 'desc']).optional().default('asc').describe('Sort direction'),
});

export const DocumentTypesListArgsSchema = z.object({
  limit: z.number().min(1).max(500).optional().default(10).describe('Maximum number of items to return (1-500)'),
  cursor: z.number().min(0).optional().default(0).describe('Cursor for pagination'),
  direction: z.enum(['asc', 'desc']).optional().default('asc').describe('Sort direction'),
});

export const DocumentTypeByIdArgsSchema = z.object({
  id: z.number().positive().describe('Document type ID'),
});

export const TranscriptChaptersArgsSchema = z.object({
  id: z.number().positive().describe('Transcript ID'),
  limit: z.number().min(1).max(500).optional().default(10).describe('Maximum number of items to return (1-500)'),
  cursor: z.number().min(0).optional().default(0).describe('Cursor for pagination'),
  direction: z.enum(['asc', 'desc']).optional().default('asc').describe('Sort direction'),
});

export const AudioListArgsSchema = z.object({
  countries: z.string().optional().describe('Comma-separated list of country codes (ISO 3166-1 alpha-2)'),
  exchanges: z.string().optional().describe('Exchange symbols without blankspace'),
  tickers: z.string().optional().describe('Comma-separated list of company tickers'),
  limit: z.number().min(1).max(500).optional().default(10).describe('Maximum number of items to return (1-500)'),
  cursor: z.number().min(0).optional().default(0).describe('Cursor for pagination'),
  direction: z.enum(['asc', 'desc']).optional().default('asc').describe('Sort direction'),
  endDate: z.string().optional().describe('End date (ISO 8601)'),
  startDate: z.string().optional().describe('Start date (ISO 8601)'),
  isins: z.string().optional().describe('Comma-separated list of ISINs'),
  companyIds: z.string().optional().describe('Comma-separated list of company IDs'),
  eventIds: z.string().optional().describe('Comma-separated list of event IDs'),
  updatedBefore: z.string().optional().describe('Query data updated before this date (ISO 8601)'),
  updatedAfter: z.string().optional().describe('Query data updated after this date (ISO 8601)'),
});

export const AudioByIdArgsSchema = z.object({
  id: z.number().positive().describe('Audio ID'),
});

export const LiveEventsListArgsSchema = z.object({
  countries: z.string().optional().describe('Comma-separated list of country codes (ISO 3166-1 alpha-2)'),
  exchanges: z.string().optional().describe('Exchange symbols without blankspace'),
  tickers: z.string().optional().describe('Comma-separated list of company tickers'),
  limit: z.number().min(1).max(500).optional().default(10).describe('Maximum number of items to return (1-500)'),
  cursor: z.number().min(0).optional().default(0).describe('Cursor for pagination'),
  direction: z.enum(['asc', 'desc']).optional().default('asc').describe('Sort direction'),
  isins: z.string().optional().describe('Comma-separated list of ISINs'),
  companyIds: z.string().optional().describe('Comma-separated list of company IDs'),
  eventIds: z.string().optional().describe('Comma-separated list of event IDs'),
  states: z.string().optional().describe('Event states: notLive, willBeLive, live, liveFailedInterrupted, liveFailedNoAccess, liveFailedNotStarted, processingRecording, processingRecordingFailed, recordingAvailable'),
  endDate: z.string().optional().describe('End date (ISO 8601)'),
  startDate: z.string().optional().describe('Start date (ISO 8601)'),
  updatedBefore: z.string().optional().describe('Query data updated before this date (ISO 8601)'),
  updatedAfter: z.string().optional().describe('Query data updated after this date (ISO 8601)'),
});

export const LiveEventByIdArgsSchema = z.object({
  id: z.number().positive().describe('Live event ID'),
});

export const DocumentFileSizeArgsSchema = z.object({
  url: z.string().url().describe('The URL of the document file to get size for'),
});

export const DocumentFileSizeByIdArgsSchema = z.object({
  id: z.number().positive().describe('Document ID to get file size for'),
});

export const SlidesListArgsSchema = z.object({
  countries: z.string().optional().describe('Comma-separated list of country codes (ISO 3166-1 alpha-2)'),
  exchanges: z.string().optional().describe('Exchange symbols without blankspace'),
  tickers: z.string().optional().describe('Comma-separated list of company tickers'),
  limit: z.number().min(1).max(500).optional().default(10).describe('Maximum number of items to return (1-500)'),
  cursor: z.number().min(0).optional().default(0).describe('Cursor for pagination'),
  direction: z.enum(['asc', 'desc']).optional().default('asc').describe('Sort direction'),
  endDate: z.string().optional().describe('End date (ISO 8601)'),
  startDate: z.string().optional().describe('Start date (ISO 8601)'),
  isins: z.string().optional().describe('Comma-separated list of ISINs'),
  typeIds: z.string().optional().describe('Comma-separated list of document type IDs'),
  companyIds: z.string().optional().describe('Comma-separated list of company IDs'),
  eventIds: z.string().optional().describe('Comma-separated list of event IDs'),
  documentGroupIds: z.string().optional().describe('Document group IDs: 1=Earnings Release, 2=Press Release, 3=Interim Report, 4=Annual Report'),
  updatedBefore: z.string().optional().describe('Query data updated before this date (ISO 8601)'),
  updatedAfter: z.string().optional().describe('Query data updated after this date (ISO 8601)'),
});

export const SlideByIdArgsSchema = z.object({
  id: z.number().positive().describe('Slide ID'),
});

export const SlideSummaryArgsSchema = z.object({
  id: z.number().positive().describe('Slide ID'),
  length: z.enum(['line', 'short', 'long']).optional().default('short').describe('Summary length preset'),
  plain: z.boolean().optional().default(false).describe('Plain text summary without document sources embedded'),
});

export const SlidePagesArgsSchema = z.object({
  id: z.number().positive().describe('Slide ID'),
  limit: z.number().min(1).max(500).optional().default(10).describe('Maximum number of items to return (1-500)'),
  cursor: z.number().min(0).optional().default(0).describe('Cursor for pagination'),
  direction: z.enum(['asc', 'desc']).optional().default('asc').describe('Sort direction'),
});

// Tool definitions
export const quartrTools: Tool[] = [
  {
    name: 'quartr_list_companies',
    description: 'List companies from the Quartr database with optional filtering by country, exchange, tickers, ISINs, etc.',
    inputSchema: {
      type: 'object',
      properties: {
        countries: { type: 'string', description: 'Comma-separated list of country codes (ISO 3166-1 alpha-2), e.g., "US,CA"' },
        exchanges: { type: 'string', description: 'Exchange symbols without blankspace, e.g., "NasdaqCM,NasdaqGS,NYSE"' },
        tickers: { type: 'string', description: 'Comma-separated list of company tickers, e.g., "AAPL,AMZN"' },
        limit: { type: 'number', minimum: 1, maximum: 50, default: 10, description: 'Maximum number of items to return (1-50)' },
        cursor: { type: 'number', minimum: 0, default: 0, description: 'Cursor for pagination' },
        direction: { type: 'string', enum: ['asc', 'desc'], default: 'asc', description: 'Sort direction' },
        isins: { type: 'string', description: 'Comma-separated list of ISINs, e.g., "US0378331005,US0231351067"' },
        updatedBefore: { type: 'string', description: 'Query data updated before this date (ISO 8601)' },
        updatedAfter: { type: 'string', description: 'Query data updated after this date (ISO 8601)' },
        ids: { type: 'string', description: 'Comma-separated list of company IDs, e.g., "4024,5025,6026"' },
      },
    },
  },
  {
    name: 'quartr_get_company',
    description: 'Retrieve detailed information about a specific company by ID.',
    inputSchema: {
      type: 'object',
      properties: {
        id: { type: 'number', description: 'Company ID' },
      },
      required: ['id'],
    },
  },
  {
    name: 'quartr_list_events',
    description: 'List corporate events with optional filtering by company, date range, event type, etc.',
    inputSchema: {
      type: 'object',
      properties: {
        countries: { type: 'string', description: 'Comma-separated list of country codes (ISO 3166-1 alpha-2)' },
        exchanges: { type: 'string', description: 'Exchange symbols without blankspace' },
        tickers: { type: 'string', description: 'Comma-separated list of company tickers' },
        limit: { type: 'number', minimum: 1, maximum: 500, default: 10, description: 'Maximum number of items to return (1-500)' },
        cursor: { type: 'number', minimum: 0, default: 0, description: 'Cursor for pagination' },
        direction: { type: 'string', enum: ['asc', 'desc'], default: 'asc', description: 'Sort direction' },
        endDate: { type: 'string', description: 'End date (ISO 8601)' },
        startDate: { type: 'string', description: 'Start date (ISO 8601)' },
        isins: { type: 'string', description: 'Comma-separated list of ISINs' },
        typeIds: { type: 'string', description: 'Comma-separated list of event type IDs' },
        companyIds: { type: 'string', description: 'Comma-separated list of company IDs' },
        sortBy: { type: 'string', enum: ['id', 'date'], default: 'id', description: 'Field to sort by' },
        updatedBefore: { type: 'string', description: 'Query data updated before this date (ISO 8601)' },
        updatedAfter: { type: 'string', description: 'Query data updated after this date (ISO 8601)' },
      },
    },
  },
  {
    name: 'quartr_get_event',
    description: 'Retrieve detailed information about a specific event by ID.',
    inputSchema: {
      type: 'object',
      properties: {
        id: { type: 'number', description: 'Event ID' },
      },
      required: ['id'],
    },
  },
  {
    name: 'quartr_get_event_summary',
    description: 'Retrieve an AI-generated summary of an event.',
    inputSchema: {
      type: 'object',
      properties: {
        id: { type: 'number', description: 'Event ID' },
        length: { type: 'string', enum: ['line', 'short', 'long'], default: 'short', description: 'Summary length preset' },
        plain: { type: 'boolean', default: false, description: 'Plain text summary without document sources embedded' },
      },
      required: ['id'],
    },
  },
  {
    name: 'quartr_list_event_types',
    description: 'List all available event types.',
    inputSchema: {
      type: 'object',
      properties: {
        limit: { type: 'number', minimum: 1, maximum: 50, default: 10, description: 'Maximum number of items to return (1-50)' },
        cursor: { type: 'number', minimum: 0, default: 0, description: 'Cursor for pagination' },
        direction: { type: 'string', enum: ['asc', 'desc'], default: 'asc', description: 'Sort direction' },
      },
    },
  },
  {
    name: 'quartr_get_event_type',
    description: 'Retrieve detailed information about a specific event type by ID.',
    inputSchema: {
      type: 'object',
      properties: {
        id: { type: 'number', description: 'Event type ID' },
      },
      required: ['id'],
    },
  },
  {
    name: 'quartr_list_documents',
    description: 'List documents with optional filtering by company, event, document type, etc.',
    inputSchema: {
      type: 'object',
      properties: {
        countries: { type: 'string', description: 'Comma-separated list of country codes (ISO 3166-1 alpha-2)' },
        exchanges: { type: 'string', description: 'Exchange symbols without blankspace' },
        tickers: { type: 'string', description: 'Comma-separated list of company tickers' },
        limit: { type: 'number', minimum: 1, maximum: 500, default: 10, description: 'Maximum number of items to return (1-500)' },
        cursor: { type: 'number', minimum: 0, default: 0, description: 'Cursor for pagination' },
        direction: { type: 'string', enum: ['asc', 'desc'], default: 'asc', description: 'Sort direction' },
        endDate: { type: 'string', description: 'End date (ISO 8601)' },
        startDate: { type: 'string', description: 'Start date (ISO 8601)' },
        typeIds: { type: 'string', description: 'Comma-separated list of document type IDs' },
        isins: { type: 'string', description: 'Comma-separated list of ISINs' },
        companyIds: { type: 'string', description: 'Comma-separated list of company IDs' },
        eventIds: { type: 'string', description: 'Comma-separated list of event IDs' },
        documentGroupIds: { type: 'string', description: 'Document group IDs: 1=Earnings Release, 2=Press Release, 3=Interim Report, 4=Annual Report' },
        updatedBefore: { type: 'string', description: 'Query data updated before this date (ISO 8601)' },
        updatedAfter: { type: 'string', description: 'Query data updated after this date (ISO 8601)' },
      },
    },
  },
  {
    name: 'quartr_get_document',
    description: 'Retrieve detailed information about a specific document by ID.',
    inputSchema: {
      type: 'object',
      properties: {
        id: { type: 'number', description: 'Document ID' },
      },
      required: ['id'],
    },
  },
  {
    name: 'quartr_list_reports',
    description: 'List financial reports with optional filtering.',
    inputSchema: {
      type: 'object',
      properties: {
        countries: { type: 'string', description: 'Comma-separated list of country codes (ISO 3166-1 alpha-2)' },
        exchanges: { type: 'string', description: 'Exchange symbols without blankspace' },
        tickers: { type: 'string', description: 'Comma-separated list of company tickers' },
        limit: { type: 'number', minimum: 1, maximum: 500, default: 10, description: 'Maximum number of items to return (1-500)' },
        cursor: { type: 'number', minimum: 0, default: 0, description: 'Cursor for pagination' },
        direction: { type: 'string', enum: ['asc', 'desc'], default: 'asc', description: 'Sort direction' },
        endDate: { type: 'string', description: 'End date (ISO 8601)' },
        startDate: { type: 'string', description: 'Start date (ISO 8601)' },
        typeIds: { type: 'string', description: 'Comma-separated list of document type IDs' },
        isins: { type: 'string', description: 'Comma-separated list of ISINs' },
        companyIds: { type: 'string', description: 'Comma-separated list of company IDs' },
        eventIds: { type: 'string', description: 'Comma-separated list of event IDs' },
        documentGroupIds: { type: 'string', description: 'Document group IDs: 1=Earnings Release, 2=Press Release, 3=Interim Report, 4=Annual Report' },
        updatedBefore: { type: 'string', description: 'Query data updated before this date (ISO 8601)' },
        updatedAfter: { type: 'string', description: 'Query data updated after this date (ISO 8601)' },
      },
    },
  },
  {
    name: 'quartr_get_report',
    description: 'Retrieve detailed information about a specific report by ID.',
    inputSchema: {
      type: 'object',
      properties: {
        id: { type: 'number', description: 'Report ID' },
      },
      required: ['id'],
    },
  },
  {
    name: 'quartr_get_report_summary',
    description: 'Retrieve an AI-generated summary of a report.',
    inputSchema: {
      type: 'object',
      properties: {
        id: { type: 'number', description: 'Report ID' },
        length: { type: 'string', enum: ['line', 'short', 'long'], default: 'short', description: 'Summary length preset' },
        plain: { type: 'boolean', default: false, description: 'Plain text summary without document sources embedded' },
      },
      required: ['id'],
    },
  },
  {
    name: 'quartr_list_transcripts',
    description: 'List earnings call transcripts with optional filtering.',
    inputSchema: {
      type: 'object',
      properties: {
        countries: { type: 'string', description: 'Comma-separated list of country codes (ISO 3166-1 alpha-2)' },
        exchanges: { type: 'string', description: 'Exchange symbols without blankspace' },
        tickers: { type: 'string', description: 'Comma-separated list of company tickers' },
        limit: { type: 'number', minimum: 1, maximum: 500, default: 10, description: 'Maximum number of items to return (1-500)' },
        cursor: { type: 'number', minimum: 0, default: 0, description: 'Cursor for pagination' },
        direction: { type: 'string', enum: ['asc', 'desc'], default: 'asc', description: 'Sort direction' },
        endDate: { type: 'string', description: 'End date (ISO 8601)' },
        startDate: { type: 'string', description: 'Start date (ISO 8601)' },
        typeIds: { type: 'string', description: 'Comma-separated list of document type IDs' },
        isins: { type: 'string', description: 'Comma-separated list of ISINs' },
        companyIds: { type: 'string', description: 'Comma-separated list of company IDs' },
        eventIds: { type: 'string', description: 'Comma-separated list of event IDs' },
        documentGroupIds: { type: 'string', description: 'Document group IDs: 1=Earnings Release, 2=Press Release, 3=Interim Report, 4=Annual Report' },
        updatedBefore: { type: 'string', description: 'Query data updated before this date (ISO 8601)' },
        updatedAfter: { type: 'string', description: 'Query data updated after this date (ISO 8601)' },
      },
    },
  },
  {
    name: 'quartr_get_transcript',
    description: 'Retrieve detailed information about a specific transcript by ID.',
    inputSchema: {
      type: 'object',
      properties: {
        id: { type: 'number', description: 'Transcript ID' },
      },
      required: ['id'],
    },
  },
  {
    name: 'quartr_get_transcript_summary',
    description: 'Retrieve an AI-generated summary of a transcript.',
    inputSchema: {
      type: 'object',
      properties: {
        id: { type: 'number', description: 'Transcript ID' },
        length: { type: 'string', enum: ['line', 'short', 'long'], default: 'short', description: 'Summary length preset' },
        plain: { type: 'boolean', default: false, description: 'Plain text summary without document sources embedded' },
      },
      required: ['id'],
    },
  },
  {
    name: 'quartr_get_transcript_chapters',
    description: 'Retrieve chapters/sections of a transcript.',
    inputSchema: {
      type: 'object',
      properties: {
        id: { type: 'number', description: 'Transcript ID' },
        limit: { type: 'number', minimum: 1, maximum: 500, default: 10, description: 'Maximum number of items to return (1-500)' },
        cursor: { type: 'number', minimum: 0, default: 0, description: 'Cursor for pagination' },
        direction: { type: 'string', enum: ['asc', 'desc'], default: 'asc', description: 'Sort direction' },
      },
      required: ['id'],
    },
  },
  {
    name: 'quartr_list_slides',
    description: 'List slide decks with optional filtering.',
    inputSchema: {
      type: 'object',
      properties: {
        countries: { type: 'string', description: 'Comma-separated list of country codes (ISO 3166-1 alpha-2)' },
        exchanges: { type: 'string', description: 'Exchange symbols without blankspace' },
        tickers: { type: 'string', description: 'Comma-separated list of company tickers' },
        limit: { type: 'number', minimum: 1, maximum: 500, default: 10, description: 'Maximum number of items to return (1-500)' },
        cursor: { type: 'number', minimum: 0, default: 0, description: 'Cursor for pagination' },
        direction: { type: 'string', enum: ['asc', 'desc'], default: 'asc', description: 'Sort direction' },
        endDate: { type: 'string', description: 'End date (ISO 8601)' },
        startDate: { type: 'string', description: 'Start date (ISO 8601)' },
        isins: { type: 'string', description: 'Comma-separated list of ISINs' },
        typeIds: { type: 'string', description: 'Comma-separated list of document type IDs' },
        companyIds: { type: 'string', description: 'Comma-separated list of company IDs' },
        eventIds: { type: 'string', description: 'Comma-separated list of event IDs' },
        documentGroupIds: { type: 'string', description: 'Document group IDs: 1=Earnings Release, 2=Press Release, 3=Interim Report, 4=Annual Report' },
        updatedBefore: { type: 'string', description: 'Query data updated before this date (ISO 8601)' },
        updatedAfter: { type: 'string', description: 'Query data updated after this date (ISO 8601)' },
      },
    },
  },
  {
    name: 'quartr_get_slide',
    description: 'Retrieve detailed information about a specific slide deck by ID.',
    inputSchema: {
      type: 'object',
      properties: {
        id: { type: 'number', description: 'Slide ID' },
      },
      required: ['id'],
    },
  },
  {
    name: 'quartr_get_slide_summary',
    description: 'Retrieve an AI-generated summary of a slide deck.',
    inputSchema: {
      type: 'object',
      properties: {
        id: { type: 'number', description: 'Slide ID' },
        length: { type: 'string', enum: ['line', 'short', 'long'], default: 'short', description: 'Summary length preset' },
        plain: { type: 'boolean', default: false, description: 'Plain text summary without document sources embedded' },
      },
      required: ['id'],
    },
  },
  {
    name: 'quartr_get_slide_pages',
    description: 'Retrieve pages/sections of a slide deck.',
    inputSchema: {
      type: 'object',
      properties: {
        id: { type: 'number', description: 'Slide ID' },
        limit: { type: 'number', minimum: 1, maximum: 500, default: 10, description: 'Maximum number of items to return (1-500)' },
        cursor: { type: 'number', minimum: 0, default: 0, description: 'Cursor for pagination' },
        direction: { type: 'string', enum: ['asc', 'desc'], default: 'asc', description: 'Sort direction' },
      },
      required: ['id'],
    },
  },
  {
    name: 'quartr_list_document_types',
    description: 'List all available document types.',
    inputSchema: {
      type: 'object',
      properties: {
        limit: { type: 'number', minimum: 1, maximum: 500, default: 10, description: 'Maximum number of items to return (1-500)' },
        cursor: { type: 'number', minimum: 0, default: 0, description: 'Cursor for pagination' },
        direction: { type: 'string', enum: ['asc', 'desc'], default: 'asc', description: 'Sort direction' },
      },
    },
  },
  {
    name: 'quartr_get_document_type',
    description: 'Retrieve detailed information about a specific document type by ID.',
    inputSchema: {
      type: 'object',
      properties: {
        id: { type: 'number', description: 'Document type ID' },
      },
      required: ['id'],
    },
  },
  {
    name: 'quartr_list_live_events',
    description: 'List live events with optional filtering by state, company, etc.',
    inputSchema: {
      type: 'object',
      properties: {
        countries: { type: 'string', description: 'Comma-separated list of country codes (ISO 3166-1 alpha-2)' },
        exchanges: { type: 'string', description: 'Exchange symbols without blankspace' },
        tickers: { type: 'string', description: 'Comma-separated list of company tickers' },
        limit: { type: 'number', minimum: 1, maximum: 500, default: 10, description: 'Maximum number of items to return (1-500)' },
        cursor: { type: 'number', minimum: 0, default: 0, description: 'Cursor for pagination' },
        direction: { type: 'string', enum: ['asc', 'desc'], default: 'asc', description: 'Sort direction' },
        isins: { type: 'string', description: 'Comma-separated list of ISINs' },
        companyIds: { type: 'string', description: 'Comma-separated list of company IDs' },
        eventIds: { type: 'string', description: 'Comma-separated list of event IDs' },
        states: { type: 'string', description: 'Event states: notLive, willBeLive, live, liveFailedInterrupted, liveFailedNoAccess, liveFailedNotStarted, processingRecording, processingRecordingFailed, recordingAvailable' },
        endDate: { type: 'string', description: 'End date (ISO 8601)' },
        startDate: { type: 'string', description: 'Start date (ISO 8601)' },
        updatedBefore: { type: 'string', description: 'Query data updated before this date (ISO 8601)' },
        updatedAfter: { type: 'string', description: 'Query data updated after this date (ISO 8601)' },
      },
    },
  },
  {
    name: 'quartr_get_live_event',
    description: 'Retrieve detailed information about a specific live event by ID.',
    inputSchema: {
      type: 'object',
      properties: {
        id: { type: 'number', description: 'Live event ID' },
      },
      required: ['id'],
    },
  },
  {
    name: 'quartr_get_document_file_size',
    description: 'Get the file size of a document from its URL without downloading the full file.',
    inputSchema: {
      type: 'object',
      properties: {
        url: { type: 'string', format: 'uri', description: 'The URL of the document file to get size for' },
      },
      required: ['url'],
    },
  },
  {
    name: 'quartr_get_document_file_size_by_id',
    description: 'Get the file size of a document by its ID. This will first retrieve the document details to get the file URL, then calculate the file size.',
    inputSchema: {
      type: 'object',
      properties: {
        id: { type: 'number', description: 'Document ID to get file size for' },
      },
      required: ['id'],
    },
  },
];
