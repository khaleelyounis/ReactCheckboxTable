import React from 'react';
import PropTypes from 'prop-types';
import download from '../../assets/download.png';
import styles from './styles.module.css';

const TableActions = ({ selectedCount }) => {
  return (
    <div className={styles.tableActions} data-testid="tableActions">
      <div
        className={styles.tableActionsCheckbox}
        data-testid="tableActionsCheckbox"
      >
        <input type="checkbox" name="checkbox" data-testid="checkbox" />{' '}
      </div>
      <div
        className={styles.tableActionsSelected}
        data-testid="tableActionsSelected"
      >
        {selectedCount > 0 ? `Selected ${selectedCount}` : 'None Selected'}
      </div>
      <div
        className={styles.tableActionsDownload}
        data-testid="tableActionsDownload"
      >
        <img
          src={download}
          className={styles.downloadIcon}
          data-testid="downloadIcon"
          alt="download icon"
        />
        Download Selected
      </div>
    </div>
  );
};

TableActions.defaultProps = {
  selectedCount: 0,
};

TableActions.propTypes = {
  selectedCount: PropTypes.number.isRequired,
};

export default TableActions;
