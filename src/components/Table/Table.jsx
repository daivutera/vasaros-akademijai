import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Table.styled.jsx';
import ListItemTableRow from '../listItemTableRow/ListItemTableRow';
import { useNavigate } from 'react-router-dom';

const Table = ({ arr }) => {
  const Navigate = useNavigate();
  function onClick(e) {
    e.preventDefault();

    Navigate({
      pathname: '/singlepost',
      search: `?userId=${1}`,
    });
  }
  //Object.keys(arr[0])[0]
  return (
    <S.Table>
      <tr>
        <S.Th>User Id</S.Th>
        <S.Th>Post Id</S.Th>
        <S.Th>Title</S.Th>
        <S.Th>Text</S.Th>
      </tr>
      {arr.map((onePost) => (
        <ListItemTableRow
          key={onePost.id}
          userId={onePost.userId}
          postId={onePost.id}
          title={onePost.title.charAt(0).toUpperCase() + onePost.title.slice(1)}
          body={onePost.body}
          onClick={onClick}
        />
      ))}
    </S.Table>
  );
};

Table.propTypes = {
  arr: PropTypes.array.isRequired,
};

export default Table;
