import React from 'react';

const dataContext = React.createContext({
  dataArray: [],
  addedDataArray: [],
  setNewDataArray() {},
  setNewAddedDataArray() {},
});
dataContext.displayName = 'dataContext';

export default dataContext;
