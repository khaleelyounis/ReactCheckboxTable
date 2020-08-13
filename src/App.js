import React from 'react';
import Table from './components/Table';
import data from './data/table.json';
import capitalize from './utils/capitalize';

function App() {
  const { tableHeader, tableData } = data;

  // Capitalize the first letter of both the Table Headers and Statuses
  // This is not part of the useEffect hook because
  // we want this to take place on every render
  for (let data of tableHeader) {
    data = capitalize(data);
  }

  for (let data of tableData) {
    if (data.status) {
      data.status = capitalize(data.status);
    }
  }

  return (
    <div style={{ margin: '5px' }}>
      <Table tableHeader={tableHeader} tableData={tableData} />{' '}
    </div>
  );
}

export default App;
