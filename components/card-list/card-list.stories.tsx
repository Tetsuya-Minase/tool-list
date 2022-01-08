import {CardList} from "./card-list";

export default {
  title: 'components/card-list',
  component: CardList
}

export const Default = () => <CardList title="Todo" list={[]}/>;
