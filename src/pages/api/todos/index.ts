import { NextApiRequest, NextApiResponse } from 'next';

interface Data {
  readonly start: number;
  readonly offset: number;
  readonly todoList: string[];
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const todoList = ['hoge', 'huga', 'piyo'];
  res.status(200).json({ start: 1, offset: todoList.length, todoList });
}
