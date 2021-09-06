const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit",
};
function TemperatureInput(props) {
  return (
    <fieldset>
      <legend>Enter the temperature in °{scaleNames[props.scale]}</legend>
      <input
        type="number"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </fieldset>
  );
}
export default TemperatureInput;
