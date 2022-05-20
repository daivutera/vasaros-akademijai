import React, { useContext, useEffect, useState } from 'react';
import Content from '../components/content/Content';
import dataContext from '../context/dataContext';
import Container from '../components/container/Container';
import * as S from './Home.style';
import Table from '../components/Table/Table';

const TableViewPage = () => {
  const [loading, setLoading] = useState(false);
  const dataArrayValue = useContext(dataContext);
  const allDataToShow = dataArrayValue.dataArray.concat(
    dataArrayValue.addedDataArray
  );
  console.log('1', dataArrayValue.dataArray);
  console.log('2', dataArrayValue.addedDataArray);
  useEffect(() => {
    getDataFromUrl();
  }, []);

  const dataUrl = `https://jsonplaceholder.typicode.com/posts`;
  async function getDataFromUrl() {
    setLoading(true);
    const dataFromUrl = await fetch(dataUrl);
    const dataJson = await dataFromUrl.json();
    dataArrayValue.setNewDataArray(dataJson);
    console.log('1', dataArrayValue.dataArray);
    console.log('2', dataArrayValue.addedDataArray);
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
        <div>
          <Table arr={allDataToShow} />
        </div>
      </Container>
    </div>
  );
};

export default TableViewPage;
