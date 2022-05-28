import React from 'react';
import { styled } from 'linaria/react';
import { CardList } from '../../components/card-list/card-list';
import { PageTitle } from '../../components/page-title/page-title';

const CardListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TodoList: React.VFC = () => {
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
