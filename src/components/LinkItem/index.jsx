import React from 'react';
import { LinkContainer } from './styles';

const LinkItem = ({variant, href, name, onClick}) => {
  return (
    <LinkContainer $variant={variant} href={href} onClick={onClick}>
      <p>{name}</p>
    </LinkContainer>
  );
};

export default LinkItem;
