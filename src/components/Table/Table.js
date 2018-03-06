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
import Checkbox from '../Checkbox';
import { ArrowUpwardIcon } from '../../icons/icons';

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
      selectedAllActive: false,
      selectedItems: {},
      sortedBy: '',
      descending: false,
      mutatedData: [...this.props.data],
      currentPage: this.props.currentPage || 1,
    };
    this.rowsPerPage = this.props.rowsPerPage || 10;
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
    if (fakingPagination || (totalDataPoints <= this.rowsPerPage)) {
      data = this.state.mutatedData;
    } else {
      data = this.state.mutatedData.slice(
        (currentPage - 1) * this.rowsPerPage, currentPage * this.rowsPerPage
      );
    }
    const itemsToSet = {};
    for (let i = 0; i < data.length; i += 1) {
      const item = data[i];
      !this.state.selectedItems[item.key] && this.props.onCheck && this.props.onCheck(item);
      itemsToSet[item.key] = true;
    }
    this.setState({
      selectedItems: itemsToSet,
      selectedAllActive: true,
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
    const selectedAll =
      Object.keys(this.state.mutatedData).length === Object.keys(itemsToSet).length;
    this.setState({
      selectedItems: itemsToSet,
      selectedAllActive: selectedAll,
    });
  }


  updateWithNewProps = (input) => {
    const newData = [...input];
    let mutatedData;
    const currentSort = this.state.sortedBy;
    // if we have a key to sortByKey, do it:
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
    if (fakingPagination || (totalDataPoints <= this.rowsPerPage)) {
      data = this.state.mutatedData;
    } else {
      data = this.state.mutatedData.slice(
        (currentPage - 1) * this.rowsPerPage, currentPage * this.rowsPerPage
      );
    }
    const itemsToSet = {};
    for (let i = 0; i < data.length; i += 1) {
      const item = data[i];
      this.props.onUncheck && this.props.onUncheck(item);
      delete itemsToSet[item.key];
    }
    this.setState({
      selectedItems: itemsToSet,
      selectedAllActive: false,
    });
  }

  sortByKey(key) {
    let shouldDescend;
    if (key === this.state.sortedBy) {
      // flip descending or ascending
      if (this.state.descending) {
        shouldDescend = false;
      } else {
        shouldDescend = true;
      }
    } else {
      // default, new sort to descending
      shouldDescend = false;
    }
    // init the sorter
    const sorter = naturalSort({ desc: shouldDescend });

    // sort by key!
    const sorted = this.state.mutatedData.sort(
      (a, b) => sorter(a[key], b[key])
    );
    this.setState({ descending: shouldDescend, mutatedData: sorted, sortedBy: key });
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

  render() {
    const totalDataPoints = this.props.totalDataPoints || this.state.mutatedData.length;
    const showFooter = totalDataPoints > this.rowsPerPage;
    const currentPage = this.props.currentPage || this.state.currentPage;
    const fakingPagination = totalDataPoints > this.state.mutatedData.length;
    const showAllData = fakingPagination || (totalDataPoints <= this.rowsPerPage);
    const rowsToShow = showAllData
      ? this.state.mutatedData
      : this.state.mutatedData.slice(
        (currentPage - 1) * this.rowsPerPage, currentPage * this.rowsPerPage
      );
    let extraRows = 0;
    if (!showAllData || fakingPagination) {
      extraRows = Math.max(0, this.rowsPerPage - rowsToShow.length);
    }
    return (
      <div className={`smc-table-wrapper ${this.props.className}`}>
        {this.props.header && <Header>{this.props.header}</Header>}
        {this.props.searchable && <div className="smc-table-search"><Search onSearch={this.props.onSearch} /></div>}
        <table className="smc-table-table">
          <thead className="smc-table-head">
            <Row header>
              {this.props.hasCheckboxes && <th>
                <Checkbox
                  disabled={this.props.rowsPerPage}
                  checked={this.state.selectedAllActive}
                  onChange={this.state.selectedAllActive ? this.unselectAll : this.selectAll}
                />
              </th>}
              {this.props.fields.map(({ label, numerical, key, sortable }, i) => (
                <Title
                  sortedBy={this.state.sortedBy === key}
                  key={label}
                  column={key}
                  numerical={numerical}
                  first={i === 0}
                  last={i === this.props.fields.length - 1}
                >
                  <div className='sortButtonContainer'>
                    {sortable && <ArrowUpwardIcon
                      className={this.state.sortedBy === key && !this.state.descending ? 'sortButton rotate' : 'sortButton'}
                      onClick={() => this.sortByKey(key)}
                    />}
                    {label}
                  </div>
                </Title>
              ))}
            </Row>
          </thead>
          <tbody>
            {
              (
                (fakingPagination || (totalDataPoints <= this.rowsPerPage))
                  ? this.state.mutatedData
                  : this.state.mutatedData.slice(
                    (currentPage - 1) * this.rowsPerPage, currentPage * this.rowsPerPage
                  )
              )
                .map(datum => (
                  <Row selected={Boolean(this.state.selectedItems[datum.key])} key={`row_${datum.key}`}>
                    {this.props.hasCheckboxes &&
                      <td>
                        <Checkbox
                          checked={Boolean(this.state.selectedItems[datum.key])}
                          onChange={() => this.toggleIndividualSelect(datum)}
                        />
                      </td>
                    }
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


export default styled(Table) `
  ${props => (props.fullWidth ? 'width: 100%' : '')};
  display: inline-block;
  overflow: hidden;
  background-color: #fff;
  border-radius: 3px;
  border-spacing: 0;
  border: 0px;

  > .smc-table-search {
    // not sure if we should include a border top, looks odd to me
    // thoughts?
    // border-top: 1px solid ${props => props.theme.textColors.secondary};
    border-bottom: 1px solid ${props => props.theme.textColors.secondary};
  }

  > .smc-table-header {
    padding: 0 14px;
  }

  > .smc-table-table {
    border-collapse: collapse;

    .sortButtonContainer {
      height: 15px;
      display: flex;
      justify-content: flex-start;
      
      > .sortButton {
        height: 15px;
        width: 15px;
        float: right;
        cursor: pointer;
        border-radius: 7.5px;
        display: block;
        margin-right: 16px;
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
    }

    tr {
      border: 0px;
      border-bottom: 1px solid ${props => props.theme.textColors.secondary};
    }
    ${props => (props.fullWidth ? 'width: 100%' : 'width: auto')};
    border-spacing: 0;
  }
`;
