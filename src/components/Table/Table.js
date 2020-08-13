import React from 'react';
import PropTypes from 'prop-types';
import useCreateTable from '../../hooks/useCreateTable';

import styles from './styles.module.css';

const Table = ({ tableHeader, tableData }) => {
  const [renderTableHeader, renderTableData] = useCreateTable({
    tableHeader,
    tableData,
    styles,
  });

  return (
    <table data-testid="table">
      <thead data-testid="thead">{renderTableHeader()}</thead>
      <tbody data-testid="tbody">{renderTableData()}</tbody>
    </table>
  );
};

Table.defaultProps = { tableHeader: [], tableData: [] };

Table.propTypes = {
  tableHeader: PropTypes.array.isRequired,
  tableData: PropTypes.array.isRequired,
};

export default Table;
