import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import download from '../../assets/download.png';
import styles from './styles.module.css';

const TableActions = ({
  selectedCount,
  downloadCallback,
  toggleAll,
  checked,
}) => {
  // A little business logic is required in order to represent
  // an indeterminate state for the referenced checkbox.
  // This still holds true to a resuable component as it is a very
  // specific use case for this component that can be used again
  const checkboxRef = useRef();
  useEffect(() => {
    const checkbox = checkboxRef.current;
    if (selectedCount > 0 && !checked) {
      checkbox.indeterminate = true;
    } else {
      checkbox.indeterminate = false;
    }
  }, [selectedCount, checked]);

  return (
    <div className={styles.tableActions} data-testid="tableActions">
      <div
        className={styles.tableActionsCheckbox}
        data-testid="tableActionsCheckbox"
      >
        <input
          type="checkbox"
          name="checkbox"
          ref={checkboxRef}
          data-testid="checkbox"
          checked={checked}
          onChange={toggleAll}
        />{' '}
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
        onClick={downloadCallback}
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
  downloadCallback: () => {},
  toggleAll: () => {},
  checked: false,
};

TableActions.propTypes = {
  selectedCount: PropTypes.number.isRequired,
  downloadCallback: PropTypes.func.isRequired,
  toggleAll: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default TableActions;
