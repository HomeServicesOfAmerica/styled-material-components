import React, { Component } from 'react';
import styled from 'styled-components';
import Row from './Row';
import Datum from './Datum';
import Title from './Title';
import Header from './Header';

/*
 * The user of the table is responsible for passing in a unique key for each
 * object in this.props.data
 *
 *
 * TODO:
 * - footer
 * - row hover
 * - row selection
 * - enable column sorting
 * - column name hover
 * - long header titles
 * - inline text editing
 * - inline menus
 * - alternate headers
 */

class Table extends Component {
  render() {
    return (
      <div className={`smc-table-wrapper ${this.props.className}`}>
        {this.props.header && <Header>{this.props.header}</Header>}
        <table className="smc-table-table">
          <thead className="smc-table-head">
            <Row header>
              {this.props.fields.map(({ label, numerical, key }, i) => (
                <Title
                  key={label}
                  column={key}
                  numerical={numerical}
                  first={i === 0}
                  last={i === this.props.fields.length - 1}
                  >
                  {label}
                </Title>
              ))}
            </Row>
          </thead>
          <tbody>
            {this.props.data.map(datum => (
              <Row key={`row_${datum.key}`}>
                {this.props.fields.map(({ key, numerical }, i) => (
                  <Datum
                    key={`{${datum.key}_${key}}`}
                    column={key}
                    numerical={numerical}
                    first={i === 0}
                    last={i === this.props.fields.length - 1}
                    >
                    {datum[key]}
                  </Datum>
                ))}
              </Row>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default styled(Table)`
  ${props => props.fullWidth ? 'width: 100%' : ''};

  > .smc-table-table {
    ${props => props.fullWidth ? 'width: 100%' : ''};
    border-collapse:collapse;
    border-spacing: 40px;
  }
`;
