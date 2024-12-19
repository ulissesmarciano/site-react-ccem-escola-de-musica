import React from 'react';
import { LinkContainer } from './styles';

const LinkItem = ({ variant, href, name, onClick, target, src, alt }) => {
  return (
    <LinkContainer $variant={variant} href={href} target={true ? target : !target} onClick={onClick}>
      <p>{true ? name : !name}</p>
      <img src={true ? src : !src} alt={alt} />
    </LinkContainer>
  );
};

export default LinkItem;
