import React, { PureComponent } from 'react';
import { Table, ThemeProvider } from '../src';

import naturalSort from '../src/components/Table/naturalSort';

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
    mutatedData: [...data],
    currentPage: 1,
    descending: false,
    sortedBy: '',
  };

  handleSort = (key) => {
    let descending = this.state.descending;
    const mutatedData = [...this.state.mutatedData];
    if (key === this.state.sortedBy) {
      if (this.state.descending) {
        descending = false;
      } else {
        descending = true;
      }
    } else {
      descending = true;
    }
    const sorter = naturalSort({ desc: descending });
    mutatedData.sort(
      (a, b) => sorter(a[key], b[key])
    );
    this.setState({ descending, mutatedData, sortedBy: key });
  }

  handleForwardPagination = () => {
    this.setState(incrementCurrentPage);
  }

  handleBackwardsPagination = () => {
    this.setState(decrementCurrentPage);
  }

  render() {
    const { currentPage, descending, sortedBy, mutatedData } = this.state;
    return (
      <Table
        onSearch={(e) => {
          console.log('search!', e.target.value);
        }}
        onSort={this.props.dontSort ? false : (key) => {
          this.handleSort(key);
        }}
        sortedBy={sortedBy}
        hasCheckboxes
        onCheck={(e) => {
          console.log('select', e.key);
        }}
        onUncheck={(e) => {
          console.log('deselect', e.key);
        }}
        descending={descending}
        fields={fields}
        data={[...mutatedData].slice((currentPage - 1) * 4, currentPage * 4)}
        totalDataPoints={mutatedData.length}
        rowsPerPage={4}
        handleForwardPagination={this.handleForwardPagination}
        handleBackwardsPagination={this.handleBackwardsPagination}
        header={`Check the console for callbacks!`}
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
          <br />
          <li>
            Controlled Data:
          </li>
          <li>
            rowsDropDown?: [int]
            array of ints that specifies how many rows the user can choose from
            defaults to Fibonacci * rowsPerPage
            supplying an empty array will hide the "rowsPerPage"
          </li>
          <li>
            handleForwardPagination: () => any
            Callback that will be called when the user clicks the 'next' arrow
          </li>
          <li>
            handleBackwardsPagination: () => any
            Callback that will be called when the user clicks the 'back' arrow
          </li>
          <br />
          <li>
            onSort?: (key) => void
            Supply your own sorting method! Gives you 'key' param!
            Remember to control your data!
          </li>
          <ul>

            <li>
              sortedBy?: string
              Current key that we are sorted by (used for row hilighting)
            </li>
            <li>
              descending?: boolean
              whether we are currently sorting by ascending or descending!
            </li>
          </ul>
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
              The sorting default method is called NaturalSort. Credits to: <a href='https://github.com/bubkoo/natsort' target='none'>https://github.com/bubkoo/natsort</a>
            </li>
            <li>
              you can supply your own if you intend to mutate the data yourself see onSort
            </li>
          </ul>
          <br />
          <li>
            onSearch?: (string) => any
            function to be called onChange in the search input field. gives
            you the search input value
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
      <h2>Uncontrolled Table with footer and custom dropdowns</h2>
      <Table
        fields={fields}
        data={data}
        rowsDropDown={[2, 3, 4, 1337]}
        rowsPerPage={2}
        totalDataPoints={data.length}
        header="Custom Rows Per Page Selection!"
      />
      <br />
      <Table
        fields={fields}
        data={data}
        rowsDropDown={[]}
        rowsPerPage={2}
        totalDataPoints={data.length}
        header="Hidden Rows Per Page Selection!"
      />
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
      <h2>Assume Direct Control</h2>
      <ControlledTable />
      <h2>Assume Direct Control (but give up sort)</h2>
      <ControlledTable dontSort />
    </div>
  </ThemeProvider>

);

export default Tables;
