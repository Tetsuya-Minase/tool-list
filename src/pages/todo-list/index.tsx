import { styled } from 'linaria/react';
import { CardList } from '../../features/todo-list/components/card-list';
import { PageTitle } from '../../components/page-title/page-title';
import { GetStaticProps, NextPage } from 'next';
import { classifyTodoList } from '../../features/todo-list/functions/classifyTodoList';
import { getClient } from '../../functions/fetch-client';
import { ListResponse } from '../../types/ApiResponse';
import { Todo } from '../../features/todo-list/model/Todo';
import { ClassifiedTodos } from '../../features/todo-list/model/ClassifiedTodos';

const CardListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface Props {
  readonly todoList: ClassifiedTodos;
}

const TodoList: NextPage<Props> = ({ todoList }) => {
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const result = await getClient<ListResponse<Todo>>({ url: '/api/todos' });
  if (!result.isSuccess) {
    return {
      props: {
        todoList: {
          todo: [],
          doing: [],
          done: [],
        },
      },
    };
  }
  const todoList = classifyTodoList(result.response.data);
  return {
    props: {
      todoList,
    },
  };
};

export default TodoList;
