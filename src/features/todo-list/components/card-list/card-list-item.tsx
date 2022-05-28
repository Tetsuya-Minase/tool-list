import React from 'react';
import { styled } from 'linaria/react';
import { fontSize } from '../../../../styles/font-size';
import { color } from '../../../../styles/color';

const Item = styled.li`
  font-size: ${fontSize(16)};
`;
const ItemButton = styled.button`
  border-radius: 4px;
  background-color: ${color.bgWhite};
  padding: 8px 16px;
  width: 100%;
  text-align: start;
`;
const CardTitle = styled.h1`
  font-size: ${fontSize(16)};
  font-weight: normal;
`;

interface Props {
  title: string;
}

export const CardListItem: React.FC<Props> = ({ title }) => {
  return (
    <Item>
      <section>
        <ItemButton>
          <CardTitle>{title}</CardTitle>
        </ItemButton>
      </section>
    </Item>
  );
};
