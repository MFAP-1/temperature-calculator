import React from "react";
import TemperatureInput from "./TemperatureInput";

// function to convert from F to C
function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// function to convert from C to F
function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

class Calculator extends React.Component {
  state = {
    tempInC: 0,
    tempInF: 0,
    scale: "c",
  };

  handleChange = (event) => {
    if (event.target.name === "tempInC") {
      this.setState({
        [event.target.name]: event.target.valueAsNumber,
        scale: "c",
      });
    } else {
      this.setState({
        [event.target.name]: event.target.valueAsNumber,
        scale: "f",
      });
    }
  };

  render() {
    const celsiusCurrentValue =
      this.state.scale === "c"
        ? this.state.tempInC
        : toCelsius(this.state.tempInF);
    const fahrenheitCurrentValue =
      this.state.scale === "f"
        ? this.state.tempInF
        : toFahrenheit(this.state.tempInC);
    return (
      <>
        <TemperatureInput
          scale="c"
          value={celsiusCurrentValue}
          name="tempInC"
          onChange={this.handleChange}
        />
        <TemperatureInput
          scale="f"
          value={fahrenheitCurrentValue}
          name="tempInF"
          onChange={this.handleChange}
        />
      </>
    );
  }
}
export default Calculator;
