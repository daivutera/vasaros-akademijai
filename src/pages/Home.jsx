import React, { useContext, useEffect, useState } from 'react';
import Content from '../components/content/Content';
import ListItem from '../components/listItem/ListItem';
import dataContext from '../context/dataContext';
import Container from './../components/container/Container';
import * as S from './Home.style';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const dataArrayValue = useContext(dataContext);
  const allDataToShow = dataArrayValue.addedDataArray.concat(
    dataArrayValue.dataArray
  );
  useEffect(() => {
    getDataFromUrl();
  }, []);

  const dataUrl = `https://jsonplaceholder.typicode.com/posts`;
  async function getDataFromUrl() {
    setLoading(true);
    const dataFromUrl = await fetch(dataUrl);
    const dataJson = await dataFromUrl.json();
    dataArrayValue.setNewDataArray(dataJson);
    setLoading(false);

    if (!dataJson.length) {
      setLoading(false);
      return false;
    }
  }

  return (
    <div>
      <Container>
        <Content>Here you will find all user posts</Content>
        {loading && (
          <h2>Loading...Please be patient it can take for awhile. </h2>
        )}
        {!loading && !allDataToShow.length && (
          <h2>No any posts in the list yet...</h2>
        )}
        <S.GridContainer>
          {allDataToShow.map((post) => (
            <ListItem
              key={post.id}
              userId={post.userId}
              postId={post.id}
              title={post.title.charAt(0).toUpperCase() + post.title.slice(1)}
              body={post.body}
            />
          ))}
        </S.GridContainer>
      </Container>
    </div>
  );
};

export default Home;
