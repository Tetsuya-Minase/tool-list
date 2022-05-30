import { assertKeyValueObject, assertObject, assertString } from '../../../functions/asserts';

export interface Todo {
  readonly id: string;
  readonly title: string;
  readonly detail: string;
  readonly status: 'todo' | 'doing' | 'done';
}
function isTodo(data: unknown): data is Todo {
  assertKeyValueObject<keyof Todo>(data, ['id', 'title', 'detail']);
  assertString(data.id);
  assertString(data.title);
  assertString(data.detail);
  assertString(data.status);
  return true;
}
export function assertTodo(data: unknown): asserts data is Todo {
  if (!isTodo(data)) {
    throw new TypeError(`data is not Todo.`);
  }
}

export function assertStatusTodo(data: Todo): asserts data is Todo & { status: 'todo' } {
  if (data.status !== 'todo') {
    throw new TypeError(`status is not todo.`);
  }
}
export function assertStatusDoing(data: Todo): asserts data is Todo & { status: 'doing' } {
  if (data.status !== 'doing') {
    throw new TypeError(`status is not doing.`);
  }
}
export function assertStatusDone(data: Todo): asserts data is Todo & { status: 'done' } {
  if (data.status !== 'done') {
    throw new TypeError(`status is not done.`);
  }
}
