import React from 'react';
import styled from 'styled-components';
import TextField from '../TextField';
import { SearchIcon } from '../../icons';

const SearchComponent = ({ className, onSearch }) => (
  <div className={`smc-search-container ${className}`}>
    <div className={`smc-search-icon-container`}>
      <SearchIcon fill='black' />
    </div>
    <TextField
      type='search'
      hintText={'Search Term'}
      fullWidth
      onChange={onSearch}
    />
  </div>
);

const Search = styled(SearchComponent) `
  padding: 25px 30px 20px 30px;
  width: 100%;
  margin: auto;
  display: inline-flex;
  background-color: white;
  box-sizing: border-box;
  position: relative;

  ${TextField} {
    margin: auto;
    margin-left: 15px;
    height: 28px;
    border-bottom: none;
    position: relative;
  }

  ${SearchIcon} {
    position: relative;
    bottom: 0px;
    margin: auto;
    height: 28px;
  }
`;

export default Search;
