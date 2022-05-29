export interface ListResponse<T = unknown> {
  readonly start: number;
  readonly offset: number;
  readonly data: T[];
}
