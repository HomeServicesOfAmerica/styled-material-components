/**
 * @file Column
 * @author Brad Decker <bhdecker84@gmail.com|brad@merlinlabs.com>
 * @description Defines a flex grid column that responds to the size
 * of the screen to grow, shrink, reorder as described by the end
 * user via size props.
 */
import React from 'react';
import styled, { css } from 'styled-components';
import { compose } from 'recompose';
import { withScreenSize } from '../../contexts/ScreenSizeContext';
import { withRowState } from './Row';

/**
 * getResponsiveProp
 *
 * Returns the appropriate column prop based on the current screenSize
 * will return an exact match first, then will evaluate the next lowest
 * screen size to see if that prop was provided, finally it looks for
 * the default screenSize based on the theme. If a key is provided this
 * method will return that subkey, otherwise it returns the whole object.
 * @param {Object} props           Props provided by the user
 * @param {Object} layout          theme layout from the sc theme
 * @param {String} screenSize      current screen size provided by context
 * @param {String} lowerScreenSize Screen size one lower than the current
 * @param {String} key             The subkey to return from the prop object
 */
const getResponsiveProp = (props, layout, screenSize, lowerScreenSize, key) => {
  const responsiveProp = props[screenSize]
    || props[lowerScreenSize]
    || props[layout.defaultScreenSize];
  if (!responsiveProp) return null;
  if (key) return responsiveProp[key];
  return responsiveProp;
};

/**
 * computePercentage
 *
 * Returns a string representing the percentage of baseSize that size fulfills
 * @param {Integer} size      size that the current column should take up
 * @param {Integer} baseSize  the baseSize of the theme
 */
const computePercentage = (size, baseSize) => `${(size / baseSize) * 100}%`;

/**
 * calcPlus
 *
 * generates a 'calc' attribute with all provided arguments as addends
 * @param {string}        primaryAddend  We require a starting addend
 * @param {Array<String>} addends        Any number of additional addends
 */
const calcPlus = (primaryAddend, ...addends) => {
  if (addends.length === 0) return primaryAddend;
  let str = `calc(${primaryAddend} + `;
  addends.forEach((addend, i) => {
    str += addend;
    if (i !== (addends.length - 1)) str += ' + ';
    else str += ')';
  });
  return str;
};

/**
 * calcMinus
 *
 * generates a 'calc' attribute with a minuend and all provided arguments
 * as subtrahend
 * @param {string}        minuend     The starting number to subtract from
 * @param {Array<String>} subtrahend  Any number of subtrahends
 */
const calcMinus = (minuend, ...subtrahend) => {
  if (subtrahend.length === 0) return minuend;
  let str = `calc(${minuend} - `;
  subtrahend.forEach((sub, i) => {
    str += sub;
    if (i !== (subtrahend.length - 1)) str += ' - ';
    else str += ')';
  });
  return str;
};

/**
 * offsetMixin
 *
 * This mixin generates the appropriate margin to add an offset to a column
 * within a row. It relies on the row prop from the Row context provider.
 * @param {object}  props                 Object of props for the component
 * @param {string}  props.screenSize      The current active screensize
 * @param {string}  props.lowerScreenSize The next lowest screensize
 * @param {boolean} props.noGutters       Boolean indication to render gutters
 * @param {object}  props.theme.layout    The layout theme options
 * @param {object}  props.row             Props provided by the parent row context
 */
const offsetMixin = ({
  screenSize,
  lowerScreenSize,
  noGutters,
  theme: { layout },
  row,
  ...props
}) => {
  const offset = getResponsiveProp(props, layout, screenSize, lowerScreenSize, 'offset');
  if (!offset) return '';
  const margin = calcPlus(
    computePercentage(offset, layout.baseGridSize),
    noGutters ? '0px' : layout.gutterSize
  );
  return css`
    ${row && row.horizontal === 'right' ? 'margin-right' : 'margin-left'}: ${margin};
  `;
};

/**
 * orderMixin
 *
 * This mixin generates the flex order for the column
 * @param {object}  props                 Object of props for the component
 * @param {string}  props.screenSize      The current active screensize
 * @param {string}  props.lowerScreenSize The next lowest screensize
 * @param {object}  props.theme.layout    The layout theme options
 */
const orderMixin = ({ screenSize, lowerScreenSize, theme: { layout }, ...props }) => {
  const order = getResponsiveProp(props, layout, screenSize, lowerScreenSize, 'order');
  if (!order) return ``;
  return css`
    order: ${order};
  `;
};

/**
 * flexSizeMixin
 *
 * Styled mixin to generate the appropriate max-with and flex-basis for
 * this column based on screensize and provided props.
 * @param {object}  props                 Object of props for the component
 * @param {integer} props.size            static size for this column
 * @param {string}  props.screenSize      The current active screensize
 * @param {string}  props.lowerScreenSize The next lowest screensize
 * @param {boolean} props.noGutters       Boolean indication to render gutters
 * @param {object}  props.theme.layout    The layout theme options
 */
const flexSizeMixin = ({
  size,
  noGutters,
  screenSize,
  lowerScreenSize,
  theme: { layout },
  ...props
}) => {
  const targetSize = size || getResponsiveProp(
    props,
    layout,
    screenSize,
    lowerScreenSize,
    'size'
  );
  if (!targetSize) return '';
  const value = calcMinus(
    computePercentage(targetSize, layout.baseGridSize),
    noGutters ? '0px' : layout.gutterSize,
    noGutters ? '0px' : layout.gutterSize,
  );
  return css `
    flex-basis: ${value};
    max-width: ${value};
  `;
};

/**
 * SizedColumn
 *
 * styled component used internally only. The reason this
 * exists is because the ColumnComponent needs to extend the
 * props that the Column has access to. You can still override
 * any styled on this component by importing Column and .extend'ing
 * it. The reason for this is because the className generated will
 * be added at the END of the SizedColumn which will give it priority
 * over the styled generated by Styled Components for this component
 */
const SizedColumn = styled.div`
  display: flex;
  flex-direction: column;
  ${props => (props.noGutters ? '' : `padding: 0 ${props.theme.layout.gutterSize}`)};
  flex: 0 0 auto;
  max-width: none;
  order: 0;
  ${offsetMixin}
  ${flexSizeMixin}
  ${orderMixin}
`;

/**
 * ColumnComponent
 *
 * This component utilizes the Row context consumer and the ScreenSize
 * context consumer to provide additional props to the SizedColumn SMC
 * component. Note that while it APPEARS that there are two components
 * here only one will actually be created. Column is a blank slate
 * styled component to be used for .extend'ing and for targeting in other
 * components styles. The class name generated for Column is attached onto
 * SizedColumn. When you pass a className into a styled component it gets
 * added to the end of the generated classNames for that component. Because
 * order of classes matters in css this className takes precedent.
 */
const enhancer = compose(
  withScreenSize,
  withRowState,
);

const ColumnComponent = enhancer(
  ({ className, children, ...props }, { screenSizeState, rowState }) => (
    <SizedColumn
      {...props}
      data-smc="Column"
      row={rowState}
      screenSize={screenSizeState.screenSize}
      lowerScreenSize={screenSizeState.lowerScreenSize}
      className={className}>
      {children}
    </SizedColumn>
  )
);

export const Column = styled(ColumnComponent)`
`;
