import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { Icon } from '../../icons/icons';

const FooterIcon = Icon.extend.attrs({
  fill: 'rgba(0, 0, 0, .54)',
})``;

const PaginationButton = Button.extend`
  height: 24px;
  width: 24px;
  padding: 0px;
  min-width: 24px;
  margin-left: 24px;
`;

/*
 * TODO Use real menu to make rows per page editable
 */
const FooterComponent = ({
  className,
  currentPage,
  rowsPerPage,
  totalDataPoints,
  handleBackwardsPagination,
  handleForwardPagination,
}) => {
  const onFirstPage = currentPage === 1;
  const totalPages = Math.ceil(totalDataPoints / rowsPerPage);
  const onLastPage = currentPage === totalPages;
  const lastValueFittingOnPage = (currentPage) * rowsPerPage;
  const firstSeen = (lastValueFittingOnPage - rowsPerPage) + 1;
  const lastSeen = onLastPage ? totalDataPoints : lastValueFittingOnPage;
  return (
    <div className={`smc-table-footer ${className}`}>
      Rows per page:
      <div className="rowsPerPage">
        {`${rowsPerPage}`}
      </div>
      <FooterIcon icon="arrow_drop_down" />
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
};

const Footer = styled(FooterComponent)`
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
    width: 40px;
    text-align: right;
  }
`;

export default Footer;
