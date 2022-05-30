import { Todo } from './Todo';

export interface ClassifiedTodos {
  readonly todo: ReadonlyArray<Todo & { status: 'todo' }>;
  readonly doing: ReadonlyArray<Todo & { status: 'doing' }>;
  readonly done: ReadonlyArray<Todo & { status: 'done' }>;
}
