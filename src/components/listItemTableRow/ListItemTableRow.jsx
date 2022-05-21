import React from 'react';
import PropTypes from 'prop-types';
import * as S from './ListItemTableRow.styled';

const ListItemTableRow = ({ userId, postId, title, body, onClick }) => {
  return (
    <tr onClick={onClick}>
      <S.Td>{userId}</S.Td>
      <S.Td>{postId}</S.Td>
      <S.Td>{title}</S.Td>
      <S.Td>{body}</S.Td>
    </tr>
  );
};

ListItemTableRow.propTypes = {
  userId: PropTypes.number.isRequired,
  postId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired,
};

export default ListItemTableRow;
