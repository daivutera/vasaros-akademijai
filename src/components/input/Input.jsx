import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Input.style';

const Input = ({ handleChange, type, name, placeholder, label, id, value }) => {
  const onChange = (event) => {
    handleChange(event.target.value);
  };
  return (
    <>
      <S.Label>{label}</S.Label>
      <S.Input
        type={type}
        name={name}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number']).isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
};

export default Input;
