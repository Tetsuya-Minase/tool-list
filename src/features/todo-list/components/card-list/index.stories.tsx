import { CardList } from './index';

export default {
  title: 'components/card-list',
  component: CardList,
};

export const Default = () => <CardList title="Todo" items={[]} />;
