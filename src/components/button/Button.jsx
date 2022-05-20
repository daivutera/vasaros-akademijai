import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

const Button = ({ children, color }) => {
  return <S.Button color={color}>{children}</S.Button>;
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  secondary: PropTypes.string,
};

export default Button;
