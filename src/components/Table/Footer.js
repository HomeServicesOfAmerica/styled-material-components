import React, { Fragment, PureComponent } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { Icon } from '../../icons';
import { Menu } from '../Menu';

const FooterIcon = Icon.extend.attrs({
  cursor: 'pointer',
  fill: 'rgba(0, 0, 0, .54)',
}) ``;

const StandAloneMenu = Menu.extend`
  position: absolute;
`;


const PaginationButton = Button.extend`
  svg {
    ${props => props.disabled && `fill: #eee`};
  }
  height: 24px;
  width: 24px;
  padding: 0px;
  min-width: 24px;
  margin-left: 24px;
`;

/*
 * TODO Use real menu to make rows per page editable
 */
class FooterComponent extends PureComponent {
  state = {
    menuOpen: false,
    // why is this in state?
    // because it changes and we want a reference of the first value, rather than the change
    rowsPerPage: this.props.rowsPerPage,
  };

  componentWillReceiveProps(nextProps) {
    // go back a page if all the items can be contained.
    if (Math.ceil(nextProps.totalDataPoints / nextProps.rowsPerPage) < nextProps.currentPage) {
      nextProps.handleBackwardsPagination();
    }
  }

  // rather than on render
  rowSelection = this.props.rowsDropDown ?
    this.props.rowsDropDown.map(
      item => (
        { text: item, onClick: () => this.handleSelect(item) })
    ) : [
      {
        text: this.state.rowsPerPage,
        onClick: () => this.handleSelect(this.state.rowsPerPage),
      },
      {
        text: this.state.rowsPerPage * 3,
        onClick: () => this.handleSelect(this.state.rowsPerPage * 3),
      }, // Fibonacci?
      {
        text: this.state.rowsPerPage * 5,
        onClick: () => this.handleSelect(this.state.rowsPerPage * 5),
      },
      {
        text: this.state.rowsPerPage * 8,
        onClick: () => this.handleSelect(this.state.rowsPerPage * 8),
      },
    ]


  handleClick = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  handleSelect = (selectedItem) => {
    this.props.handleRowsPerPageChange(selectedItem);
    this.setState({ menuOpen: false });
  };

  handleClose = () => {
    this.setState({ menuOpen: false });
  };


  render() {
    const {
      className,
      currentPage,
      rowsPerPage,
      totalDataPoints,
      handleBackwardsPagination,
      handleForwardPagination,
    } = this.props;

    const onFirstPage = currentPage === 1;
    const totalPages = Math.ceil(totalDataPoints / rowsPerPage);
    const onLastPage = currentPage === totalPages;
    const lastValueFittingOnPage = (currentPage) * rowsPerPage;
    const firstSeen = (lastValueFittingOnPage - rowsPerPage) + 1;
    const lastSeen = onLastPage ? totalDataPoints : lastValueFittingOnPage;
    return (
      <div className={`smc-table-footer ${className}`}>
        {this.rowSelection.length > 0 &&
          <Fragment>
            Rows per page:
            <StandAloneMenu
              open={this.state.menuOpen}
              menuItems={this.rowSelection}
            />
            <div onClick={this.handleClick} className="rowsPerPage">
              {`${rowsPerPage}`}
            </div>
            <FooterIcon
              onClick={this.handleClick}
              icon="arrow_drop_down"
            />
          </Fragment>
        }
        <div className="current-page">
          {`${firstSeen}-${lastSeen} of ${totalDataPoints}`}
        </div>
        <PaginationButton
          onClick={handleBackwardsPagination}
          disabled={onFirstPage}
        >
          <FooterIcon icon="keyboard_arrow_left" />
        </PaginationButton>
        <PaginationButton
          onClick={handleForwardPagination}
          disabled={onLastPage}
        >
          <FooterIcon icon="keyboard_arrow_right" />
        </PaginationButton>
      </div>
    );
  }
}

const Footer = styled(FooterComponent) `
  height: 48px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 12px;
  color: rgba(0, 0, 0, .54);
  padding-right: 14px;

  >.current-page {
    margin-right: 8px;
    margin-left: 32px;
  }

  >.rowsPerPage {
    cursor: pointer;
    width: 40px;
    text-align: right;
  }
`;

export default Footer;
