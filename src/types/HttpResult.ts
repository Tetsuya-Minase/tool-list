export interface Success<S = unknown> {
  readonly isSuccess: true;
  readonly response: S;
}
export interface Failure<E = unknown> {
  readonly isSuccess: false;
  readonly error: E;
}
export type HttpResult<S, E> = Success<S> | Failure<E>;
