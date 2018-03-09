import React, { PureComponent } from 'react';
import { Table, ThemeProvider } from '../src';

const fields = [
  {
    key: 'date',
    label: 'Date',
    numerical: false,
    sortable: true,
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
    sortable: true,
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
    key: 'xzvxzcv',
    date: '02/01/17',
    event: 'Open House',
    price: '$5,500,000',
  },
  {
    key: 'ssssdas',
    date: '02/01/17',
    event: 'Showing',
    price: '$14,500,000',
  },
  {
    key: 'efsadf',
    date: '02/01/17',
    event: 'Price Change',
    price: '$774,500,000',
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
];

const StyledTable = Table.extend`
  .smc-table-datum-price {
    color: red;
  }
`;

const incrementCurrentPage = ({ currentPage }) => ({ currentPage: currentPage + 1 });
const decrementCurrentPage = ({ currentPage }) => ({ currentPage: currentPage - 1 });

class ControlledTable extends PureComponent {
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
        data={data.slice((currentPage - 1) * 4, currentPage * 4)}
        rowsPerPage={4}
        header="Faked Pagination"
        totalDataPoints={5}
        handleForwardPagination={this.handleForwardPagination}
        handleBackwardsPagination={this.handleBackwardsPagination}
      />
    );
  }
}

const Tables = () => (
  <ThemeProvider>
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
              <li>
                sortable?: boolean
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
          <li>
            searchable?: boolean
            denotes if you intend to supply a search callback for the Search input
          </li>
          <li>
            onSearch?: () => any
            function to be called onChange in the search input field
          </li>
          <br />
          <li>
            hasCheckboxes?: boolean
            denotes checkboxes on items, if this prop is passed you must also pass the
            next two methods below, for onCheck and onUncheck
          </li>
          <ul>
            <li>
              onCheck: () => any
              Callback that will be called when the user clicks a checkbox on.
              it is passed the Datum of that row as its first param
            </li>
            <li>
              onUncheck: () => any
              Callback that will be called when the user clicks a checkbox off.
              it is passed the Datum of that row as its first param
            </li>
          </ul>
          <br />
          <li>
            notes on sorting:
          </li>
          <ul>
            <li>
              if Uncontrolled, the sort will order all the data regardles of the currentPage
              this is because it manipulates all the data it was given. Page agnostic.
            </li>
            <li>
              if controlled via a parent, it will manipulate only the data on that page.
              as that is all it was given.
            </li>
            <li>
              The sorting method is called NaturalSort. Credits to: <a href='https://github.com/bubkoo/natsort' target='none'>https://github.com/bubkoo/natsort</a>
            </li>
          </ul>
        </ul>
      </h4>
      <h2>Regular Table</h2>
      <Table
        fields={fields}
        data={data}
        header="Table header"
      />
      <h2>Headless Table! :spooky:</h2>
      <Table
        fields={fields}
        data={data}
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
      <h2>Table checkboxes</h2>
      <Table
        hasCheckboxes
        onCheck={() => {
          console.log('select');
        }}
        onUncheck={() => {
          console.log('deselect');
        }}
        fields={fields}
        data={data}
        header={`Check the console for callbacks!`}
      />
      <h2>Full Width!</h2>
      <Table
        fullWidth
        hasCheckboxes
        onCheck={() => {
          console.log('select');
        }}
        onUncheck={() => {
          console.log('deselect');
        }}
        fields={fields}
        data={data}
        header={`Check the console for callbacks!`}
      />
      <h2>Table checkboxes, with sorting!</h2>
      <Table
        hasCheckboxes
        rowsPerPage={2}
        onCheck={(e) => {
          console.log('select', e.key);
        }}
        onUncheck={(e) => {
          console.log('deselect', e.key);
        }}
        fields={fields}
        data={data}
        header={`Check the console for callbacks!`}
      />
      <h2>Table checkboxes, with sorting, WITH SEARCH!?!!?</h2>
      <Table
        searchable
        onSearch={(e) => {
          console.log('search!', e.target.value);
        }}
        hasCheckboxes
        onCheck={(e) => {
          console.log('select', e.key);
        }}
        onUncheck={(e) => {
          console.log('deselect', e.key);
        }}
        fields={fields}
        data={data}
        header={`Check the console for callbacks!`}
      />
    </div>
  </ThemeProvider>

);

export default Tables;
