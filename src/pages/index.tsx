import type {NextPage} from 'next'
import {Link} from '../components/link';

const Home: NextPage = () => {
  return <section>
    <h1>ページ一覧</h1>
    <ul>
      <li>
        <Link href="/todo-list" text="ToDoリスト"/>
      </li>
    </ul>
  </section>
}

export default Home;
