export default ({ values, tableData, newSelections, count, checked }) => {
  if (values.indexOf(true) >= 0 && values.indexOf(false) >= 0) {
    // Case where there are both selected and non-selected rows
    for (let i = 0; i < tableData.length; i++) {
      newSelections[i] = true;
    }
    count = values.length;
    checked = true;
  } else if (values.indexOf(true) >= 0 && values.indexOf(false) < 0) {
    // Case where there are only selected rows
    for (let i = 0; i < tableData.length; i++) {
      newSelections[i] = false;
    }
    count = 0;
    checked = false;
  } else if (values.indexOf(true) < 0 && values.indexOf(false) >= 0) {
    // Case where there are no selected rows
    for (let i = 0; i < tableData.length; i++) {
      newSelections[i] = true;
    }
    count = values.length;
    checked = true;
  }

  return {
    newSelections,
    count,
    checked,
  };
};
