import { assertStatusDoing, assertStatusDone, assertStatusTodo, Todo } from '../model/Todo';
import { ClassifiedTodos } from '../model/ClassifiedTodos';

export function classifyTodoList(todos: Todo[]): ClassifiedTodos {
  return todos.reduce<ClassifiedTodos>(
    (pre, cur): ClassifiedTodos => {
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
  );
}
