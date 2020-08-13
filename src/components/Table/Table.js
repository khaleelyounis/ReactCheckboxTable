import React from 'react';
import PropTypes from 'prop-types';
import TableActions from '../TableActions';
import useCreateTable from '../../hooks/useCreateTable';

import styles from './styles.module.css';

const Table = ({
  tableHeader,
  tableData,
  tableActions,
  selectedCount,
  selectable,
}) => {
  const [renderTableHeader, renderTableData] = useCreateTable({
    tableHeader,
    tableData,
    selectable,
    styles,
  });

  return (
    <>
      {tableActions ? <TableActions selectedCount={selectedCount} /> : null}
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
  selectedCount: 0,
  selectable: false,
};

Table.propTypes = {
  tableHeader: PropTypes.array.isRequired,
  tableData: PropTypes.array.isRequired,
  tableActions: PropTypes.bool,
  selectedCount: PropTypes.number,
  selectable: PropTypes.bool,
};

export default Table;
