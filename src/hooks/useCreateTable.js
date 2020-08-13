import React from 'react';
import greenIcon from '../assets/greenIcon.png';

export default ({
  tableHeader,
  tableData,
  selectable,
  onClick,
  isItemSelected,
  styles,
}) => {
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
            style={
              isItemSelected && isItemSelected(index)
                ? { backgroundColor: 'rgba(169, 169, 169, 0.2)' }
                : null
            }
            data-testid="tableBodyRow"
            onClick={() => {
              if (onClick) {
                onClick(index);
              }
            }}
          >
            {selectable ? (
              <td
                className={styles.tableBodyCheckbox}
                data-testid="tableBodyCheckbox"
              >
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={isItemSelected && isItemSelected(index)}
                  data-testid="checkbox"
                  onChange={() => null}
                />
              </td>
            ) : null}

            {values.map((item, index) => {
              const available = values[index + 1] === 'Available';
              return (
                <td
                  key={index}
                  className={styles.tableBodyData}
                  data-testid="tableBodyData"
                >
                  {item}
                  {available ? (
                    <img
                      src={greenIcon}
                      className={styles.greenIcon}
                      data-testid={greenIcon}
                      alt="green circle icon"
                    />
                  ) : null}
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
