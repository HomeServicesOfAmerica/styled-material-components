import styled from 'styled-components';

const getThumbColor = (props) => {
  const { disabled, theme: { slider: { colors } } } = props;
  if (disabled) return colors.disabled;
  return props.atMin ? colors.pageColor : colors.main;
};

const getThumbSize = (props) => {
  if (props.dragging) return props.theme.slider.sizes.thumbClicked;
  if (props.disabled) return props.theme.slider.sizes.thumbDisabled;
  return props.theme.slider.sizes.thumb;
};

const getThumbBorderColor = (props) => {
  const { atMin, theme: { slider: { colors } } } = props;
  return atMin ? colors.track : getThumbColor(props);
};

const getThumbBorderSize = (props) => {
  if (props.disabled) return 0;
  return props.theme.slider.sizes.thumbBorder;
};

const Thumb = styled.div`
  height: ${getThumbSize}px;
  width: ${getThumbSize}px;
  border: ${getThumbBorderSize}px solid ${getThumbBorderColor};
  transition: all ${props => props.theme.slider.transitions.main};
  background: ${getThumbColor};
  border-radius: 50%;
  outline: none;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Thumb;
