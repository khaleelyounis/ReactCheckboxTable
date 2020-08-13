export default ({ selections, tableData }) => {
  const selectionIndexes = [];
  const downloadableContent = [];

  for (let data in selections) {
    if (selections[data]) {
      selectionIndexes.push(data);
    }
  }

  for (let index of selectionIndexes) {
    if (tableData[index].status === 'Available') {
      downloadableContent.push({
        device: tableData[index].device,
        path: tableData[index].path,
      });
    }
  }

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
