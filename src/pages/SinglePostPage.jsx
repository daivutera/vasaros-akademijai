import React, { useEffect, useState } from 'react';
import Content from '../components/content/Content';
import ListItem from '../components/listItem/ListItem';
import Container from '../components/container/Container';

import { useSearchParams } from 'react-router-dom';

const SinglePostPage = () => {
  const [foundPost, setFoundPost] = useState({});
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({ userId: 'id' });
  const params = new URLSearchParams(window.location.search);
  const userIdFromParams = params.get('userId');

  console.log(userIdFromParams, 'userIdFromParams');

  useEffect(() => {
    getDataFromUrl();
    setSearchParams({ userId: userIdFromParams });
    console.log(userIdFromParams, 'userIdFromParams');
  }, []);

  const dataUrl = `https://jsonplaceholder.typicode.com/posts/${userIdFromParams.substring(
    '='
  )}`;
  console.log(dataUrl, 'dataUrl');
  async function getDataFromUrl() {
    console.log(searchParams, 'searchParams');
    setLoading(true);
    const dataFromUrl = await fetch(dataUrl);
    const dataJson = await dataFromUrl.json();
    console.log(dataJson);
    setFoundPost(dataJson);
    console.log(foundPost, 'foundPost');
    setLoading(false);
    if (!dataJson.length) {
      setLoading(false);
      return false;
    }
  }
  return (
    <div>
      <Container>
        <Content>Your selected article</Content>
        {loading && (
          <h2>Loading...Please be patient it can take for awhile. </h2>
        )}

        <div>
          {
            <ListItem
              key={foundPost.id}
              userId={foundPost.userId}
              postId={foundPost.id}
              title={
                foundPost.title?.charAt(0).toUpperCase() +
                foundPost.title?.slice(1)
              }
              body={foundPost.body}
            />
          }
        </div>
      </Container>
    </div>
  );
};

export default SinglePostPage;
