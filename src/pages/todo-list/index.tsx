import { styled } from 'linaria/react';
import { CardList } from '../../features/todo-list/components/card-list';
import { PageTitle } from '../../components/page-title/page-title';
import { NextPage } from 'next';
import { useFetchTodoList } from '../../features/todo-list/hooks/fetchTodoListHooks';

const CardListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TodoList: NextPage = () => {
  const { result } = useFetchTodoList();
  return (
    <>
      <PageTitle>Todo List</PageTitle>
      <CardListWrapper>
        <CardList title="Todo" list={[]} />
        <CardList title="Doing" list={[]} />
        <CardList title="Done" list={[]} />
      </CardListWrapper>
    </>
  );
};

export default TodoList;
