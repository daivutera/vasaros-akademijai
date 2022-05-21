import React, { useEffect, useState } from 'react';
import Content from '../components/content/Content';
import ListItem from '../components/listItem/ListItem';
import Container from '../components/container/Container';

import { useSearchParams } from 'react-router-dom';

const SinglePostPage = () => {
  const [foundPost, setFoundPost] = useState({});
  const [loading, setLoading] = useState(false);
  const [SearchParams, setSearchParams] = useSearchParams({ userId: 'id' });
  const params = SearchParams;
  const userIdFromParams = params.get('userId');

  useEffect(() => {
    getDataFromUrl();
    setSearchParams({ userId: userIdFromParams });
  }, []);

  const dataUrl = `https://jsonplaceholder.typicode.com/posts/${userIdFromParams.substring(
    '='
  )}`;
  async function getDataFromUrl() {
    setLoading(true);
    const dataFromUrl = await fetch(dataUrl);
    const dataJson = await dataFromUrl.json();
    setFoundPost(dataJson);
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
