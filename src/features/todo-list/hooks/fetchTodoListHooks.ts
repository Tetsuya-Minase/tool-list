import { useEffect, useState } from 'react';
import { getClient } from '../../../functions/fetch-client';

export const useFetchTodoList = () => {
  const [result, setResult] = useState();
  useEffect(() => {
    getClient({ url: '/api/todos' }).then((result) => {
      if (result.isSuccess) {
        console.log(result.response);
        setResult(result.response as any);
      }
    });
  }, []);
  return { result };
};
