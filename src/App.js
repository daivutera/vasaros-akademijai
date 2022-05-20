import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/Home';
import Add from './pages/Add';
import Container from './components/container/Container';
import Footer from './components/footer/Footer';
import SinglePostPage from './pages/SinglePostPage';
import { useState } from 'react';
import dataContext from './context/dataContext';
import TableViewPage from './pages/TableViewPage';

function App() {
  const [dataArray, setDataArray] = useState([]);
  const [addedDataArray, setAddedDataArray] = useState([]);
  const currentContextValue = {
    dataArray,
    addedDataArray,
    setNewDataArray,
    setNewAddedDataArray,
  };
  function setNewDataArray(arr) {
    setDataArray([...arr]);
  }
  function setNewAddedDataArray(arr) {
    setAddedDataArray([...addedDataArray, ...arr]);
  }
  return (
    <dataContext.Provider value={currentContextValue}>
      <div className='App'>
        <Header />
        <Container>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/list' element={<TableViewPage />} />
            <Route path='/singlepost' element={<SinglePostPage />} />
            <Route path='/add' element={<Add />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </dataContext.Provider>
  );
}

export default App;
