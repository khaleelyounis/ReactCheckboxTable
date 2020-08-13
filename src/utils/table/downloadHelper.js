export default ({ selections, tableData }) => {
  const selectionIndexes = [];
  const downloadableContent = [];

  //If the value of the row is truthy, add the index to the array
  for (let data in selections) {
    if (selections[data]) {
      selectionIndexes.push(data);
    }
  }

  // If the index of tableData has an Available Status, add to array
  for (let index of selectionIndexes) {
    if (tableData[index].status === 'Available') {
      downloadableContent.push({
        device: tableData[index].device,
        path: tableData[index].path,
      });
    }
  }

  // For the data in the downloadableContent, add to the string passed to alert
  const createAlertText = () => {
    let string = 'Current downloadable content available:\n\n';
    if (downloadableContent.length) {
      for (let item of downloadableContent) {
        string = `${string}Device: ${item.device}\nPath: ${item.path}\n\n`;
      }
    } else {
      string = 'No downloadable content available.';
    }
    return string;
  };

  return createAlertText;
};
