import React, { Component } from 'react';
import styled from 'styled-components';
import Row from './Row';
import Datum from './Datum';
import Title from './Title';
import Header from './Header';
import Footer from './Footer';

/*
 * The user of the table is responsible for passing in a unique key for each
 * object in props.data
 *
 *
 * TODO:
 * - row hover
 * - row selection
 * - enable column sorting
 * - column name hover
 * - long header titles
 * - inline text editing
 * - inline menus
 * - alternate headers
 */

const incrementCurrentPage = ({ currentPage }) => ({ currentPage: currentPage + 1 });
const decrementCurrentPage = ({ currentPage }) => ({ currentPage: currentPage - 1 });

class Table extends Component {
  state = {
    currentPage: this.props.currentPage || 1,
  }
  rowsPerPage = this.props.rowsPerPage || 10;

  handleBackwardsPagination = () => {
    if (this.props.handleBackwardsPagination) {
      this.props.handleBackwardsPagination();
    }
    this.setState(decrementCurrentPage);
  }

  handleForwardPagination = () => {
    if (this.props.handleForwardPagination) {
      this.props.handleForwardPagination();
    }
    this.setState(incrementCurrentPage);
  }

  render() {
    const totalDataPoints = this.props.totalDataPoints || this.props.data.length;
    const showFooter = totalDataPoints > this.rowsPerPage;
    const currentPage = this.props.currentPage || this.state.currentPage;
    const fakingPagination = totalDataPoints > this.props.data.length;
    const showAllData = fakingPagination || (totalDataPoints <= this.rowsPerPage);
    const rowsToShow = showAllData
      ? this.props.data
      : this.props.data.slice((currentPage - 1) * this.rowsPerPage, currentPage * this.rowsPerPage);
    let extraRows = 0;
    if (!showAllData || fakingPagination) {
      extraRows = Math.max(0, this.rowsPerPage - rowsToShow.length);
    }
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
            {
              (
                (fakingPagination || (totalDataPoints <= this.rowsPerPage))
                  ? this.props.data
                  : this.props.data.slice(
                    (currentPage - 1) * this.rowsPerPage, currentPage * this.rowsPerPage
                  )
              )
                .map(datum => (
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
                ))
            }
            {Array(extraRows).fill('').map((val, j) => (
              // eslint-disable-next-line react/no-array-index-key
              <Row key={`faux-data-${j}`}>
                {this.props.fields.map(({ key, numerical }, i) => (
                  <Datum
                    key={`faux-data_${key}}`}
                    column={key}
                    numerical={numerical}
                    first={i === 0}
                    last={i === this.props.fields.length - 1}
                  />
                ))}
              </Row>
            ))}
          </tbody>
        </table>
        {showFooter && (
          <Footer
            currentPage={currentPage}
            rowsPerPage={this.rowsPerPage}
            totalDataPoints={totalDataPoints}
            handleBackwardsPagination={this.handleBackwardsPagination}
            handleForwardPagination={this.handleForwardPagination}
          />
        )}
      </div>
    );
  }
}


export default styled(Table)`
  > .smc-table-table {
    width: 100%;
    border-collapse:collapse;
    border-spacing: 40px;
  }
`;
