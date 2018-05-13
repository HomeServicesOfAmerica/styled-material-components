import React, { PureComponent } from "react";
import styled from "styled-components";

import FocusRing from "./FocusRing";
import Thumb from "./Thumb";
import SliderDisabledWrapper from "./SliderDisabledWrapper";

class SliderThumbComponent extends PureComponent {
  state = {
    navigatingWithKeys: false,
    dragging: false
  };

  handleClick = event => {
    event.stopPropagation();
    if (this.props.disabled) return;
    this.thumb && this.thumb.focus();
  };

  onMouseDown = () => {
    if (this.props.disabled) return;
    this.setState({ dragging: true });
    document.addEventListener("mousemove", this.props.handleMouseMove);
    document.addEventListener("mouseup", this.onMouseUp);
  };

  onMouseUp = () => {
    if (this.props.disabled) return;
    this.setState({ dragging: false });
    document.removeEventListener("mousemove", this.props.handleMouseMove);
    document.removeEventListener("mouseup", this.onMouseUp);
  };

  onKeyDown = event => {
    if (this.props.disabled) return;
    const { keyCode } = event;
    // left or down
    if (keyCode === 37 || keyCode === 40) {
      this.enableKeys(this.props.decrement);
    }
    // right or up
    if (keyCode === 39 || keyCode === 38) {
      this.enableKeys(this.props.increment);
    }
  };

  enableKeys = cb => this.setState({ navigatingWithKeys: true }, cb);

  getThumb = ref => {
    this.thumb = ref;
  };

  handleBlur = () => {
    this.setState({ navigatingWithKeys: false });
  };

  render() {
    const { atMin, disabled } = this.props;
    const { navigatingWithKeys, dragging } = this.state;
    return (
      <div ref={this.getThumb} className={this.props.className}>
        <SliderDisabledWrapper disabled={disabled} dragging={dragging}>
          <Thumb
            tabIndex="1"
            className="styled-material-thumb"
            onMouseDown={this.onMouseDown}
            onClick={this.handleClick}
            onKeyDown={this.onKeyDown}
            onBlur={this.handleBlur}
            dragging={dragging}
            atMin={atMin}
            disabled={disabled}
          >
            <FocusRing navigatingWithKeys={navigatingWithKeys} atMin={atMin} />
          </Thumb>
        </SliderDisabledWrapper>
      </div>
    );
  }
}

const SliderThumb = styled(SliderThumbComponent)`
  cursor: inherit;
  width: 0px;
  height: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SliderThumb;
