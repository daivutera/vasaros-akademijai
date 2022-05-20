import React, { useContext, useState } from 'react';
import Button from '../components/button/Button';
import Content from '../components/content/Content';
import Input from '../components/input/Input';
import dataContext from '../context/dataContext';
import * as S from './Add.styled';

const Add = () => {
  const dataArrayValue = useContext(dataContext);
  const [postDetails, setPostDetails] = useState({
    userId: '',
    postId: '',
    title: '',
    body: '',
  });
  const [error, setError] = useState(true);
  return (
    <div>
      <S.Div>
        <Content>Please add item to the list</Content>
      </S.Div>
      <S.Form
        action=''
        onSubmit={async (e) => {
          e.preventDefault();
          setError(true);
          const res = await fetch(
            'https://jsonplaceholder.typicode.com/posts',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(postDetails),
            }
          );
          const data = await res.json();
          const dataToAddToState = [data];
          dataArrayValue.setNewAddedDataArray(dataToAddToState);
          dataArrayValue.setAddedDataArray(dataToAddToState);

          setError(false);
        }}>
        <Input
          type='number'
          placeholder='User Id'
          name='userId'
          label='User Id'
          id='userId'
          handleChange={(userId) => {
            setPostDetails({ ...postDetails, userId });
          }}
        />
        <Input
          type='number'
          placeholder='Text id'
          name='textId'
          label='Text Id'
          id='textId'
          handleChange={(textId) => {
            setPostDetails({ ...postDetails, textId });
          }}
        />
        <Input
          type='text'
          placeholder='Title'
          name='title'
          label='Title'
          id='title'
          handleChange={(title) => {
            setPostDetails({ ...postDetails, title });
          }}
        />
        <Input
          type='text'
          placeholder='Your text here'
          name='body'
          label='Your text'
          id='body'
          handleChange={(body) => {
            setPostDetails({ ...postDetails, body });
          }}
        />
        <Button>Submit</Button>
      </S.Form>
      {!error ? <h3>Your post was posted. You can see at Home page</h3> : ''}
    </div>
  );
};

export default Add;
