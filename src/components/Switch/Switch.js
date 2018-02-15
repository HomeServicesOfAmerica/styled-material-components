import React, { PureComponent } from 'react';
import styled from 'styled-components';
import SwitchTrack from './SwitchTrack';
import SwitchThumb from './SwitchThumb';

class SwitchComponent extends PureComponent {
  state = {
    on: true,
    off: false,
  };

  handleOnClick = () => {
    if (!this.props.disabled) {
      this.setState({
        on: !this.state.on,
        off: !this.state.off,
      });
      this.props.onChange && this.props.onChange();
    }
  }

  acceptableProps = {
    light: this.props.light,
    dark: this.props.dark,
    raised: this.props.raised,
    disabled: this.props.disabled,
  };

  render() {
    return (
      <SwitchTrack {...this.acceptableProps} {...this.state}>
        <SwitchThumb {...this.acceptableProps} {...this.state} onClick={this.handleOnClick} />
      </SwitchTrack>
    );
  }
}

const Switch = styled(SwitchComponent)``;

export default Switch;
