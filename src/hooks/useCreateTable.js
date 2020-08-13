import React from 'react';

export default ({ tableHeader, tableData, selectable, styles }) => {
  const renderTableHeader = () => {
    return (
      <tr className={styles.tableHeaderRow} data-testid="tableHeaderRow">
        {selectable && tableHeader[0] !== '' ? (
          <th
            className={styles.tableHeaderCheckbox}
            data-testid="tableHeaderCheckbox"
          ></th>
        ) : null}

        {tableHeader
          ? tableHeader.map((item, index) => {
              return (
                <th
                  key={index}
                  className={styles.tableHeaderData}
                  data-testid="tableHeaderData"
                >
                  {item}
                </th>
              );
            })
          : null}
      </tr>
    );
  };

  const renderTableData = () => {
    return tableData ? (
      tableData.map((item, index) => {
        // Turn current item values into an array to be iterated on
        const values = Object.values(item);

        return (
          <tr
            key={index}
            className={styles.tableBodyRow}
            data-testid="tableBodyRow"
          >
            {selectable ? (
              <td
                className={styles.tableBodyCheckbox}
                data-testid="tableBodyCheckbox"
              >
                <input type="checkbox" name="checkbox" data-testid="checkbox" />
              </td>
            ) : null}

            {values.map((item, index) => {
              return (
                <td
                  key={index}
                  className={styles.tableBodyData}
                  data-testid="tableBodyData"
                >
                  {item}
                </td>
              );
            })}
          </tr>
        );
      })
    ) : (
      <tr>
        <td>No Data Available...</td>
      </tr>
    );
  };

  return [renderTableHeader, renderTableData];
};
