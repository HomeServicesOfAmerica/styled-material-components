import React, { PureComponent } from 'react';
import styled from 'styled-components';
import isEqual from 'lodash.isequal';

import Row from './Row';
import Datum from './Datum';
import Title from './Title';
import Header from './Header';
import Footer from './Footer';
import naturalSort from './naturalSort';
import Search from './Search';
import { Checkbox } from '../Checkbox';
import { ArrowUpwardIcon } from '../../icons';

/*
 * The user of the table is responsible for passing in a unique key for each
 * object in props.data
 *
 *
 * TODO:
 * - column name hover
 * - long header titles
 * - inline text editing
 * - inline menus
 * - alternate headers
 */

const TitleSortContainer = styled.div`
  height: 15px;
  display: flex;
  justify-content: ${({ numerical }) => (numerical ? 'flex-end' : 'flex-start')};

  > .sortButton {
    vertical-align: center;
    height: 15px;
    width: 15px;
    cursor: pointer;
    border-radius: 7.5px;
    margin-right: 5px;
    fill: ${props => props.theme.textColors.secondary};
    transform-origin: center;
    transition: 0.3s;
  }

  > .sortButton:hover {
    background-color: rgba(0, 0, 0, .04);
  }

  > .rotate {
    transform: rotate(180deg);
  }
`;

const incrementCurrentPage = ({ currentPage }) => ({
  currentPage: currentPage + 1,
});
const decrementCurrentPage = ({ currentPage }) => ({
  currentPage: currentPage - 1,
});

