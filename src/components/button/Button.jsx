import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

const Button = ({ children, color, disabled }) => {
  return (
    <S.Button color={color} disabled={disabled}>
      {children}
    </S.Button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  secondary: PropTypes.string,
  disabled: PropTypes.bool,
};
Button.defaultProps = {
  disabled: false,
};

export default Button;
