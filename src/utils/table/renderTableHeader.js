import React from 'react';

export default ({ tableHeader, selectable, styles }) => {
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
