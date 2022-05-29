import { assertStatusDoing, assertStatusDone, assertStatusTodo, Todo } from '../model/Todo';
import { useMemo } from 'react';

interface ClassifiedTodoList {
  readonly todo: ReadonlyArray<Todo & { status: 'todo' }>;
  readonly doing: ReadonlyArray<Todo & { status: 'doing' }>;
  readonly done: ReadonlyArray<Todo & { status: 'done' }>;
}

export function useClassifyTodoListHook(todos: Todo[]): ClassifiedTodoList {
  return useMemo(
    () =>
      todos.reduce<ClassifiedTodoList>(
        (pre, cur): ClassifiedTodoList => {
          switch (cur.status) {
            case 'todo':
              assertStatusTodo(cur);
              return {
                ...pre,
                todo: [...pre.todo, cur],
              };
            case 'doing':
              assertStatusDoing(cur);
              return {
                ...pre,
                doing: [...pre.doing, cur],
              };
            case 'done':
              assertStatusDone(cur);
              return {
                ...pre,
                done: [...pre.done, cur],
              };
          }
        },
        { todo: [], doing: [], done: [] }
      ),
    [todos]
  );
}
