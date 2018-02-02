import React, { Component } from 'react';
import MaterialThemeProvider from '../src/theme/ThemeProvider';
import { Table } from '../src/components/Table';

const fields = [
  {
    key: 'date',
    label: 'Date',
    numerical: false,
  },
  {
    key: 'event',
    label: 'Event',
    numerical: false,
  },
  {
    key: 'price',
    label: 'Price',
    numerical: true,
  },
];

const data = [
  {
    key: '3oirj923o',
    date: '02/01/17',
    event: 'Price Change',
    price: '$24,500,000',
  },
  {
    key: '2398ro829j',
    date: '03/14/16',
    event: 'Price Change',
    price: '$28,500,000',
  },
  {
    key: '3289rj92r',
    date: '05/10/14',
    event: 'Listed for sale',
    price: '$37,500,000',
  },
  {
    key: 'r43r3443',
    date: '02/05/16',
    event: 'Something else',
    price: '$34,232,544',
  },
  {
    key: '4534r34',
    date: '03/14/15',
    event: 'Really Big Price Change',
    price: '$4,000',
  },
];

const StyledTable = Table.extend`
  max-width: 500px;
  .smc-table-datum-price {
    color: red;
  }
`;

const incrementCurrentPage = ({ currentPage }) => ({ currentPage: currentPage + 1 });
const decrementCurrentPage = ({ currentPage }) => ({ currentPage: currentPage - 1 });

class ControlledTable extends Component {
  state = {
    currentPage: 1,
  };

  handleForwardPagination = () => {
    this.setState(incrementCurrentPage);
  }

  handleBackwardsPagination = () => {
    this.setState(decrementCurrentPage);
  }

  render() {
    const { currentPage } = this.state;
    return (
      <Table
        fields={fields}
        data={data.slice((currentPage - 1) * 3, currentPage * 3)}
        rowsPerPage={3}
        header="Faked Pagination"
        totalDataPoints={5}
        handleForwardPagination={this.handleForwardPagination}
        handleBackwardsPagination={this.handleBackwardsPagination}
      />
    );
  }
}

const Tables = () => (
  <MaterialThemeProvider>
    <div>
      <h1>Tables</h1>
      <h4>
        Table can accept the following props:
        <ul>
          <li>
            header?: string
            The table header
          </li>
          <li>
            fields: Array of fields, which correspond to the columns. Each field
            should have the following properties:
            <ul>
              <li>
                key: string, // React key, must be unique
              </li>
              <li>
                label: string,
              </li>
              <li>
                numerical?: boolean
              </li>
            </ul>
          </li>
          <li>
            data: Array of data points, which correspond to the rows. Each datum
            should have the following properties:
            <ul>
              <li>
                key: string // React key, must be unique
              </li>
              <li>
                [columnKey: string]: any // property should match the field key
              </li>
            </ul>
          </li>
          <li>
            rowsPerPage?: number
            This will default to 10. Default behavior if that pagination will appear
            if the number of rows exceeds the rowsPerPage
          </li>
          <li>
            currentPage?: number
            This will default to 1. You can use this to override which page you're on
            (if pagination is showing)
          </li>
          <li>
            totalDataPoints?: number
            Use this if you're "faking" pagination by passing in new data for each page,
            for example by fetching new data on paginate
          </li>
          <li>
            handleForwardPagination: () => any
            Callback that will be called when the user clicks the 'next' arrow
          </li>
          <li>
            handleBackwardsPagination: () => any
            Callback that will be called when the user clicks the 'back' arrow
          </li>
        </ul>
      </h4>
      <h2>Regular Table</h2>
      <Table
        fields={fields}
        data={data}
        header="Table header"
      />
      <h2>Table with column style override</h2>
      <StyledTable
        fields={fields}
        data={data}
        header="Table header"
      />
      <h2>Uncontrolled Table with footer</h2>
      <Table
        fields={fields}
        data={data}
        rowsPerPage={2}
        header="Real pagination"
      />
      <h2>Controlled table with footer</h2>
      <ControlledTable />
    </div>
  </MaterialThemeProvider>
);

export default Tables;
