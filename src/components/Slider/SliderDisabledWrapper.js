import React from 'react';
import styled from 'styled-components';

const SliderDisabledWrapperComponent = props => (
  <div className={`${props.className} smc-slider-disabled-wrapper`}>
    {props.children}
  </div>
);

const getSliderDisabledWrapperSize = props => {
  const {
    disabled,
    theme: {
      slider: { sizes },
    },
  } = props;
  if (disabled) return sizes.thumbDisabled + sizes.thumbDisabledBorder;
  return 0;
};

const SliderDisabledWrapper = styled(SliderDisabledWrapperComponent)`
  height: ${getSliderDisabledWrapperSize}px;
  width: ${getSliderDisabledWrapperSize}px;
  transition: all ${props => props.theme.slider.transitions.main};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.slider.colors.pageColor};
  border-radius: 50%;
  position: absolute;
`;

export default SliderDisabledWrapper;
