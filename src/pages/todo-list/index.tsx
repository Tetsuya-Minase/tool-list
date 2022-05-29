import { styled } from 'linaria/react';
import { CardList } from '../../features/todo-list/components/card-list';
import { PageTitle } from '../../components/page-title/page-title';
import { NextPage } from 'next';
import { useFetchTodoList } from '../../features/todo-list/hooks/fetchTodoListHooks';
import { useClassifyTodoListHook } from '../../features/todo-list/hooks/classifyTodoListHook';

const CardListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TodoList: NextPage = () => {
  const { result } = useFetchTodoList();
  const todoList = useClassifyTodoListHook(result);
  return (
    <>
      <PageTitle>Todo List</PageTitle>
      <CardListWrapper>
        <CardList title="Todo" items={todoList.todo} />
        <CardList title="Doing" items={todoList.doing} />
        <CardList title="Done" items={todoList.done} />
      </CardListWrapper>
    </>
  );
};

export default TodoList;
