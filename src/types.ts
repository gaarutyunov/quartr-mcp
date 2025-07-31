export interface TickerDto {
  ticker: string;
  exchange: string;
}

export interface CompanyDto {
  country: string;
  displayName?: string;
  id: number;
  name: string;
  tickers?: TickerDto[];
  isins?: string[];
  updatedAt: string;
  createdAt: string;
  backlinkUrl: string;
}

export interface EventDto {
  companyId: number;
  date: string;
  id: number;
  title: string;
  typeId: number;
  fiscalYear?: number;
  fiscalPeriod?: string;
  backlinkUrl: string;
  updatedAt: string;
  createdAt: string;
}

export interface EventTypeDto {
  id: number;
  name?: string;
  parent?: string;
  updatedAt: string;
  createdAt: string;
}

export interface DocumentDto {
  companyId?: number;
  eventId?: number;
  fileUrl: string;
  id: number;
  typeId: number;
  updatedAt: string;
  createdAt: string;
}

export interface DocumentTypeDto {
  id: number;
  name: string;
  description?: string;
  form?: string;
  updatedAt: string;
  createdAt: string;
  category: string;
  documentGroupId?: number;
}

export interface SummarySource {
  sourceId: string;
  documentId: number;
  page?: number;
  timestamp?: number;
  typeId: number;
}

export interface SummaryDto {
  id: number;
  summary: string;
  sources: SummarySource[];
  createdAt: string;
  updatedAt: string;
}

export interface ChapterDto {
  id: number;
  title: string;
  startTimestamp: number;
  endTimestamp: number;
  level: number;
  updatedAt: string;
  createdAt: string;
}

export interface AudioMetadataDto {
  size?: string;
  duration?: number;
  encoding?: string;
  mimetype?: string;
}

export interface AudioDto {
  companyId: number;
  eventId: number;
  fileUrl?: string;
  id: number;
  qa?: number;
  streamUrl?: string;
  audioMetadata?: AudioMetadataDto;
  updatedAt: string;
  createdAt: string;
}

export interface LiveDto {
  id: number;
  eventId: number;
  companyId: number;
  date: string;
  updatedAt: string;
  createdAt: string;
  wentLiveAt?: string;
  state?: string;
  audio?: string;
  transcript?: string;
}

export interface LiveAudioDto {
  id: number;
  eventId: number;
  companyId: number;
  date: string;
  updatedAt: string;
  createdAt: string;
  wentLiveAt?: string;
  state?: string;
  audio?: string;
}

export interface LiveTranscriptDto {
  id: number;
  eventId: number;
  companyId: number;
  date: string;
  updatedAt: string;
  createdAt: string;
  wentLiveAt?: string;
  state?: string;
  transcript?: string;
}

export interface DocumentDataDto {
  id: number;
  page: number;
  pdfUrl: string;
  imageUrl: string;
  updatedAt: string;
  createdAt: string;
}

export interface CursorPagination {
  nextCursor: number | null;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: CursorPagination;
}

export interface SingleResponse<T> {
  data: T;
}

// Query parameter interfaces
export interface BaseQueryParams {
  countries?: string;
  exchanges?: string;
  tickers?: string;
  limit?: number;
  cursor?: number;
  direction?: 'asc' | 'desc';
  isins?: string;
  updatedBefore?: string;
  updatedAfter?: string;
}

export interface CompanyQueryParams extends BaseQueryParams {
  ids?: string;
}

export interface EventQueryParams extends BaseQueryParams {
  endDate?: string;
  startDate?: string;
  typeIds?: string;
  companyIds?: string;
  sortBy?: 'id' | 'date';
}

export interface DocumentQueryParams extends BaseQueryParams {
  endDate?: string;
  startDate?: string;
  typeIds?: string;
  companyIds?: string;
  eventIds?: string;
  documentGroupIds?: string;
}

export interface LiveQueryParams extends BaseQueryParams {
  endDate?: string;
  startDate?: string;
  companyIds?: string;
  eventIds?: string;
  states?: string;
}

export interface SummaryQueryParams {
  length?: 'line' | 'short' | 'long';
  plain?: boolean;
}

export interface PaginationQueryParams {
  limit?: number;
  cursor?: number;
  direction?: 'asc' | 'desc';
}
