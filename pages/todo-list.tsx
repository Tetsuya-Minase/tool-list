import React from 'react';
import { styled } from 'linaria/react';
import {CardList} from '../components/card-list/card-list';

const CardListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TodoList: React.VFC = () => {
  return <>
    <h1>TodoList</h1>
    <CardListWrapper>
      <CardList title="Todo" list={[]} />
      <CardList title="Doing" list={[]} />
      <CardList title="Done" list={[]} />
    </CardListWrapper>
  </>
}

export default TodoList;