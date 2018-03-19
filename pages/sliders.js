import { PureComponent } from 'react';
import styled from 'styled-components';
import { ThemeProvider, Slider, Button } from '../src';

class ControlledSlider extends PureComponent {
  state = {
    value: this.props.initialValue,
  };

  handleValueChange = value => this.setState({ value });

  render() {
    return (
      <div>
        <Slider
          value={this.state.value}
          handleValueChange={this.handleValueChange}
          {...this.props}
        />
        {this.state.value}
      </div>
    );
  }
}

const SliderNoFill = Slider.extend`
  & .styled-material-thumb {
    background: #fff;
  }
`;

class SlidersPageComponent extends PureComponent {
  state = {
    disabled: false,
  };

  toggleDisabled = () => {
    this.setState(({ disabled }) => ({ disabled: !disabled }));
  }

  render() {
    const { disabled } = this.state;
    return (
      <ThemeProvider theme={{ primary: '#03A9F4' }}>
        <div className={this.props.className}>
          <div>
            <h1>Sliders</h1>
            <div>
              <h2>Uncontrolled Sliders</h2>
              <div>
                <h3>Continuous</h3>
                <div className={this.props.className} style={{ width: '250px' }}>
                  <Slider continuous disabled={disabled} />
                </div>
              </div>
              <div>
                <h3>Discrete</h3>
                <div className={this.props.className} style={{ width: '250px' }}>
                  <Slider
                    min={0}
                    max={10}
                    step={2}
                    initialValue={5}
                    disabled={disabled}
                  />
                </div>
              </div>
            </div>
            <div>
              <h2>Controlled Sliders</h2>
              <div>
                <h3>Continuous</h3>
                <div className={this.props.className} style={{ width: '250px', marginLeft: 400 }}>
                  <ControlledSlider
                    min={-40}
                    max={80}
                    step={4}
                    initialValue={-4}
                    continuous
                    disabled={disabled}
                  />
                </div>
              </div>
              <div>
                <h3>Discrete</h3>
                <div className={this.props.className} style={{ width: '75%' }}>
                  <ControlledSlider
                    min={-40}
                    max={40}
                    step={4}
                    initialValue={-4}
                    disabled={disabled}
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1>Options</h1>
            <Button onClick={this.toggleDisabled}>
              {`Click me to ${disabled ? 'enable' : 'disable'} sliders`}
            </Button>
          </div>
        </div>
      </ThemeProvider>
    )
  }
}

const SlidersPage = styled(SlidersPageComponent)`
`;

export default SlidersPage;
