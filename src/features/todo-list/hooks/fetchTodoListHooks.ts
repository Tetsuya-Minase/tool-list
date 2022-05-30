import { useEffect, useState } from 'react';
import { getClient } from '../../../functions/fetch-client';
import { ListResponse } from '../../../types/ApiResponse';
import { Todo } from '../model/Todo';

export function useFetchTodoList() {
  const [result, setResult] = useState<Todo[]>([]);
  const [offset] = useState(0);
  useEffect(() => {
    const query = offset ? { offset } : undefined;
    getClient<ListResponse<Todo>>({ url: '/api/todos', query }).then((result) => {
      if (result.isSuccess) {
        setResult(result.response.data);
      }
    });
  }, [offset]);
  return { result };
}
