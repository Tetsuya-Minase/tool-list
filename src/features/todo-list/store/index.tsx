import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import { ClassifiedTodos } from '../model/ClassifiedTodos';

export interface TodoListState {
  readonly classifiedTodos: ClassifiedTodos;
}

const initialState: TodoListState = {
  classifiedTodos: {
    todo: [],
    doing: [],
    done: [],
  },
};

const TodoListContext = React.createContext<TodoListState>(initialState);
const SetTodoListContext = React.createContext<Dispatch<SetStateAction<TodoListState>>>(() => {});
export function useTodoListState() {
  return useContext(TodoListContext);
}
export function useSetTodoListState() {
  return useContext(SetTodoListContext);
}
interface Props {
  readonly children: React.ReactNode;
  readonly initialState?: TodoListState;
}
export const TodoListProvider: React.FC<Props> = (props) => {
  const [state, setState] = useState<TodoListState>(props.initialState ?? initialState);
  return (
    <TodoListContext.Provider value={state}>
      <SetTodoListContext.Provider value={setState}>{props.children}</SetTodoListContext.Provider>
    </TodoListContext.Provider>
  );
};
