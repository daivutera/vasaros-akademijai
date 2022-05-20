import React from 'react';
import * as S from './Footer.style';

const Footer = () => {
  return (
    <S.Footer>
      Copyright Ⓒ by Daiva Rajackiene {new Date().getFullYear()}
    </S.Footer>
  );
};

export default Footer;
