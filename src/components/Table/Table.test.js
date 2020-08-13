import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Table from './Table';

Table.defaultProps = {
  tableHeader: ['header1', 'header2', 'header3'],
  tableData: [
    { header1: '1', header2: '2', header3: '3' },
    { header1: '4', header2: '5', header3: '6' },
  ],
  onClick: jest.fn(),
  isItemSelected: jest.fn(),
  selectedCount: 0,
  checked: false,
  downloadCallback: jest.fn(),
  toggleAll: jest.fn(),
  tableActions: true,
  selectable: true,
};

describe('Table Snapshots', () => {
  it('Should render with checkboxes and tableActions', () => {
    const component = render(<Table />);
    const checkboxes = component.getAllByTestId('checkbox');
    const tableActions = component.getByTestId('tableActions');

    expect(tableActions).toBeTruthy();
    expect(checkboxes).toBeTruthy();
    expect(component).toMatchSnapshot();
  });
  it('Should render without checkboxes and tableActions', () => {
    const component = render(<Table tableActions={false} selectable={false} />);
    const checkboxes = component.queryByTestId('checkbox');
    const tableActions = component.queryByTestId('tableActions');

    expect(tableActions).toBeNull();
    expect(checkboxes).toBeNull();
    expect(component).toMatchSnapshot();
  });
});

describe('Table Actions', () => {
  it('Should fire onClick function when row is clicked', () => {
    const component = render(<Table />);
    const tableRow = component.getAllByTestId('tableBodyRow')[0];

    fireEvent.click(tableRow);
    expect(Table.defaultProps.onClick).toHaveBeenCalled();
  });

  it('Should fire onClick function when checkbox is clicked', () => {
    const component = render(<Table />);
    const checkbox = component.getAllByTestId('checkbox')[0];

    fireEvent.click(checkbox);
    expect(Table.defaultProps.onClick).toHaveBeenCalled();
  });
});
