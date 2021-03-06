import React from 'react';
import { styled } from 'linaria/react';
import { color } from '../../../../styles/color';
import { fontSize } from '../../../../styles/font-size';
import { CardListItem } from './card-list-item';
import { Todo } from '../../model/Todo';

const CardListWrapper = styled.section`
  background-color: ${color.bgGray};
  padding: 20px 20px 8px;
  width: 348px;
  border-radius: 8px;
`;
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.h1`
  font-size: ${fontSize(28)};
  font-weight: bold;
  color: ${color.textBlack};
`;
const Badge = styled.span`
  background-color: ${color.bgBlack};
  color: ${color.textWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px / 14px;
  width: 48px;
  height: 28px;
  margin-left: 12px;
`;
const AddButton = styled.button`
  font-weight: bold;
  font-size: ${fontSize(16)};
  color: ${color.textBlack};
  position: relative;
  padding-left: 20px;

  &::before,
  ::after {
    position: absolute;
    left: 2px;
    top: 9px;
    content: '';
    border: 1px solid ${color.textBlack};
    width: 16px;
  }
  &::after {
    transform: rotateZ(90deg);
  }
`;
const ListWrapper = styled.ul`
  margin-top: 8px;
`;
const ButtonWrapper = styled.div`
  margin-top: 8px;
`;

interface Props {
  readonly title: string;
  readonly items: ReadonlyArray<Todo>;
}
export const CardList: React.FC<Props> = ({ title, items }) => {
  return (
    <CardListWrapper>
      <TitleWrapper>
        <Title>{title}</Title>
        <Badge>{items.length}</Badge>
      </TitleWrapper>
      {items.map((item) => (
        <ListWrapper key={item.id}>
          <CardListItem title={item.title} />
        </ListWrapper>
      ))}
      <ButtonWrapper>
        <AddButton>カードを追加</AddButton>
      </ButtonWrapper>
    </CardListWrapper>
  );
};
