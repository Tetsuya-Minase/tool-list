import { NextApiRequest, NextApiResponse } from 'next';
import { ListResponse } from '../../../types/ApiResponse';

interface Data {
  readonly id: string;
  readonly title: string;
  readonly detail: string;
  readonly status: 'todo' | 'doing' | 'done';
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ListResponse<Data>>) {
  const todoList: Data[] = [
    {
      id: 'test1',
      title: 'hoge',
      detail: 'hoge detail',
      status: 'todo',
    },
    {
      id: 'test2',
      title: 'huga',
      detail: 'huga detail',
      status: 'doing',
    },
    {
      id: 'test1',
      title: 'piyo',
      detail: 'piyo detail',
      status: 'done',
    },
  ];
  res.status(200).json({ start: 1, offset: todoList.length, data: todoList });
}
