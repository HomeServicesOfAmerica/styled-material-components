import React from 'react';
import { Row, Column, ThemeProvider } from '../src';

const BlueColumn = Column.extend`
  background-color: teal;
  height: 24px;
  color: white;
  align-items: center;
  justify-content: center;
`;

const CustomRow = Row.extend`
  margin-top: 0;
`;

export default () => (
  <ThemeProvider>
    <h1>FlexGrid Layouts</h1>
    <section>
      <h2>Responsive</h2>
      <Row>
        <BlueColumn
          xs={{ size: 12 }}
          sm={{ size: 6 }}
          md={{ size: 3 }}
          lg={{ size: 4 }}>
              1
        </BlueColumn>
        <BlueColumn
          xs={{ size: 12 }}
          sm={{ size: 6 }}
          md={{ size: 3 }}
          lg={{ size: 4 }}>
              2
        </BlueColumn>
        <BlueColumn
          xs={{ size: 12 }}
          sm={{ size: 12 }}
          md={{ size: 6 }}
          lg={{ size: 4 }}>
              3
        </BlueColumn>
      </Row>
      <CustomRow>
        <BlueColumn
          xs={{ size: 12 }}
          sm={{ size: 12 }}
          md={{ size: 2 }}
          lg={{ size: 3 }}>
              4
        </BlueColumn>
        <BlueColumn
          xs={{ size: 12 }}
          sm={{ size: 6 }}
          md={{ size: 2 }}
          lg={{ size: 3 }}>
              5
        </BlueColumn>
        <BlueColumn
          xs={{ size: 12 }}
          sm={{ size: 6 }}
          md={{ size: 8 }}
          lg={{ size: 6 }}>
              6
        </BlueColumn>
      </CustomRow>
      <CustomRow>
        <BlueColumn
          xs={{ size: 12 }}
          sm={{ size: 4 }}
          md={{ size: 3 }}
          lg={{ size: 4 }}>
              7
        </BlueColumn>
        <BlueColumn
          xs={{ size: 12 }}
          sm={{ size: 4 }}
          md={{ size: 6 }}
          lg={{ size: 4 }}>
              8
        </BlueColumn>
        <BlueColumn
          xs={{ size: 12 }}
          sm={{ size: 4 }}
          md={{ size: 3 }}
          lg={{ size: 4 }}>
              9
        </BlueColumn>
      </CustomRow>
      <CustomRow>
        <BlueColumn
          xs={{ size: 12 }}
          sm={{ size: 12 }}
          md={{ size: 6 }}
          lg={{ size: 2 }}>
              10
        </BlueColumn>
        <BlueColumn
          xs={{ size: 12 }}
          sm={{ size: 6 }}
          md={{ size: 2 }}
          lg={{ size: 4 }}>
              11
        </BlueColumn>
        <BlueColumn
          xs={{ size: 12 }}
          sm={{ size: 6 }}
          md={{ size: 4 }}
          lg={{ size: 6 }}>
              12
        </BlueColumn>
      </CustomRow>
    </section>
    <section>
      <h2>Responsive Ordering</h2>
      <CustomRow>
        <BlueColumn
          xs={{ size: 12, order: 1 }}
          sm={{ size: 6, order: 0 }}
          md={{ size: 3, order: 0 }}
          lg={{ size: 4, order: 0 }}>
              1
        </BlueColumn>
        <BlueColumn
          xs={{ size: 12, order: 0 }}
          sm={{ size: 6, order: 1 }}
          md={{ size: 3, order: 1 }}
          lg={{ size: 4, order: 1 }}>
              2
        </BlueColumn>
        <BlueColumn
          xs={{ size: 12, order: 2 }}
          sm={{ size: 12, order: 0 }}
          md={{ size: 6, order: 0 }}
          lg={{ size: 4, order: 0 }}>
              3
        </BlueColumn>
      </CustomRow>
      <CustomRow>
        <BlueColumn
          xs={{ size: 12, order: 2 }}
          sm={{ size: 12, order: 1 }}
          md={{ size: 2, order: 0 }}
          lg={{ size: 3, order: 0 }}>
              4
        </BlueColumn>
        <BlueColumn
          xs={{ size: 12, order: 1 }}
          sm={{ size: 6, order: 0 }}
          md={{ size: 2, order: 1 }}
          lg={{ size: 3, order: 1 }}>
              5
        </BlueColumn>
        <BlueColumn
          xs={{ size: 12, order: 0 }}
          sm={{ size: 6, order: 2 }}
          md={{ size: 8, order: 2 }}
          lg={{ size: 6, order: 2 }}>
              6
        </BlueColumn>
      </CustomRow>
      <CustomRow>
        <BlueColumn
          xs={{ size: 12, order: 2 }}
          sm={{ size: 4, order: 1 }}
          md={{ size: 3, order: 0 }}
          lg={{ size: 4, order: 0 }}>
              7
        </BlueColumn>
        <BlueColumn
          xs={{ size: 12, order: 1 }}
          sm={{ size: 4, order: 0 }}
          md={{ size: 6, order: 1 }}
          lg={{ size: 4, order: 1 }}>
              8
        </BlueColumn>
        <BlueColumn
          xs={{ size: 12, order: 0 }}
          sm={{ size: 4, order: 2 }}
          md={{ size: 3, order: 2 }}
          lg={{ size: 4, order: 2 }}>
              9
        </BlueColumn>
      </CustomRow>
      <CustomRow>
        <BlueColumn
          xs={{ size: 12 }}
          sm={{ size: 12 }}
          md={{ size: 6 }}
          lg={{ size: 2, order: 2 }}>
              10
        </BlueColumn>
        <BlueColumn
          xs={{ size: 12 }}
          sm={{ size: 6 }}
          md={{ size: 2 }}
          lg={{ size: 4, order: 1 }}>
              11
        </BlueColumn>
        <BlueColumn
          xs={{ size: 12 }}
          sm={{ size: 6 }}
          md={{ size: 4 }}
          lg={{ size: 6, order: 1 }}>
              12
        </BlueColumn>
      </CustomRow>
    </section>
    <section>
      <h2>Offsets</h2>
      <CustomRow>
        <BlueColumn
          xs={{ size: 12, offset: 0 }}
          sm={{ size: 6, offset: 6 }}
          md={{ size: 3, offset: 9 }}
          lg={{ size: 4, offset: 8 }}>
            1
        </BlueColumn>
      </CustomRow>
      <CustomRow>
        <BlueColumn
          xs={{ size: 12, offset: 0 }}
          sm={{ size: 5, offset: 2 }}
          md={{ size: 4, offset: 4 }}
          lg={{ size: 3, offset: 6 }}>
            2
        </BlueColumn>
        <BlueColumn
          xs={{ size: 12 }}
          sm={{ size: 5 }}
          md={{ size: 4 }}
          lg={{ size: 3 }}>
            3
        </BlueColumn>
      </CustomRow>
      <CustomRow horizontal="right">
        <BlueColumn
          xs={{ size: 12, offset: 0 }}
          sm={{ size: 6, offset: 6 }}
          md={{ size: 3, offset: 9 }}
          lg={{ size: 4, offset: 8 }}>
              4
        </BlueColumn>
      </CustomRow>
      <CustomRow>
        <BlueColumn
          xs={{ size: 12, offset: 0 }}
          sm={{ size: 5, offset: 2 }}
          md={{ size: 4, offset: 4 }}
          lg={{ size: 3, offset: 6 }}>
              5
        </BlueColumn>
        <BlueColumn
          xs={{ size: 12 }}
          sm={{ size: 5 }}
          md={{ size: 4 }}
          lg={{ size: 3 }}>
              6
        </BlueColumn>
      </CustomRow>
    </section>
  </ThemeProvider>
);
