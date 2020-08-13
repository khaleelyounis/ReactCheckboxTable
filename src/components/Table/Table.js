import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TableActions from '../TableActions';
import { renderTableHeader, renderTableData } from '../../utils/table';
import styles from './styles.module.css';

const Table = ({
  tableHeader,
  tableData,
  tableActions,
  onClick,
  isItemSelected,
  selectable,
  selectedCount,
  downloadCallback,
  toggleAll,
  checked,
}) => {
  let [tableHeaderElements, setTableHeaderElements] = useState(null);
  let [tableDataElements, setTableDataElements] = useState(null);

  // useEffect allows for the tableHeaderElements and the tableDataElements
  // to not re-render on every state change. The only time it re-renders is
  // if the any data passed in to the second argument are mutated
  useEffect(() => {
    setTableHeaderElements(
      renderTableHeader({
        tableHeader,
        selectable,
        styles,
      }),
    );
    setTableDataElements(
      renderTableData({
        tableData,
        selectable,
        onClick,
        isItemSelected,
        styles,
      }),
    );
  }, [tableHeader, tableData, selectable, onClick, isItemSelected]);

  return (
    <>
      {tableActions ? (
        <TableActions
          selectedCount={selectedCount}
          downloadCallback={downloadCallback}
          toggleAll={toggleAll}
          checked={checked}
        />
      ) : null}
      <table data-testid="table">
        <thead data-testid="thead">{tableHeaderElements}</thead>
        <tbody data-testid="tbody">{tableDataElements}</tbody>
      </table>
    </>
  );
};

Table.defaultProps = {
  tableHeader: [],
  tableData: [],
  tableActions: false,
  onClick: () => {},
  isItemSelected: () => {},
  selectable: false,
  selectedCount: 0,
  downloadCallback: () => {},
  checked: false,
};

Table.propTypes = {
  tableHeader: PropTypes.array.isRequired,
  tableData: PropTypes.array.isRequired,
  tableActions: PropTypes.bool,
  onClick: PropTypes.func,
  isItemSelected: PropTypes.func,
  selections: PropTypes.object,
  selectable: PropTypes.bool,
  selectedCount: PropTypes.number,
  downloadCallback: PropTypes.func,
  checked: PropTypes.bool,
};

export default Table;
