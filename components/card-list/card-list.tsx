import React from 'react';
import {styled} from 'linaria/react';
import {color} from "../../styles/color";
import {fontSize} from "../../styles/font-size";

const CardListWrapper = styled.section`
  background-color: ${color.bgGray};
  padding: 20px 20px 0;
  width: 420px;
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

interface Props {
  title: string;
}
export const CardList: React.VFC<Props> = ({title}) => {
  return <CardListWrapper>
    <TitleWrapper>
      <Title>{title}</Title>
      <Badge>10</Badge>
    </TitleWrapper>
  </CardListWrapper>
};
