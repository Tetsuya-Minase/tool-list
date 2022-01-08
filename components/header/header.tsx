import React from 'react';
import {styled} from 'linaria/react';
import {color} from "../../styles/color";
import {fontSize} from "../../styles/font-size";

const StyledHeader = styled.header`
  background-color: ${color.bgBlue};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Heading = styled.h1`
  font-size: ${fontSize(36)};
  font-weight: bold;
  color: ${color.textWhite};
  line-height: 1.5;
`;

export const Header: React.VFC = () => {
  return <StyledHeader>
    <Heading>{"Minase's tool"}</Heading>
  </StyledHeader>
};
