import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './Input.style';

const Input = ({ handleChange, type, name, placeholder, label, id }) => {
  const [value, setValue] = useState('');
  const onChange = (event) => {
    setValue(event.target.value);
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
};

export default Input;
