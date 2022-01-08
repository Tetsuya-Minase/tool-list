import type {NextPage} from 'next'
import {CardList} from "../components/card-list/card-list";

const Home: NextPage = () => {
  return <>
    <h1>トップページ</h1>
    <CardList title={"Todo"}/>
  </>
}

export default Home;