class Table extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: {},
      mutatedData: [...this.props.data],
      sortedBy: null,
      descending: false,
      currentPage: this.props.currentPage || 1,
      rowsPerPage: this.props.rowsPerPage || 10,
    };
  }

  componentWillReceiveProps(nextProps) {
    // added in some super cool checks
    // first we see if the ref is different
    // then we see if the length is different
    // then we deep diff the two

    // this is to catch weird usage of the comp
    // ie: pushing or popping from an array

    if (
      this.props.data !== nextProps.data
      ||
      this.props.data.length !== nextProps.data.length
      ||
      !isEqual(this.props.data, nextProps.data)
    ) {
      this.updateWithNewProps(nextProps.data);
    }
  }

  selectAll = () => {
    const totalDataPoints = this.props.totalDataPoints || this.state.mutatedData.length;
    const fakingPagination = totalDataPoints > this.state.mutatedData.length;
    const currentPage = this.props.currentPage || this.state.currentPage;
    let data;
    if (fakingPagination || (totalDataPoints <= this.state.rowsPerPage)) {
      data = this.state.mutatedData;
    } else {
      data = this.state.mutatedData.slice(
        (currentPage - 1) * this.state.rowsPerPage, currentPage * this.state.rowsPerPage
      );
    }
    const itemsToSet = { ...this.state.selectedItems };
    for (let i = 0; i < data.length; i += 1) {
      const item = data[i];
      !this.state.selectedItems[item.key] && this.props.onCheck && this.props.onCheck(item);
      itemsToSet[item.key] = true;
    }
    this.setState({
      selectedItems: itemsToSet,
    });
  }

  toggleIndividualSelect = (datum) => {
    const itemsToSet = { ...this.state.selectedItems };
    if (itemsToSet[datum.key]) {
      this.props.onUncheck(datum);
      delete itemsToSet[datum.key];
    } else {
      this.props.onCheck(datum);
      itemsToSet[datum.key] = true;
    }
    this.setState({
      selectedItems: itemsToSet,
    });
  }


  updateWithNewProps = (input) => {
    const newData = [...input];
    let mutatedData;
    const currentSort = this.state.sortedBy;
    // if we have a key to sortBy, do it:
    if (currentSort) {
      // grab descending from state, as it shouldn't have to change here
      const sorter = naturalSort({ desc: this.state.descending });
      // clone
      mutatedData = newData.sort(
        (a, b) => sorter(a[currentSort], b[currentSort])
      );
    } else {
      // else update with new data, unsorted
      mutatedData = newData;
    }
    this.setState({ mutatedData });
  };

  unselectAll = () => {
    // why loop through the object rather than
    // just setting it to {}

    // we need to call props.onUncheck for each!
    const totalDataPoints = this.props.totalDataPoints || this.state.mutatedData.length;
    const fakingPagination = totalDataPoints > this.state.mutatedData.length;
    const currentPage = this.props.currentPage || this.state.currentPage;
    let data;
    if (fakingPagination || (totalDataPoints <= this.state.rowsPerPage)) {
      data = this.state.mutatedData;
    } else {
      data = this.state.mutatedData.slice(
        (currentPage - 1) * this.state.rowsPerPage, currentPage * this.state.rowsPerPage
      );
    }
    const itemsToSet = { ...this.state.selectedItems };
    for (let i = 0; i < data.length; i += 1) {
      const item = data[i];
      this.props.onUncheck && this.props.onUncheck(item);
      delete itemsToSet[item.key];
    }
    this.setState({
      selectedItems: itemsToSet,
    });
  }

  sortBy = (key) => {
    let descending = this.state.descending;
    const mutatedData = [...this.state.mutatedData];

    if (key === this.state.sortedBy) {
      // flip descending or ascending
      if (this.state.descending) {
        descending = false;
      } else {
        descending = true;
      }
    } else {
      // default, new sort to descending
      descending = true;
    }

    // Run either custom or built in sorter
    if (this.props.onSort) {
      this.props.onSort(key);
    } else {
      const sorter = naturalSort({ desc: descending });
      mutatedData.sort(
        (a, b) => sorter(a[key], b[key])
      );
    }

    this.setState({ descending, mutatedData, sortedBy: key });
  }

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

  determineSelected = (superset, subset) => {
    if (subset.length === 0) {
      return false;
    }
    return subset.every(value => (superset.indexOf(value) >= 0));
  }

  changeRows = (rowsPerPage) => {
    this.props.onRowChange && this.props.onRowChange(rowsPerPage);
    this.setState({ rowsPerPage });
  }

  render() {
    const { hasCheckboxes, fields, rowsDropDown } = this.props;
    const { rowsPerPage, mutatedData, selectedItems } = this.state;
    const totalDataPoints = this.props.totalDataPoints || mutatedData.length;
    const currentPage = this.props.currentPage || this.state.currentPage;
    const fakingPagination = totalDataPoints > mutatedData.length;
    const showAllData = fakingPagination || (totalDataPoints <= rowsPerPage);
    const rowsToShow = showAllData
      ? mutatedData
      : mutatedData.slice(
        (currentPage - 1) * rowsPerPage, currentPage * rowsPerPage
      );
    let extraRows = 0;
    if (!showAllData || fakingPagination) {
      extraRows = Math.max(0, rowsPerPage - rowsToShow.length);
    }
    const sort = (this.props.sortedBy || this.state.sortedBy);
    const descending = (this.props.descending || this.state.descending);

    const currentSelectionKeys = Object.keys(selectedItems);
    const currentPageKeys = rowsToShow.map(item => item.key);
    const selectedAllActive = this.determineSelected(currentSelectionKeys, currentPageKeys);

    return (
      <div className={`smc-table-wrapper ${this.props.className}`}>
        {this.props.header && <Header>{this.props.header}</Header>}
        {this.props.onSearch && <div className="smc-table-search"><Search onSearch={this.props.onSearch} /></div>}
        <table className="smc-table-table">
          <thead className="smc-table-head">
            <Row header>
              {hasCheckboxes && <th onClick={selectedAllActive ? this.unselectAll : this.selectAll} className='smc-table-head-checkbox'>
                <Checkbox
                  checked={selectedAllActive}
                />
              </th>}
              {fields.map(({ label, numerical, key, sortable }, i) => (
                <Title
                  sortedBy={this.state.sortedBy === key}
                  key={label}
                  column={key}
                  numerical={numerical}
                  first={i === 0}
                  last={i === fields.length - 1}
                >
                  <TitleSortContainer numerical={numerical}>
                    {sortable && <ArrowUpwardIcon
                      className={
                        // sorry for this mess
                        sort === key
                              && descending ?
                          'sortButton rotate' : 'sortButton'
                      }
                      onClick={() => this.sortBy(key)}
                    />}
                    {label}
                  </TitleSortContainer>
                </Title>
              ))}
            </Row>
          </thead>
          <tbody>
            {
              (
                (fakingPagination || (totalDataPoints <= rowsPerPage))
                  ? mutatedData
                  : mutatedData.slice(
                    (currentPage - 1) * rowsPerPage, currentPage * rowsPerPage
                  )
              )
                .map(datum => (
                  <Row selected={Boolean(this.state.selectedItems[datum.key])} key={`row_${datum.key}`}>
                    {hasCheckboxes &&
                      <td>
                        <Checkbox
                          checked={Boolean(this.state.selectedItems[datum.key])}
                          onChange={() => this.toggleIndividualSelect(datum)}
                        />
                      </td>
                    }
                    {fields.map(({ key, numerical }, i) => (
                      <Datum
                        key={`{${datum.key}_${key}}`}
                        column={key}
                        numerical={numerical}
                        first={i === 0}
                        last={i === fields.length - 1}
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
                {fields.map(({ key, numerical }, i) => (
                  <Datum
                    key={`faux-data_${key}}`}
                    column={key}
                    numerical={numerical}
                    first={i === 0}
                    last={i === fields.length - 1}
                  />
                ))}
              </Row>
            ))}
          </tbody>
        </table>
        <Footer
          rowsDropDown={rowsDropDown}
          currentPage={currentPage}
          rowsPerPage={rowsPerPage}
          handleRowsPerPageChange={this.changeRows}
          totalDataPoints={totalDataPoints}
          handleBackwardsPagination={this.handleBackwardsPagination}
          handleForwardPagination={this.handleForwardPagination}
        />
      </div>
    );
  }
}


export default styled(Table) `
  ${props => (props.fullWidth ? 'width: 100%' : '')};
  display: inline-block;
  overflow: hidden;
  background-color: #fff;
  border-radius: 3px;
  border-spacing: 0;
  border: 0px;

  > .smc-table-search {
    border-bottom: 1px solid rgba(225, 225, 225, 1);
  }

  > .smc-table-header {
    padding: 0 14px;
  }

  > .smc-table-table {
    border-collapse: collapse;

    .smc-table-head-checkbox {
      padding-top: 6px;
      float: left;
    }

    tr {
      border: 0px;
      border-bottom: 1px solid rgba(225, 225, 225, 1);
    }

    ${props => (props.fullWidth ? 'width: 100%' : 'width: auto')};
    border-spacing: 0;
  }
`;
