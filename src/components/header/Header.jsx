import React from 'react';
import * as S from './Header.styled';
import { Link } from 'react-router-dom';
import Button from './../button/Button';

const Header = () => {
  return (
    <S.Div>
      <S.Img src='logo.png' alt='logo' />
      <div>
        <Link to='/'>
          <Button color='secondary'>Home</Button>
        </Link>
        <Link to='/list'>
          <Button color='secondary'>Table View</Button>
        </Link>
        <Link to='/add'>
          <S.Button>Add</S.Button>
        </Link>
      </div>
    </S.Div>
  );
};

export default Header;
