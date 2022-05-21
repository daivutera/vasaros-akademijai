import React from 'react';
import ListitemTableRow from './ListItemTableRow';

export const Default = () => (
  <ListitemTableRow
    userId='1'
    postId='1'
    title='Hello'
    body='World'
    onClick={() => {
      console.log('hello');
    }}
  />
);
export default {
  title: 'ListitemTableRow',
  component: ListitemTableRow,
};
