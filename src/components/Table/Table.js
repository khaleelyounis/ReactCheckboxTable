import React from 'react';
import PropTypes from 'prop-types';
import TableActions from '../TableActions';
import useCreateTable from '../../hooks/useCreateTable';

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
  const [renderTableHeader, renderTableData] = useCreateTable({
    tableHeader,
    tableData,
    selectable,
    onClick,
    isItemSelected,
    styles,
  });

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
        <thead data-testid="thead">{renderTableHeader()}</thead>
        <tbody data-testid="tbody">{renderTableData()}</tbody>
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
  toggleAll: () => {},
  checked: false,
};

Table.propTypes = {
  tableHeader: PropTypes.array.isRequired,
  tableData: PropTypes.array.isRequired,
  tableActions: PropTypes.bool,
  onClick: PropTypes.func,
  isItemSelected: PropTypes.func,
  selectable: PropTypes.bool,
  selectedCount: PropTypes.number,
  downloadCallback: PropTypes.func,
  toggleAll: PropTypes.func,
  checked: PropTypes.bool,
};

export default Table;
