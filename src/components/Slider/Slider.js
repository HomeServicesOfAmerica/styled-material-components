import React, { PureComponent } from "react";
import styled from "styled-components";

import SliderTrack from "./SliderTrack";

const getAverage = (min, max) => Math.round((min + max) / 2);

const valueIsValid = (value, min, max) =>
  typeof value === "number" && value >= min && value <= max;

const DEFAULT_MIN = 0;
const DEFAULT_MAX = 100;
const DEFAULT_STEP = 1;

class SliderComponent extends PureComponent {
  constructor(props) {
    super(props);
    const { min, max, initialValue, step } = props;
    const actualMin = typeof min === "number" ? min : DEFAULT_MIN;
    const actualMax = typeof max === "number" ? max : DEFAULT_MAX;
    if (actualMax <= actualMin)
      throw new Error(
        `Slider minimum ${actualMin} exceeds maximum ${actualMax}`
      );
    const value =
      typeof initialValue === "number"
        ? initialValue
        : getAverage(actualMin, actualMax);
    if (value < actualMin)
      throw new Error(
        `Slider value ${value} is less than minimum ${actualMin}`
      );
    if (value > actualMax)
      throw new Error(`Slider value ${value} exceeds maximum ${actualMax}`);
    if (step === 0) throw new Error("Slider step cannot be 0");
    const actualStep = step || DEFAULT_STEP;
    if (typeof actualStep !== "number")
      throw new Error(`Provided step ${step} is not a number`);
    this.state = {
      min: actualMin,
      max: actualMax,
      step: Math.abs(actualStep),
      value
    };
  }

  increment = () => {
    const value =
      typeof this.props.value === "number"
        ? this.props.value
        : this.state.value;
    const { step } = this.state;
    this.setValue(value + step);
  };

  decrement = () => {
    const value =
      typeof this.props.value === "number"
        ? this.props.value
        : this.state.value;
    const { step } = this.state;
    this.setValue(value - step);
  };

  setValue = value => {
    const { min, max } = this.state;
    let actualValue = value;
    if (value < min) actualValue = min;
    if (value > max) actualValue = max;
    if (this.props.handleValueChange) {
      this.props.handleValueChange(actualValue);
    }
    this.setState({ value: actualValue });
  };

  render() {
    const { min, max, step } = this.state;
    const { continuous } = this.props;
    const propsValue = this.props.value;
    const stateValue = this.state.value;
    const valueFromCorrectSource = valueIsValid(propsValue)
      ? propsValue
      : stateValue;
    return (
      <div className={`${this.props.className} smc-slider`}>
        <SliderTrack
          value={valueFromCorrectSource}
          min={min}
          max={max}
          step={step}
          continuous={Boolean(continuous)}
          increment={this.increment}
          decrement={this.decrement}
          setValue={this.setValue}
          disabled={this.props.disabled}
        />
      </div>
    );
  }
}

const Slider = styled(SliderComponent)``;

export default Slider;
