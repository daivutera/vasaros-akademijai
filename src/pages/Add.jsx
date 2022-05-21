import React, { useContext, useEffect, useState } from 'react';
import Button from '../components/button/Button';
import Container from '../components/container/Container';
import Content from '../components/content/Content';
import Input from '../components/input/Input';
import dataContext from '../context/dataContext';
import * as S from './Add.styled';

const Add = () => {
  const dataArrayValue = useContext(dataContext);
  const [disabledButton, setDisabledButton] = useState(true);
  const [error, setError] = useState(false);
  const [postDetails, setPostDetails] = useState({
    userId: '',
    id: '',
    title: '',
    body: '',
  });

  useEffect(() => {
    CheckIfAllFieldsAreFilledIn();
  }, [postDetails]);

  function CheckIfAllFieldsAreFilledIn() {
    setDisabledButton(true);
    const userId = postDetails.userId;
    const id = postDetails.id;
    const title = postDetails.title;
    const body = postDetails.body;
    if (userId !== '' && id !== '' && title !== '' && body !== '') {
      setDisabledButton(false);
    }
  }

  return (
    <Container>
      <S.Div>
        <Content>Please add item to the list</Content>
      </S.Div>
      <S.Form
        action=''
        onSubmit={async (e) => {
          e.preventDefault();
          setError(false);
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
          setError(true);

          setPostDetails({
            userId: '',
            id: '',
            title: '',
            body: '',
          });
          e.target.reset();
        }}>
        <Input
          type='number'
          placeholder='User Id'
          name='userId'
          label='User Id'
          id='userId'
          value={postDetails.userId}
          handleChange={(userId) => {
            setPostDetails({ ...postDetails, userId });
          }}
        />
        <Input
          type='number'
          placeholder='id'
          name='id'
          label='id'
          id='id'
          value={postDetails.id}
          handleChange={(id) => {
            setPostDetails({ ...postDetails, id });
          }}
        />
        <Input
          type='text'
          placeholder='Title'
          name='title'
          label='Title'
          id='title'
          value={postDetails.title}
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
          value={postDetails.body}
          handleChange={(body) => {
            setPostDetails({ ...postDetails, body });
          }}
        />
        <Button disabled={disabledButton}>Submit</Button>
        {disabledButton && <S.Msgr>Please fill in all required fields</S.Msgr>}
        {error && <S.Msg>Your post was posted. You can see at Home page</S.Msg>}
      </S.Form>
    </Container>
  );
};

export default Add;
