import React from 'react';
import {styled} from 'linaria/react';
import {fontSize} from '../../styles/font-size';
import {color} from '../../styles/color';

const Item = styled.li`
  font-size: ${fontSize(16)};
`;
const ItemButton = styled.button`
  border-radius: 4px;
  background-color: ${color.bgWhite};
  padding: 16px;
  width: 100%;
  text-align: start;
`;

interface Props {
  title: string;
}

export const CardListItem: React.VFC<Props> = ({title}) => {
  return <Item>
    <ItemButton>
      {title}
    </ItemButton>
  </Item>
}