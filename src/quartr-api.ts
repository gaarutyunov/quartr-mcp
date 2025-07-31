import {
  CompanyDto,
  EventDto,
  EventTypeDto,
  DocumentDto,
  DocumentTypeDto,
  SummaryDto,
  ChapterDto,
  AudioDto,
  LiveDto,
  LiveAudioDto,
  LiveTranscriptDto,
  DocumentDataDto,
  PaginatedResponse,
  SingleResponse,
  CompanyQueryParams,
  EventQueryParams,
  DocumentQueryParams,
  LiveQueryParams,
  SummaryQueryParams,
  PaginationQueryParams,
} from './types.js';

export class QuartrAPIClient {
  private baseUrl = 'https://api.quartr.com';
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  private async makeRequest<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
    const url = new URL(`${this.baseUrl}${endpoint}`);
    
    if (params) {
      Object.entries(params).forEach(([key, value]: [string, any]) => {
        if (value !== undefined && value !== null) {
          url.searchParams.append(key, value.toString());
        }
      });
    }

    const response = await fetch(url.toString(), {
      headers: {
        'x-api-key': this.apiKey,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({})) as any;
      throw new Error(`Quartr API error (${response.status}): ${errorData.message || response.statusText}`);
    }

    return response.json() as Promise<T>;
  }

  // Companies
  async getCompanies(params?: CompanyQueryParams): Promise<PaginatedResponse<CompanyDto>> {
    return this.makeRequest('/public/v3/companies', params);
  }

  async getCompanyById(id: number): Promise<SingleResponse<CompanyDto>> {
    return this.makeRequest(`/public/v3/companies/${id}`);
  }

  // Events
  async getEvents(params?: EventQueryParams): Promise<PaginatedResponse<EventDto>> {
    return this.makeRequest('/public/v3/events', params);
  }

  async getEventById(id: number): Promise<SingleResponse<EventDto>> {
    return this.makeRequest(`/public/v3/events/${id}`);
  }

  async getEventSummary(id: number, params?: SummaryQueryParams): Promise<SingleResponse<SummaryDto>> {
    return this.makeRequest(`/public/v3/events/${id}/summary`, params);
  }

  // Event Types
  async getEventTypes(params?: PaginationQueryParams): Promise<PaginatedResponse<EventTypeDto>> {
    return this.makeRequest('/public/v3/event-types', params);
  }

  async getEventTypeById(id: number): Promise<SingleResponse<EventTypeDto>> {
    return this.makeRequest(`/public/v3/event-types/${id}`);
  }

  // Documents
  async getDocuments(params?: DocumentQueryParams): Promise<PaginatedResponse<DocumentDto>> {
    return this.makeRequest('/public/v3/documents', params);
  }

  async getDocumentById(id: number): Promise<SingleResponse<DocumentDto>> {
    return this.makeRequest(`/public/v3/documents/${id}`);
  }

  // Reports
  async getReports(params?: DocumentQueryParams): Promise<PaginatedResponse<DocumentDto>> {
    return this.makeRequest('/public/v3/documents/reports', params);
  }

  async getReportById(id: number): Promise<SingleResponse<DocumentDto>> {
    return this.makeRequest(`/public/v3/documents/reports/${id}`);
  }

  async getReportPages(id: number, params?: PaginationQueryParams): Promise<PaginatedResponse<DocumentDataDto>> {
    return this.makeRequest(`/public/v3/documents/reports/${id}/pages`, params);
  }

  async getReportSummary(id: number, params?: SummaryQueryParams): Promise<SingleResponse<SummaryDto>> {
    return this.makeRequest(`/public/v3/documents/reports/${id}/summary`, params);
  }

  // Slides
  async getSlides(params?: DocumentQueryParams): Promise<PaginatedResponse<DocumentDto>> {
    return this.makeRequest('/public/v3/documents/slides', params);
  }

  async getSlideById(id: number): Promise<SingleResponse<DocumentDto>> {
    return this.makeRequest(`/public/v3/documents/slides/${id}`);
  }

  async getSlidePages(id: number, params?: PaginationQueryParams): Promise<PaginatedResponse<DocumentDataDto>> {
    return this.makeRequest(`/public/v3/documents/slides/${id}/pages`, params);
  }

