import React from 'react';
import Table from './components/Table';
import data from './data/table.json';

function App() {
  const { tableHeader, tableData } = data;

  return <Table />;
}

export default App;
