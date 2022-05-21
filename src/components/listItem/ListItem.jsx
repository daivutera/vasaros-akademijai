import React from 'react';
import PropTypes from 'prop-types';
import * as S from './ListItem.styled';
import { useNavigate } from 'react-router-dom';

const ListItem = ({ userId, postId, title, body }) => {
  const Navigate = useNavigate();
  function onClick(e) {
    e.preventDefault();
    Navigate({
      pathname: '/singlepost',
      search: `?userId=${postId}`,
    });
  }
  return (
    <S.Flex onClick={onClick}>
      <S.Title>
        <S.H3>{title}</S.H3>
      </S.Title>
      <S.P>{body}</S.P>
      <S.UserInfoDiv>
        User Id: {userId}, post id = {postId}
      </S.UserInfoDiv>
    </S.Flex>
  );
};

ListItem.propTypes = {
  userId: PropTypes.number.isRequired,
  postId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired,
};

export default ListItem;