  async getSlideSummary(id: number, params?: SummaryQueryParams): Promise<SingleResponse<SummaryDto>> {
    return this.makeRequest(`/public/v3/documents/slides/${id}/summary`, params);
  }

  // Transcripts
  async getTranscripts(params?: DocumentQueryParams): Promise<PaginatedResponse<DocumentDto>> {
    return this.makeRequest('/public/v3/documents/transcripts', params);
  }

  async getTranscriptById(id: number): Promise<SingleResponse<DocumentDto>> {
    return this.makeRequest(`/public/v3/documents/transcripts/${id}`);
  }

  async getTranscriptChapters(id: number, params?: PaginationQueryParams): Promise<PaginatedResponse<ChapterDto>> {
    return this.makeRequest(`/public/v3/documents/transcripts/${id}/chapters`, params);
  }

  async getTranscriptSummary(id: number, params?: SummaryQueryParams): Promise<SingleResponse<SummaryDto>> {
    return this.makeRequest(`/public/v3/documents/transcripts/${id}/summary`, params);
  }

  // Document Types
  async getDocumentTypes(params?: PaginationQueryParams): Promise<PaginatedResponse<DocumentTypeDto>> {
    return this.makeRequest('/public/v3/document-types', params);
  }

  async getDocumentTypeById(id: number): Promise<SingleResponse<DocumentTypeDto>> {
    return this.makeRequest(`/public/v3/document-types/${id}`);
  }

  // Audio
  async getAudio(params?: LiveQueryParams): Promise<PaginatedResponse<AudioDto>> {
    return this.makeRequest('/public/v3/audio', params);
  }

  async getAudioById(id: number): Promise<SingleResponse<AudioDto>> {
    return this.makeRequest(`/public/v3/audio/${id}`);
  }

  async getAudioChapters(id: number, params?: PaginationQueryParams): Promise<PaginatedResponse<ChapterDto>> {
    return this.makeRequest(`/public/v3/audio/${id}/chapters`, params);
  }

  // Live Events
  async getLiveEvents(params?: LiveQueryParams): Promise<PaginatedResponse<LiveDto>> {
    return this.makeRequest('/public/v3/live', params);
  }

  async getLiveEventById(id: number): Promise<SingleResponse<LiveDto>> {
    return this.makeRequest(`/public/v3/live/${id}`);
  }

  // Live Audio
  async getLiveAudio(params?: LiveQueryParams): Promise<PaginatedResponse<LiveAudioDto>> {
    return this.makeRequest('/public/v3/live/audio', params);
  }

  async getLiveAudioById(id: number): Promise<SingleResponse<LiveAudioDto>> {
    return this.makeRequest(`/public/v3/live/audio/${id}`);
  }

  // Live Transcripts
  async getLiveTranscripts(params?: LiveQueryParams): Promise<PaginatedResponse<LiveTranscriptDto>> {
    return this.makeRequest('/public/v3/live/transcripts', params);
  }

  async getLiveTranscriptById(id: number): Promise<SingleResponse<LiveTranscriptDto>> {
    return this.makeRequest(`/public/v3/live/transcripts/${id}`);
  }

  // File Size Utilities
  async getDocumentFileSize(url: string): Promise<{ url: string; sizeBytes: number; sizeFormatted: string }> {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      if (!response.ok) {
        throw new Error(`Failed to fetch file info: ${response.statusText}`);
      }
      
      const contentLength = response.headers.get('content-length');
      if (!contentLength) {
        throw new Error('Content-Length header not available');
      }
      
      const sizeBytes = parseInt(contentLength, 10);
      const sizeFormatted = this.formatBytes(sizeBytes);
      
      return {
        url,
        sizeBytes,
        sizeFormatted,
      };
    } catch (error) {
      throw new Error(`Error getting file size: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async getDocumentFileSizeById(id: number): Promise<{ documentId: number; url: string; sizeBytes: number; sizeFormatted: string }> {
    const documentResponse = await this.getDocumentById(id);
    const document = documentResponse.data;
    
    if (!document.fileUrl) {
      throw new Error(`Document ${id} does not have a file URL`);
    }
    
    const sizeInfo = await this.getDocumentFileSize(document.fileUrl);
    
    return {
      documentId: id,
      ...sizeInfo,
    };
  }

  private formatBytes(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}
