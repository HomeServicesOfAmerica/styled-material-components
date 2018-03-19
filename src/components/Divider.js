import styled from 'styled-components';

export const Divider = styled.hr.attrs({
  'data-smc': 'Divider',
})`
  border: none;
  background-color: rgba(0, 0, 0, 0.12);
  height: 1px;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 0px;
  margin-left: ${({ inset }) => {
    let realInset = inset;
    if (typeof realInset === 'number') realInset = `${inset}px`;
    if (!realInset) return '0px';
    return typeof realInset === 'string' ? realInset : '16px';
  }};
  `;
