import React from 'react';
import NextLink from 'next/link';

type Props = React.ComponentProps<'a'> & {
  readonly text: string;
  readonly href: string;
};

export const Link: React.FC<Props> = ({ href, text }) => {
  if (!href) {
    return <span>{text}</span>;
  }
  return (
    <NextLink href={href}>
      <a>{text}</a>
    </NextLink>
  );
};
