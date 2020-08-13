import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import TableActions from './TableActions';

TableActions.defaultProps = {
  selectedCount: 0,
  checked: false,
  downloadCallback: jest.fn(),
  toggleAll: jest.fn(),
};

describe('TableActions Snapshots', () => {
  it('Should render with checkbox, selected, and download elements', () => {
    const component = render(<TableActions />);
    const checkbox = component.getByTestId('tableActionsCheckbox');
    const selected = component.getByTestId('tableActionsSelected');
    const download = component.getByTestId('tableActionsDownload');

    expect(checkbox).toBeTruthy();
    expect(selected).toBeTruthy();
    expect(download).toBeTruthy();
    expect(component).toMatchSnapshot();
  });

  it('Should have None Selected Text with 0 selected count', () => {
    const component = render(<TableActions />);
    const selected = component.getByTestId('tableActionsSelected');

    expect(selected.textContent).toBe('None Selected');
  });

  it('Should have Selected 2 when selectedCount is 2', () => {
    const component = render(<TableActions selectedCount={2} />);
    const selected = component.getByTestId('tableActionsSelected');

    expect(selected.textContent).toBe('Selected 2');
  });

  it('Should have unchecked checkbox when checked is false', () => {
    const component = render(<TableActions />);
    const checkbox = component.getByTestId('checkbox');

    expect(checkbox.checked).toBe(false);
  });

  it('Should have unchecked checkbox when checked is false', () => {
    const component = render(<TableActions checked />);
    const checkbox = component.getByTestId('checkbox');

    expect(checkbox.checked).toBe(true);
  });
});

describe('TableActions Actions', () => {
  it('Should fire downloadCallback function when download element is clicked', () => {
    const component = render(<TableActions />);
    const download = component.getByTestId('tableActionsDownload');

    fireEvent.click(download);
    expect(TableActions.defaultProps.downloadCallback).toHaveBeenCalled();
  });

  it('Should fire toggleAll function when checkbox is clicked', () => {
    const component = render(<TableActions />);
    const checkbox = component.getByTestId('checkbox');

    fireEvent.click(checkbox);
    expect(TableActions.defaultProps.toggleAll).toHaveBeenCalled();
  });
});
