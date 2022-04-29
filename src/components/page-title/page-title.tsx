import React, {ReactNode} from 'react';
import { styled } from 'linaria/react';
import {fontSize} from '../../styles/font-size';

const Title = styled.h1`
  font-size: ${fontSize(32)};
  line-height: 1.5;
`;

interface Props {
  children: ReactNode
}

export const PageTitle: React.FC<Props> = ({children}) => {
  return <Title>{children}</Title>;
}