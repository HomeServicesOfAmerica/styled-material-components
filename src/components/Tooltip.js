import React from 'react';
import styled from 'styled-components';
import { Portal } from './Portal';
import { Icon } from '../icons';

const MOBILE_MARGIN = 24;
const DESKTOP_MARGIN = 14;
const MOBILE_FONT_SIZE = 14;
const DESKTOP_FONT_SIZE = 10;
const MOBILE_SIDE_PADDING = 16;
const DESKTOP_SIDE_PADDING = 8;
const DESKTOP_MIN_HEIGHT = 22;
const MOBILE_MIN_HEIGHT = 32;
const DESKTOP_TOP_PADDING = (DESKTOP_MIN_HEIGHT - DESKTOP_FONT_SIZE) / 2;
const MOBILE_TOP_PADDING = (MOBILE_MIN_HEIGHT - MOBILE_FONT_SIZE) / 2;
const ROBOTO_RATIO = 0.51; // This is a guess

export const TooltipPortal = styled(Portal)`
  && {
    box-sizing: border-box;
    background: rgba(0, 0, 0, .9);
    left: ${props => props.left || 0}px;
    top: ${props => props.top || 0}px;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    min-height: ${props => (props.mobile ? MOBILE_MIN_HEIGHT : DESKTOP_MIN_HEIGHT)}px;
    color: white;
    font-size: ${props => (props.mobile ? MOBILE_FONT_SIZE : DESKTOP_FONT_SIZE)}px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
  }
`;

export const TooltipLink = styled.a.attrs({
  children: props => props.children,
})`
  display: inline-block;
  :hover {
    cursor: pointer;
  }
`;
export const TooltipContents = styled.div`
  width: ${({ contentWidth, childStringLength, mobile }) => {
    let contentSize = 30;
    if (typeof contentWidth === 'number') contentSize = contentWidth;
    else if (childStringLength !== null) {
      contentSize =
        (mobile ? MOBILE_FONT_SIZE : DESKTOP_FONT_SIZE)
        * childStringLength
        * ROBOTO_RATIO;
    }
    const paddingSize = 2 * (mobile ? MOBILE_SIDE_PADDING : DESKTOP_SIDE_PADDING);
    return `${contentSize - paddingSize}px`;
  }};
  padding: ${({ mobile }) => (
    mobile
      ? `${MOBILE_TOP_PADDING}px ${MOBILE_SIDE_PADDING}px`
      : `${DESKTOP_TOP_PADDING}px ${DESKTOP_SIDE_PADDING}px`
  )};
  display: flex;
  align-items: center;
  justify-content: center;
  `;

export const TooltipIcon = Icon.extend`
  fill: rgba(0, 0, 0, .54);
  `;

export class Tooltip extends React.Component {
  state = {
    portalContentsHeight: 0,
    portalContentsWidth: 0,
    linkBottom: 0,
    linkLeft: 0,
    linkWidth: 0,
    open: false,
    countedInitialClick: true,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.getTooltipLinkPosition);
    window.addEventListener('resize', this.getTooltipLinkPosition);
    window.addEventListener('resize', this.calculatePortalContents);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.getTooltipLinkPosition);
    window.removeEventListener('resize', this.getTooltipLinkPosition);
    window.removeEventListener('resize', this.calculatePortalContents);
  }

  getTooltipLink = (el) => {
    if (this.tooltipLink) return;
    this.tooltipLink = el;
    this.getTooltipLinkPosition();
  }

  getTooltipContents = (el) => {
    if (this.portalContents) return;
    this.portalContents = el;
    this.calculatePortalContents();
  }

  getTooltipLinkPosition = () => {
    if (!this.tooltipLink) return;
    const { pageYOffset, pageXOffset } = window;
    const { left, width, bottom } = this.tooltipLink.getBoundingClientRect();
    this.setState({
      linkBottom: bottom + pageYOffset,
      linkLeft: left + pageXOffset,
      linkWidth: width,
    });
  }

  calculatePortalContents = () => {
    if (!this.portalContents) return;
    const { height, width } = this.portalContents.getBoundingClientRect();
    this.setState({
      portalContentsHeight: height,
      portalContentsWidth: width,
    });
  }

  showTooltip = () => {
    this.setState({ open: true });
    window.addEventListener('scroll', this.hideTooltip);
  }

  hideTooltip = () => {
    this.setState({ open: false });
    window.removeEventListener('scroll', this.hideTooltip);
    if (this.props.mobile) {
      window.removeEventListener('click', this.handleClickAnywhere);
    }
  }

  handleMouseEnter = () => {
    if (!this.props.mobile) this.showTooltip();
  }

  handleMouseLeave = () => {
    if (!this.props.mobile) this.hideTooltip();
  }

  handleClickAnywhere = () => {
    if (this.state.countedInitialClick) {
      this.hideTooltip();
    } else {
      this.setState({ countedInitialClick: true });
    }
  }

  handleClick = () => {
    if (!this.props.mobile) return;
    if (this.state.open) {
      this.hideTooltip();
    } else {
      this.setState({ countedInitialClick: false }, () => {
        this.showTooltip();
        window.addEventListener('click', this.handleClickAnywhere);
      });
    }
  }

  render() {
    const { mobile, link: Link } = this.props;
    const {
      open,
      portalContentsHeight,
      portalContentsWidth,
      linkBottom,
      linkLeft,
      linkWidth,
    } = this.state;
    const left = linkLeft + ((linkWidth / 2) - (portalContentsWidth / 2));
    const top = linkBottom + (mobile ? MOBILE_MARGIN : DESKTOP_MARGIN);
    const customIconPassedIn = Boolean(Link) && typeof Link !== 'string';
    return (
      <React.Fragment>
        <TooltipLink
          innerRef={this.getTooltipLink}
          onClick={this.handleClick}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          {customIconPassedIn
            ? <Link />
            : <Icon icon={Link || 'info_outline'} />
          }
        </TooltipLink>
        <TooltipPortal
          open={open}
          top={top}
          left={left}
          height={portalContentsHeight}
          width={portalContentsWidth}
          mobile={mobile}
          renderContents={() => (
            <TooltipContents
              contentWidth={this.props.contentWidth}
              innerRef={this.getTooltipContents}
              childStringLength={typeof this.props.children === 'string' ? this.props.children.length : null}
              mobile={mobile}
            >
              {this.props.children}
            </TooltipContents>
          )}
        />
      </React.Fragment>
    );
  }
}
