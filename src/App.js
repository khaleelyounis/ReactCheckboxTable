import React, { useState, useEffect, useCallback } from 'react';
import Table from './components/Table';
import data from './data/table.json';
import capitalize from './utils/capitalize';
import { downloadHelper, determineToggle } from './utils/table';

function App() {
  const { tableHeader, tableData } = data;
  let [selectedCount, setSelectedCount] = useState(0);
  let [selections, setSelections] = useState({});
  let [checked, setChecked] = useState(false);

  const onClick = useCallback(
    (index) => {
      if (selections[index]) {
        setSelectedCount(--selectedCount);
      } else {
        setSelectedCount(++selectedCount);
      }

      setSelections((prevState) => {
        if (prevState[index]) {
          return { ...prevState, [index]: false };
        } else {
          return { ...prevState, [index]: true };
        }
      });

      if (selectedCount === Object.keys(selections).length) {
        setChecked(true);
      } else {
        setChecked(false);
      }
    },
    [selectedCount, selections],
  );

  const isItemSelected = useCallback(
    (index) => {
      return selections[index] ? true : false;
    },
    [selections],
  );

  const toggleAll = useCallback(() => {
    const values = Object.values(selections);
    let newSelections = {};
    let count = 0;
    let checked = false;

    const toggleValues = determineToggle({
      values,
      tableData,
      newSelections,
      count,
      checked,
    });

    setSelections(toggleValues.newSelections);
    setSelectedCount(toggleValues.count);
    setChecked(toggleValues.checked);
  }, [selections, tableData]);

  const downloadCallback = useCallback(() => {
    const createAlertText = downloadHelper({ selections, tableData });
    alert(createAlertText());
  }, [selections, tableData]);

  useEffect(() => {
    const initialSelections = {};
    for (let i = 0; i < tableData.length; i++) {
      initialSelections[i] = false;
    }
    setSelections(initialSelections);
  }, [tableData]);

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
      <Table
        tableHeader={tableHeader}
        tableData={tableData}
        onClick={onClick}
        isItemSelected={isItemSelected}
        selectedCount={selectedCount}
        checked={checked}
        downloadCallback={downloadCallback}
        toggleAll={toggleAll}
        tableActions
        selectable
      />
    </div>
  );
}

export default App;
