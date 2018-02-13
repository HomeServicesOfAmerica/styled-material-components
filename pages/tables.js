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
];

const StyledTable = Table.extend`
  .smc-table-datum-price {
    color: red;
  }
`;

const Tables = () => (
  <MaterialThemeProvider>
    <div>
      <h1>Tables</h1>
      <h2>Regular Table</h2>
      <Table
        fields={fields}
        data={data}
        header="Table header"
      />
      <h2>Fullwidth table</h2>
      <Table
        fullWidth
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
    </div>
  </MaterialThemeProvider>
);

export default Tables;
